export const TodoInput = ({ todo, date, time, setTodo, setDate, setTime, handleAddTodos }) => (
    <div className="bg-white p-4 md:p-10 rounded-lg shadow-lg">
        <input className="mb-2 md:mb-0 w-full h-10 md:h-[44px] px-3 border rounded" name="todo" type="text" onChange={(e) => setTodo(e.target.value)} value={todo} placeholder="Type your todos here..." />
        <div className="flex flex-col md:flex-row mb-2">
            <input className="mb-2 md:mb-0 w-full md:w-1/2 h-10 md:h-[44px] px-3 border rounded" name="date" type="date" onChange={(e) => setDate(e.target.value)} value={date} placeholder="Select date" />
            <input className="w-full md:w-1/2 h-10 md:h-[44px] px-3 border rounded" name="time" type="time" onChange={(e) => setTime(e.target.value)} value={time} placeholder="Select time" />
        </div>
        <button className="bg-blue-500 text-white px-4 h-10 w-full md:h-[44px] rounded focus:outline-none" onClick={handleAddTodos}>Add</button>
    </div>
);

