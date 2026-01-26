import { useState } from "react";

const TodoCompo = ({
  id,
  task,
  completedStatus,
  toggleTodo,
  deleteTodo,
  editTodo,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(task);

  return (
    <li className="flex items-center justify-between rounded-md border border-white/10 p-3">
      {isEditing ? (
        // EDIT MODE
        <div className="flex gap-2 w-full">
          <input
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            className="flex-1 bg-black border border-white/20 px-2 py-1 text-white"
          />

          <div className="flex gap-2 text-sm">
            <button
              className="text-green-400"
              onClick={() => {
                editTodo(id, editValue);
                setIsEditing(false);
              }}
            >
              Save
            </button>

            <button
              className="text-white/60"
              onClick={() => {
                setEditValue(task);
                setIsEditing(false);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        // VIEW MODE
        <>
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={completedStatus}
              onChange={() => toggleTodo(id)}
            />
            <span
              className={`text-sm ${
                completedStatus ? "line-through text-white/40" : "text-white"
              }`}
            >
              {task}
            </span>
          </div>

          <div className="flex gap-2 text-sm">
            <button
              className="cursor-pointer text-white/60 hover:text-white"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>

            <button
              className="cursor-pointer text-red-400 hover:text-red-300"
              onClick={() => deleteTodo(id)}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default TodoCompo;
