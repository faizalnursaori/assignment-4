"use client";

import { EditTodo } from "@/components/EditTodo";
import { useEffect, useState } from "react";

export default function TodoLists() {
  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [isEditFormVisible, setEditFormVisible] = useState(false);
  const [updateTodo, setUpdateTodo] = useState({
    _id: "",
    todo: "",
    date: "",
    time: "",
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch("https://v1.appbackend.io/v1/rows/o9TtrvRNlt4N");

    if (!res.ok) {
      return;
    }

    const data = await res.json();
    setTodos(data.data);
  };

  const handleDeleteTodo = async (_id) => {
    const res = await fetch("https://v1.appbackend.io/v1/rows/o9TtrvRNlt4N", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([_id]),
    });

    setTodos((prevTodos) => prevTodos.filter((todo) => todo._id !== _id));
  };

  const handleEditTodo = (todo) => {
    setUpdateTodo({
      _id: todo._id,
      todo: todo.todo,
      date: todo.date,
      time: todo.time,
    });
    setIsEditing(true);
    setEditFormVisible(true);
  };

  const handleCancelEdit = () => {
    setUpdateTodo({
      _id: "",
      todo: "",
      date: "",
      time: "",
    });
    setIsEditing(false);
    setEditFormVisible(false);
  };

  const handleUpdateTodo = async () => {
    const res = await fetch("https://v1.appbackend.io/v1/rows/o9TtrvRNlt4N", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateTodo),
    });

    fetchData();
    handleCancelEdit();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdateTodo((prevTodo) => ({
      ...prevTodo,
      [name]: value,
    }));
  };

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-3xl font-bold text-center mb-4">Todo Lists</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.isArray(todos) &&
          todos.map((todo, index) => (
            <div
              key={index}
              className="bg-gray-200 p-4 relative rounded-md shadow-md"
            >
              <button
                className="bg-blue-500 text-white absolute top-2 right-2 px-2 rounded-md"
                onClick={() => handleDeleteTodo(todo._id)}
              >
                X
              </button>
              <button
                className="bg-yellow-500 text-white absolute bottom-2 right-2 px-2 rounded-md"
                onClick={() => handleEditTodo(todo)}
              >
                Edit
              </button>
              <div className="space-y-4">
                <h1 className="text-xl font-semibold">{todo.todo}</h1>
                <p className="text-gray-600">{todo.date}</p>
                <p className="text-gray-600">{todo.time}</p>
              </div>
            </div>
          ))}
      </div>
      {isEditFormVisible && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
          <EditTodo
            updateTodo={updateTodo}
            onCancel={handleCancelEdit}
            onUpdate={handleUpdateTodo}
            onInputChange={handleInputChange}
          />
        </div>
      )}
    </div>
  );
}
