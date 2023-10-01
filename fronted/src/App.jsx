import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import EmployesFormPage from "./pages/EmployesFormPage";
import EmployesPage from "./pages/EmployesPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import RegisterPage from "./pages/RegisterPage";
import TasksPage from "./pages/TasksPage";
import TaskFormPage from "./pages/TaskFormPage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/employes/new" element={<EmployesFormPage />} />
      <Route path="/employes/1/edit" element={<EmployesFormPage />} />
      <Route path="/employes" element={<EmployesPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/tasks" element={<TasksPage />} />
      <Route path="/task/new" element={<TaskFormPage />} />
      <Route path="/task/1/edit" element={<TaskFormPage />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
