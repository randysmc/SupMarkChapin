
import axios from "./axios";


export const getAllTasksRequest = () => axios.get("/employes");

export const createTaskRequest = (task) => axios.post("/employes", task);

export const deleteTaskRequest = (id) => axios.delete(`/employes/${id}`);

export const getTaskRequest = (id) => axios.get(`/employes/${id}`);

export const updateTaskRequest = (id, task) => axios.put(`/employes/${id}`, task);

