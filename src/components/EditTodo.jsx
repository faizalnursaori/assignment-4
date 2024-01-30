export const EditTodo = ({ updateTodo, onCancel, onUpdate, onInputChange }) => {
    return (
        <div className="bg-white p-4 rounded-md w-64">
            <h2 className="text-xl font-semibold mb-2">Edit Todo</h2>
            <input
                type="text"
                name="todo"
                value={updateTodo.todo}
                onChange={onInputChange}
                placeholder="Todo"
                className="p-2 mb-2 w-full"
            />
            <input
                type="date"
                name="date"
                value={updateTodo.date}
                onChange={onInputChange}
                placeholder="Date"
                className="p-2 mb-2 w-full"
            />
            <input
                type="time"
                name="time"
                value={updateTodo.time}
                onChange={onInputChange}
                placeholder="Time"
                className="p-2 mb-2 w-full"
            />
            <button
                className="bg-green-500 text-white px-4 py-2 rounded-md mr-2"
                onClick={onUpdate}
            >
                Update Todo
            </button>
            <button
                className="bg-gray-500 text-white px-4 py-2 rounded-md"
                onClick={onCancel}
            >
                Cancel
            </button>
        </div>
    );
};