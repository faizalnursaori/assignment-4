import React from 'react';

export const TodoInput = ({ todo, date, time, setTodo, setDate, setTime, handleAddTodos }) => (
    <div className="bg-white p-10 rounded-lg shadow-lg">
        <input className="h-[44px]" name="todo" type="text" onChange={(e) => setTodo(e.target.value)} value={todo} placeholder="Type your todos here..." />
        <input name="date" type="date" onChange={(e) => setDate(e.target.value)} value={date} placeholder="Select date" />
        <input name="time" type="time" onChange={(e) => setTime(e.target.value)} value={time} placeholder="Select time" />
        <button className="bg-blue-500 text-white px-4 h-[44px] py-2 rounded-r-lg focus:outline-none" onClick={handleAddTodos}>Add</button>
    </div>
);

