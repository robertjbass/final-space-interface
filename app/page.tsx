"use client";
import { useEffect, useState } from "react";
import { getTodos } from "@/app/utils/todoService";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: Boolean;
} | null;

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const fetchTodoHandler = async () => {
    const t: Todo[] = await getTodos();

    setTodos(t);
  };

  useEffect(() => {
    fetchTodoHandler();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {todos.length ? (
        <ul>
          {todos?.map((todo: any) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      ) : (
        <div>loading...</div>
      )}
    </main>
  );
}
