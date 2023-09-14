import { useEffect } from "react";
import TaskCard from "../components/TaskCard";
import { useTasks } from "../context/TaskContext";

function TasksPage() {
  const { tasks, loadTasks } = useTasks();

  useEffect(() => {
    loadTasks();
  }, []);

  function renderMain() {
    if (tasks.length === 0) return <h1>No task yet...</h1>;
    return tasks.map((task) => <TaskCard task={task} key={task.id} />);
  }

  return (
    <>
      <h1 className="text-5xl text-white font-bold text-center py-3">Tasks</h1>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">{renderMain()}</div>
    </>
  );
}

export default TasksPage;
