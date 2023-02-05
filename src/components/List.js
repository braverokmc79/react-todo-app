import React, { useCallback } from 'react';

const List = React.memo(({ id, completed, title, todoData, setTodoData, provided, snapshot, handleClick }) => {

    console.log("Lists :");


    const handleCompleteChange = useCallback((id) => {
        let newTodoData = todoData.map(data => {
            if (data.id === id) {
                data.completed = !data.completed;
            }
            return data;
        });
        setTodoData(newTodoData);
    }, [todoData, setTodoData]);


    return (
        <div key={id}
            {...provided.draggableProps}
            ref={provided.innerRef}
            {...provided.dragHandleProps}
            className={snapshot.isDragging ? "selected" : "not-selected"}
        >

            <div className={`${snapshot.isDragging ? "bg-gray-300" : "bg-gray-100"} flex items-center
                                                 justify-between w-full px-4 py-1 my-2 text-gray-600 border rounded`}
                key={id}>

                <div>
                    <input type="checkbox" defaultChecked={completed} onChange={() => handleCompleteChange(id)} />
                    <span className={`${completed ? "line-through" : undefined} px-2`}>{title}</span>
                </div>
                <div className='items-center'>
                    <button className='px-4 py-2 float-right' onClick={() => handleClick(id)}>x</button>
                </div>
            </div>
        </div>
    );
});

export default List;