import axios from 'axios';

const API_URL = 'http://localhost:4000/tasks';

export const getTasksRequest = async () => await axios.get(API_URL);

export const createTaskRequest = async (task) =>
  await axios.post(API_URL, task);

export const deleteTaskRequest = async (id) =>
  await axios.delete(`${API_URL}/${id}`);

export const getTaskRequest = async (id) => await axios.get(`${API_URL}/${id}`);

export const updateTaskRequest = async (id, newFields) =>
  await axios.patch(`${API_URL}/${id}`, newFields);

export const toggleTaskDoneRequest = async (id, done) =>
  await axios.patch(`${API_URL}/${id}`, { done });
