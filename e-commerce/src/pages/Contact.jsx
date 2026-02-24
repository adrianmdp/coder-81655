import { useContext } from "react";
import { AuthContext } from "../contexts/auth";

const Contact = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1>Contact</h1>

      <p>{user ? user.name : "Invitado"}, puedes contactarnos en</p>
    </div>
  );
};
export { Contact };
