import React, { useCallback } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import List from './List';


const Lists = React.memo(({ todoData, setTodoData }) => {

    console.log("Lists :");


    const handleEnd = useCallback((result) => {
        //result 매개변수에는 source 항목 및 대상 위치와 같은 드래그 이벤트에 대한 정보가 포함됩니다.
        console.log("handleEnd : ", result);
        //목적지가 없으면(이벤트 취소) 이 함수를 종료합니다.
        if (!result.destination) return;

        //리액트 불변성을 지켜주기 위해 새로운 todoData 생성
        const newTodoData = todoData;

        //1. 변경시키는 아이템을 배열에서 지워줍니다.
        //2. return  값으로 채워진 아이템을 집어줍니다.
        const [reorderItem] = newTodoData.splice(result.source.index, 1);

        //원하는 자리에 reorderItem 을 insert 해줍니다.
        newTodoData.splice(result.destination.index, 0, reorderItem);
        setTodoData(newTodoData);

    }, [setTodoData, todoData]);

    const handleClick = useCallback((id) => {
        let newTodoData = todoData.filter(data => data.id !== id);
        setTodoData(newTodoData);
    }, [setTodoData, todoData]);




    return (
        <div>

            <DragDropContext onDragEnd={handleEnd}>
                <Droppable droppableId='to-dos'>
                    {(provided) => (

                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            {todoData.map((data, index) => (
                                <Draggable
                                    key={data.id}
                                    draggableId={data.id.toString()}
                                    index={index}
                                >
                                    {(provided, snapshot) => (

                                        <List
                                            id={data.id}
                                            completed={data.completed}
                                            title={data.title}
                                            todoData={todoData}
                                            setTodoData={setTodoData}
                                            provided={provided}
                                            snapshot={snapshot}
                                            handleClick={handleClick}
                                        />

                                    )}


                                </Draggable>

                            ))}
                        </div>

                    )}

                </Droppable>
            </DragDropContext>
        </div >
    );


});


export default Lists;