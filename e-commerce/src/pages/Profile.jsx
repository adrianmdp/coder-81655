import { useParams } from "react-router";

const Profile = () => {
  const params = useParams();

  return (
    <div>
      <h1>Prfile {params.userId}</h1>
    </div>
  );
};

export { Profile };
