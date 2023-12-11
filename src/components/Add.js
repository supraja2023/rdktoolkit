// src/components/UserForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../service/auth';

const UserForm = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({ username: '', email: '', password: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({ ...prevUserData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(userData));
    // Clear the form after submitting
    setUserData({ username: '', email: '', password: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" name="username" value={userData.username} onChange={handleInputChange} />
      </label>
      <label>
        Email:
        <input type="text" name="email" value={userData.email} onChange={handleInputChange} />
      </label>
      <label>
        Password:
        <input type="password" name="password" value={userData.password} onChange={handleInputChange} />
      </label>
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserForm;
