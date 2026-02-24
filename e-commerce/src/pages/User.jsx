import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import { services } from "../services";
import { AuthContext } from "../contexts/auth";

const User = () => {
  const params = useParams();

  const { login } = useContext(AuthContext);

  const [user, setUser] = useState(null);

  useEffect(() => {
    services.firestore.users.getUser(params.id).then((response) => {
      if (response.success) setUser(response.data);
    });
  }, [params.id]);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      Hola! Viendo el usuario {user.name} <br />
      {JSON.stringify(user)}
      <br />
      {name}
      <button onClick={login}>Iniciar Sesión</button>
    </div>
  );
};

export { User };
