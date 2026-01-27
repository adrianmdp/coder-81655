import usuarios from "../../data/users";

const getUsers = () => {
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

const addUser = (user) => {
  // Simulated function to add a user
};

const removeUser = (userId) => {
  // Simulated function to remove a user
};

const updateUser = (userId, updatedInfo) => {
  // Simulated function to update a user
};

export const users = { getUsers, addUser, removeUser, updateUser };
