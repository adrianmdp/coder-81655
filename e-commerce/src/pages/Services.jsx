import { useEffect, useState } from "react";
import { obtenerUsuarios } from "../services/users";
import { Card } from "../components/Card";

const Services = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    obtenerUsuarios()
      .then((response) => {
        console.log("Respuesta exitosa:", response);
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  console.log(users);

  return (
    <div>
      <h1>Services</h1>

      {users.map((usuario) => {
        return (
          <Card name={usuario.nombre}>
            <ul>
              <li>nombre: "Juan"</li>
              <li>apellido: "Pérez"</li>
              <li>fechaNacimiento: "1988-04-12"</li>
              <li>nacionalidad: "Argentina"</li>
              <li>
                <img src={usuario.imagenPerfil} />
              </li>
            </ul>
          </Card>
        );
      })}
    </div>
  );
};

export { Services };
