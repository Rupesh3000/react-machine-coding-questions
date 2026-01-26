import { useEffect, useState } from "react";
import TodoCompo from "./TodoCompo";

const Todo = () => {
  const [todos, setTodos] = useState(() => {
    const stored = localStorage.getItem("todos");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const [task, setTask] = useState("");
  const [filter, setFilter] = useState("all");

  const addTodo = () => {
    if (!task.trim()) return;
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          id: crypto.randomUUID(),
          task: task,
          completedStatus: false,
        },
      ];
    });
    setTask("");
  };

  const toggleTodo = (id) => {
    setTodos((prev) => {
      return prev.map((t) => {
        return t.id === id ? { ...t, completedStatus: !t.completedStatus } : t;
      });
    });
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const editTodo = (id, newTask) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, task: newTask } : t))
    );
  };

  const filteredTodos = todos.filter((t) => {
    if (filter === "active") return !t.completedStatus;
    if (filter === "completed") return t.completedStatus;
    return true; // all
  });

  const clearTodos = () => {
    localStorage.removeItem("todos");
    setTodos([]);
  };

  return (
    <div className="mx-auto max-w-xl rounded-lg border border-white/10 bg-black p-6">
      {/* Header */}
      <h1 className="mb-4 text-xl font-semibold text-white">
        Advanced Todo List
      </h1>

      {/* Add Todo */}
      <div className="mb-4 flex gap-2">
        <input
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              addTodo();
            }
          }}
          value={task}
          onChange={(e) => {
            return setTask(e.target.value);
          }}
          type="text"
          placeholder="Add a new todo..."
          className="flex-1 rounded-md bg-white/5 px-3 py-2 text-sm text-white placeholder-white/40 outline-none ring-1 ring-white/10"
        />
        <button
          onClick={addTodo}
          className="rounded-md bg-white px-4 py-2 text-sm font-medium text-black cursor-pointer"
        >
          Add
        </button>
      </div>

      {/* Filters */}
      <div className="mb-4 flex gap-2 text-sm">
        <button
          className="rounded-md border border-white/20 px-3 py-1 text-white"
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className="rounded-md border border-white/10 px-3 py-1 text-white/60"
          onClick={() => setFilter("active")}
        >
          Active
        </button>
        <button
          className="rounded-md border border-white/10 px-3 py-1 text-white/60"
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
        <button
          onClick={clearTodos}
          className="rounded-md border border-red-400 px-3 py-1 text-red-400 hover:text-red-300"
        >
          Clear All
        </button>
      </div>

      {/* Todo List */}
      <ul className="space-y-2">
        {filteredTodos.map((t) => {
          return (
            <TodoCompo
              key={t.id}
              id={t.id}
              task={t.task}
              completedStatus={t.completedStatus}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Todo;
