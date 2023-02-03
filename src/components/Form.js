import React, { useState } from 'react';

const Form = ({ setTodoData }) => {
    const [value, setValue] = useState("");

    const handleChnage = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let newTodoData = {
            id: Date.now(),
            title: value,
            completed: false
        }

        setTodoData(prev => [...prev, newTodoData])
        setValue("");
    }

    return (
        <>
            <form style={{ display: 'flex' }} onSubmit={handleSubmit}>
                <input
                    className="border-2 border-gray-400"
                    type="text"
                    name="value"
                    style={{ flex: "10", padding: "5px" }}
                    placeholder="해야 할일을 입력 하세요."
                    value={value}
                    onChange={handleChnage}
                />

                <input
                    type="submit"
                    name="입력"
                    className="btn"
                    style={{ flex: '1' }}

                />
            </form>
        </>
    );
};

export default Form;