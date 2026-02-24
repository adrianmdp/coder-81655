import { firestore } from '../../utils/firebase';
import { addDoc, getDocs, getDoc, collection } from 'firebase/firestore'

import usersData from '../../data/users.json'

const getUsers = async () => {

  try {
    const querySnapshot = await getDocs(collection(firestore, "users"));

    const users = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))

    return { success: true, data: users };
  } catch (error) {
    return { success: false, error };
  }
};

const addUser = async (data) => {
  try {
    const docRef = await addDoc(collection(firestore, "users"), data);
    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
}

usersData.forEach(user => {
  addUser(user);
});

const getUser = async (id) => {

  try {
    const docRef = await getDoc(collection(firestore, "users"), id);

    if (!docRef.exists()) return { success: false, error: "User not found" };

    return { success: true, data: user };
  } catch (error) {
    return { success: false, error };
  }
};

const updateUser = async (id, data) => {

  // code 
  return { success: true, data: user };
};

const deleteUser = async (id) => {
  // code
  return { success: true };
};


export const users = { getUsers, getUser, updateUser, deleteUser, addUser };