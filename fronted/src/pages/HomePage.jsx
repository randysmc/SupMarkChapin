import { useAuth } from "../context/AuthContext";
import { Card } from "../components/ui";

function HomePage() {
  const data = useAuth();
  console.log(data);

  return <div>

    <Card>
      <h1 className="text-3xl font-bold my-4">Home Page</h1>
      <p >SuperMercado que cubres sus necesidades más basicas, pero que no cuenta con un buen sistema xd</p>
    </Card>

  </div>;
}

export default HomePage;