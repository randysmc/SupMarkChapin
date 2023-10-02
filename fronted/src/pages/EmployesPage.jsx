/*import { useEffect } from "react";
import EmployedCard from "../components/tasks/EmployedCard";
import { useEmployes } from "../context/EmployedContext";


function EmployesPage() {
  const { employes, loadEmployes } = useEmployes();

  useEffect(() => {
    loadEmployes();
  }, []);

  if (employes.length === 0) return (
    <div className="flex justify-center items-center h-[calc(100vh-10rem)]">
      <h1 className="text-3xl font-bold">No employes found</h1>
    </div>
  )

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
      {tasks.map((employed) => (
        <TaskCard employed={employed} key={employed.id} />
      ))}
    </div>
  );
}

export default EmployesPage;*/