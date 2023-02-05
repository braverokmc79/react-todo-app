import React, { useState, useCallback } from 'react';

const List = React.memo(({ id, completed, title, todoData, setTodoData, provided, snapshot, handleClick }) => {


    const [isEditing, setIsEditing] = useState(false);
    const [editTitle, setEditTitle] = useState(title);


    const handleCompleteChange = useCallback((id) => {
        let newTodoData = todoData.map(data => {
            if (data.id === id) {
                data.completed = !data.completed;
            }
            return data;
        });
        setTodoData(newTodoData);

        localStorage.setItem("todoData", JSON.stringify(newTodoData));
    }, [todoData, setTodoData]);


    const handleEditChange = useCallback((e) => {
        setEditTitle(e.target.value);
    }, [setEditTitle]);


    const handleSubmit = () => {
        let newTododata = todoData.map((data) => {
            if (data.id === id) {
                data.title = editTitle;
            }
            return data;
        });

        setTodoData(newTododata);
        localStorage.setItem("todoData", JSON.stringify(newTododata));
        setIsEditing(false);
    };


    if (isEditing) {
        return (

            <div className="bg-gray-100 flex items-centerjustify-between w-full px-4 py-1 my-2 text-gray-600 border rounded">
                <form onSubmit={handleSubmit}>
                    <input className='w-full px-3 py-2' value={editTitle} onChange={handleEditChange} autoFocus />
                </form>

                <div className='items-center'>
                    <button
                        className='px-1 my-2 float-right
                            text-red-400 border-2 border-red-400 rounded hover:text-white
                            hover:bg-red-400 hover:cursor-pointer'
                        onClick={() => handleClick(id)}>x</button>

                    <button
                        className='px-1 my-2 mx-1 float-right
                             text-blue-800 border-2 border-blue-800 rounded hover:text-white
                            hover:bg-blue-800 hover:cursor-pointer'
                        type="submit" onClick={handleSubmit}>저장</button>
                </div>
            </div >
        );

    } else {
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
                        <button
                            className='px-1 my-2 float-right
                             text-red-400 border-2 border-red-400 rounded hover:text-white
                            hover:bg-red-400 hover:cursor-pointer'

                            onClick={() => handleClick(id)}>x</button>

                        <button
                            className='px-1 my-2 mx-1 float-right
                             text-green-800 border-2 border-green-800 rounded hover:text-white
                            hover:bg-green-800 hover:cursor-pointer'
                            onClick={() => setIsEditing(true)}>수정</button>
                    </div>
                </div>
            </div>
        );
    }



});

export default List;