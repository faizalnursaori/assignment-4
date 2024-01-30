import React from 'react'

export const TodoItems = () => {
    return (
        <div>
            <input name="todo" type="text" onChange={(e) => setTodo(e.target.value)} value={todo} placeholder="Type your todos here..." />
            <input name="date" type="date" onChange={(e) => setDate(e.target.value)} value={date} placeholder="Select date" />
            <input name="time" type="time" onChange={(e) => setTime(e.target.value)} value={time} placeholder="Select time" />
            <button onClick={handleAddTodos}>Add</button>
            <div className="mt-4">
                {todos.map((item, index) => (
                    <div key={index} className="flex flex-col items-start p-2 border-b border-gray-300 shadow mb-1">
                        <div>{item.todo}, {item.date}, {item.time}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}
