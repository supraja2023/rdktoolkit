// src/redux/actions/userActions.js
import axios from 'axios';

export const setUsers = (users) => ({
  type: 'SET_USERS',
  payload: users,
});

export const addUser = (user) => ({
  type: 'ADD_USER',
  payload: user,
});
export const updateUser = (user) => ({
  type: 'UPDATE_USER',
  payload: user,
});

export const deleteUser = (userId) => ({
  type: 'DELETE_USER',
  payload: userId,
});




export const fetchUsers = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:8000/getUsers');
    dispatch(setUsers(response.data));
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};

export const createUser = (userData) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:8000/addUser', userData);
    dispatch(addUser(response.data));
  } catch (error) {
    console.error('Error creating user:', error);
  }
};
export const editUser = ( userData) => async (dispatch) => {
  try {
    const response = await axios.put(`http://localhost:8000/updateUser`, userData);
    dispatch(updateUser(response.data));
  } catch (error) {
    console.error('Error updating user:', error);
  }
};

export const removeUser = (userId) => async (dispatch) => {
  try {
    const response = await axios.delete(`http://localhost:8000/deleteUser/${userId}`);
    dispatch(deleteUser(response.data));
  } catch (error) {
    console.error('Error deleting user:', error);
  }
};
