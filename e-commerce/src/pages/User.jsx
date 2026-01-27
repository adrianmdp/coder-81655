import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { services } from "../services";

const User = () => {
  const params = useParams();

  const [user, setUser] = useState(null);

  useEffect(() => {
    services.jsonplaceholder.users.getUser(params.id).then((response) => {
      if (response.success) setUser(response.data);
    });
  }, [params.id]);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      Viendo el usuario {user.name} <br />
      {JSON.stringify(user)}
    </div>
  );
};

export { User };
