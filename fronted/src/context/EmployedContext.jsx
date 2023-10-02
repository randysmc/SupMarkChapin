/*import { createContext, useState, useContext } from "react";
import {
  getAllEmployesRequest,
  deleteEmployedRequest,
  createEmployedRequest,
  getEmployedRequest,
  updateEmployedRequest,
} from "../api/employes.api";

const EmployedContext = createContext();

export const useEmployes = () => {
  const context = useContext(EmployedContext);
  if (!context) {
    throw new Error("useTasks debe estar dentro del proveedor TaskProvider");
  }
  return context;
};

export const EmployedProvider = ({ children }) => {
  const [employes, setEmployes] = useState([]);
  const [errors, setErrors] = useState([]);
  

  const loadEmployes = async () => {
    const res = await getAllEmployesRequest();
    setEmployes(res.data);
  };

  const loadEmploy = async (id) => {
    const res = await getEmployedRequest(id);
    return res.data;
  };

  const createEmployed = async (task) => {
    try {
      const res = await createEmployedRequest(employed);
      setEmployes([...employes, res.data]);
      return res.data;
    } catch (error) {
      if (error.response) {
        setErrors([error.response.data.message]);
      }
    }
  };

  const deleteEmployed = async (id) => {
    const res = await deleteEmployedRequest(id);
    if (res.status === 204) {
      setTasks(employes.filter((employed) => employed.id !== id));
    }
  };

  const updateEmployed = async (id, employed) => {
    try {
      const res = await updateEmployedRequest(id, employed);
      return res.data;
    } catch (error) {
      if (error.response) {
        setErrors([error.response.data.message]);
      }
    }
  };

  return (
    <EmployedContext.Provider
      value={{
        employes,
        loadEmployes,
        deleteEmployed,
        createEmployed,
        loadEmployed,
        errors,
        updateEmployed
      }}
    >
      {children}
    </EmployedContext.Provider>
  );
};*/