import { usuarios } from "../data/users";

const obtenerUsuarios = () => {
  return new Promise((resolve, reject) => {
    // Acá tienen que pasar cosas con éxito o sin éxito
    const operaciónExitosa = true; // Simulación de éxito o fracaso

    if (operaciónExitosa /* si hubo éxito */) {
      resolve({ success: true, data: usuarios });
    } else {
      reject({ success: false, message: "Error al obtener los usuarios" });
    }
  });
};

export { obtenerUsuarios };
