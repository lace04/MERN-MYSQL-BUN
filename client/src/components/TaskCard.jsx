import { useTasks } from '../context/TaskContext';
import { useNavigate } from 'react-router-dom';

function TaskCard({ task }) {
  const { deleteTask, toggleTaskDone } = useTasks();
  const navigate = useNavigate();
  const handleDone = async () => {
    await toggleTaskDone(task.id);
  };

  return (
    <div className="bg-zinc-700 rounded-md p-4">
      <header className="flex justify-between">
        <h2 className="text-sm font-bold">{task.title}</h2>
        <span>{task.done == 1 ? '✅' : '❌'}</span>
      </header>
      <p className="text-xs">{task.description}</p>
      <div className="flex flex-col items-start mt-2 mb-2">
        <span className="text-right text-orange-400 text-xs">
          Created: {new Date(task.created_at).toLocaleString()}
        </span>
        <span className="text-right text-zinc-400 text-xs">
          Updated: {new Date(task.updated_at).toLocaleString()}
        </span>
      </div>
      <div className="flex gap-x-1 justify-end">
        <button
          className="bg-blue-700 px-2 py-1 text-white"
          onClick={() => navigate(`/edit/${task.id}`)}
        >
          Edit
        </button>
        <button
          className="bg-red-700 px-2 py-1 text-white"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
        <button
          className="bg-green-700 px-2 py-1 text-white"
          onClick={() => handleDone(task.done)}
        >
          State
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
