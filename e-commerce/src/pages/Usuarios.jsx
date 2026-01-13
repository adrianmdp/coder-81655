import { Card } from "../components/Card";

const Contact = () => {
  return (
    <>
      <h1>Users Page</h1>

      <Card name="Adrián">
        <div>
          <ul>
            <li>Descripción: Lorem ipsum</li>
            <li>Edad: 42</li>
            <li>Nacionalidad: Argentino</li>
            <li>Ciudad: Mar del Plata</li>
          </ul>
        </div>
      </Card>

      <Card name="Ludmila" description="Lorem ">
        Hola mundo
      </Card>
      <Card name="Mailen" description=" Ipsum">
        <table border={1}>
          <tbody>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
            </tr>
          </tbody>
        </table>
      </Card>
      <Card name="Valentina" description="Lorem Ipsum Lorem" />
    </>
  );
};

export { Contact };
