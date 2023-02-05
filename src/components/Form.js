import React, { useState } from 'react';

const Form = ({ todoData, setTodoData }) => {

    const [value, setValue] = useState("");
    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let newTodoData = {
            id: Date.now(),
            title: value,
            completed: false
        }
        setTodoData(prev => [...prev, newTodoData]);

        localStorage.setItem("todoData", JSON.stringify([...todoData, newTodoData]));
        setValue("");
    };


    return (
        <>
            <form onSubmit={handleSubmit} className="flex pt-2">
                <input
                    className="w-full px-3 py-2 text-gray-500 rounded shadow border-2 border-gray-400"
                    type="text"
                    name="value"
                    placeholder="해야 할일을 입력 하세요."
                    value={value}
                    onChange={handleChange}
                />

                <input
                    className='p-2 text-blue-400 border-2 border-blue-400 rounded hover:text-white
                     hover:bg-blue-400 hover:cursor-pointer'
                    type="submit"
                    value="입력"
                />
            </form>
        </>
    );
};

export default Form;