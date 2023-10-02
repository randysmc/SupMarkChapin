import { Card, Button } from "../ui";
import { useEmployes } from "../../context/EmployedContext";
import { useNavigate } from "react-router-dom";
import { PiTrashSimpleLight } from "react-icons/pi";
import { BiPencil } from "react-icons/bi";

function EmployedCard({ employed }) {
  const { deleteEmployed } = useEmployes();
  const navigate = useNavigate();

  return (
    <Card key={employed.id} className="px-7 py-4 flex flex-col justify-center">
      <div>
        <h1 className="text-2xl font-bold">{employed.id}</h1>
        <p>{employed.description}</p>
        <p>{employed.description}</p>
      </div>
      
      <div className="my-2 flex justify-end gap-x-2">
        <Button onClick={() => navigate(`/employes/${employed.id}/edit`)}>
          <BiPencil className="text-white" />
          Editar
        </Button>
        <Button
          className="bg-red-700 hover:bg-red-600"
          onClick={async () => {
            if (window.confirm("¿Estás seguro de eliminar esta tarea?")) {
              deleteEmployed(employed.id);
            }
          }}
        >
          <PiTrashSimpleLight className="text-white" />
          Eliminar
        </Button>
      </div>
    </Card>
  );
}

export default EmployedCard;