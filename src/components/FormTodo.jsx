"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { TodoInput } from "./TodoInput";
import toast from "react-hot-toast";

export const FormTodo = () => {
    const router = useRouter();
    const [todo, setTodo] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false)

    async function handleAddTodos() {
        setLoading(true)
        const res = await fetch("https://v1.appbackend.io/v1/rows/o9TtrvRNlt4N", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify([{ todo, date, time }])
        });

        const data = await res.json();

        const newTodo = data[0];

        setTodos([...todos, newTodo]);
        router.push("/todo-list");
        setLoading(false)
        toast.success("Berhasil dibuat!")

    }


    return (
        <main className="flex flex-col items-center justify-center h-screen bg-gray-200">
            <h1>Todo List.</h1>
            <div className="bg-white p-10 rounded-lg shadow-lg">
                <TodoInput
                    todo={todo}
                    date={date}
                    time={time}
                    setTodo={setTodo}
                    setDate={setDate}
                    setTime={setTime}
                    handleAddTodos={handleAddTodos}
                />
                <div className="mt-4">
                    {todos.map((item) => (
                        <div key={item._id} className="flex flex-col items-start p-2 border-b border-gray-300 shadow mb-1">
                            <div>{item.todo}, {item.date}, {item.time}</div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};