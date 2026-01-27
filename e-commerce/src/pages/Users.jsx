import { useState } from "react";
import { services } from "../services";
import { Card } from "../components/Card";
import { Link, useSearchParams } from "react-router";

const Users = () => {
  const [users, setUsers] = useState();

  const [queryParams, setQueryParams] = useSearchParams();

  services.jsonplaceholder.users.getUsers().then((response) => {
    if (response.success) setUsers(response.data);
  });

  if (!users) return <div>Loading...</div>;

  const handleClick = (key, limit) => {
    queryParams.set(key, limit);
    setQueryParams(queryParams);
  };

  return (
    <>
      <h1>Users Page</h1>
      Offset: {JSON.stringify(queryParams.get("offset"))} <br />
      limit: {JSON.stringify(queryParams.get("limit"))} <br />
      <button onClick={() => handleClick("limit", 10)}>10</button>
      <button onClick={() => handleClick("limit", 20)}>20</button>
      <button onClick={() => handleClick("limit", 30)}>30</button>
      {users.map((user) => {
        return (
          <Card name={user.name} key={user.name}>
            <ul>
              <li>
                Nombre: <Link to={`/users/${user.id}`}>{user.name}</Link>
              </li>
              <li>Email: {user.email}</li>
              <li>Teléfono: {user.phone}</li>
              <li>Website: {user.website}</li>
            </ul>
          </Card>
        );
      })}
      <button onClick={() => handleClick("offset", 1)}>1</button>
      <button onClick={() => handleClick("offset", 21)}>2</button>
      <button onClick={() => handleClick("offset", 41)}>3</button>
    </>
  );
};

export { Users };
