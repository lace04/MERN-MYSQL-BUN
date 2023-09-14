import { Routes, Route } from 'react-router-dom';
import { TaskContextProvider } from './context/TaskContext';
import TaskPage from './pages/TaskPage';
import TaskForm from './pages/TaskForm';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="bg-zinc-800 h-screen">
      <Navbar />
      <div className="container mx-auto py-4 px-10">
        <TaskContextProvider>
          <Routes>
            <Route path="/" element={<TaskPage />} />
            <Route path="/new" element={<TaskForm />} />
            <Route path="/edit/:id" element={<TaskForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TaskContextProvider>
      </div>
    </div>
  );
}

export default App;
