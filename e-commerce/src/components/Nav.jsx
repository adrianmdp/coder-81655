import { useContext } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../contexts/auth";

const Nav = () => {
  const { user } = useContext(AuthContext);

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/users">Users</NavLink>
        </li>
        <li>
          <NavLink to="/users">Users</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>Hola {user ? `${user.name} (${user.email})` : "Anónimo"}</li>
      </ul>
    </nav>
  );
};

export { Nav };
