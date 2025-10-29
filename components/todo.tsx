"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export default function TodoPage() {
  const [todo, setTodo] = useState<Todo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTodo = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch("/api/todo");
      if (!res.ok) throw new Error("Failed to fetch todo");
      const data = await res.json();
      setTodo(data);
    } catch (err: unknown) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md"
      >
        <Card className="rounded-2xl shadow-2xl bg-white/90 backdrop-blur p-6">
          <CardContent className="flex flex-col gap-4 text-center">
            <h1 className="text-2xl font-bold text-indigo-700">✨ Todo Viewer</h1>

            {loading && (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                className="mx-auto w-8 h-8 border-4 border-indigo-400 border-t-transparent rounded-full"
              />
            )}

            {error && (
              <p className="text-red-600 font-medium">
                ⚠️ Error: {error}
              </p>
            )}

            {todo && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gray-50 rounded-xl shadow-inner p-4"
              >
                <p className="text-gray-800 font-semibold">
                  🆔 ID: {todo.id}
                </p>
                <p className="text-gray-700 mt-2">
                  <strong>Title:</strong> {todo.title}
                </p>
                <p
                  className={`mt-3 inline-block px-3 py-1 text-sm font-medium rounded-full ${
                    todo.completed
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {todo.completed ? "✅ Completed" : "⏳ In Progress"}
                </p>
              </motion.div>
            )}

            <Button
              onClick={fetchTodo}
              className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white transition-all rounded-lg"
            >
              🔄 Refresh
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
