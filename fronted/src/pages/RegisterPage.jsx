import { Button, Card, Container, Input, Label } from "../components/ui";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function RegisterPage() {
  const {
    register, // registrar los input 
    handleSubmit, //maneja lo que se envia
    formState: { errors }, //errores
  } = useForm();

  const { signup, errors: signupErrors } = useAuth();

  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    const user = await signup(data);

    if (user) navigate("/tasks");
  });

  return (
    <Container className="h-[calc(100vh-10rem)] flex items-center justify-center">
      <Card>
        {signupErrors &&
          signupErrors.map((err) => (
            <p className="bg-red-500 text-white p-2 text-center">{err}</p>
          ))}

        <h3 className="text-2xl font-bold">Register</h3>

        <form onSubmit={onSubmit}>
          <Label htmlFor="name">Nombre</Label>
          <Input
            placeholder="Ingresa tu nombre"
            {...register("name", {
              required: true, // datos requeridos
            })}
          />

          {errors.name && <p className="text-red-800">Nombre requeridod</p>}

          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            placeholder="Ingresa email"
            {...register("email", {
              required: true,
            })}
          />
          {errors.email && <p className="text-red-800">Email es requerido</p>}

          <Label htmlFor="password">Contraseña</Label>
          <Input
            type="password"
            placeholder="Ingresa tu contraseña"
            {...register("password", {
              required: true,
            })}
          />
          {errors.password && (
            <p className="text-red-500">Contraseña requeridad</p>
          )}

          <Button>Register</Button>

          <div className="flex justify-between my-4">
            <p className="mr-4">¿Ya tienes un usuario?</p>
            <Link to="/login" className="font-bold">
              Login
            </Link>
          </div>
        </form>
      </Card>
    </Container>
  );
}

export default RegisterPage;