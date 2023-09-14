import { Form, Formik } from 'formik';
import { useTasks } from '../context/TaskContext';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function TaskForm() {
  const { createTask, getTask, updateTask } = useTasks();
  const [task, setTask] = useState({
    title: '',
    description: '',
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadTask = async () => {
      if (id) {
        const task = await getTask(id);
        setTask({
          title: task.title,
          description: task.description,
        });
      }
    };
    loadTask();
  }, []);

  return (
    <div className="min-h-[50%]">
      <Formik
        initialValues={task}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          if (id) {
            await updateTask(id, values);
          } else {
            await createTask(values);
            actions.resetForm();
          }
          navigate('/');
          setTask({
            title: '',
            description: '',
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form
            onSubmit={handleSubmit}
            className="bg-zinc-700 max-w-sm rounded-md p-4 mx-auto mt-10"
          >
            <h1 className="text-xl font-semibold uppercase text-center">
              {id ? 'Edit Task' : 'New Task'}
            </h1>

            <label className="block">Title</label>
            <input
              type="text"
              name="title"
              placeholder="Write a title"
              className="p-2 w-full bg-zinc-800 rounded-md"
              onChange={handleChange}
              value={values.title}
            />

            <label className="block">Description</label>
            <textarea
              name="description"
              placeholder="Write a description"
              rows={3}
              className="p-2 w-full bg-zinc-800 rounded-md"
              onChange={handleChange}
              value={values.description}
            />

            <button
              className="block bg-indigo-600 px-2 py-1 text-white rounded-md w-full hover:bg-indigo-700"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Saving...' : 'Add'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default TaskForm;
