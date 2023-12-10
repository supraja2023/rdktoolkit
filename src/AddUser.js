// src/components/AddUserForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from './Action';

const AddUserForm = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password:''
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(userData));
    // You can also reset the form or perform other actions after user creation
  };

  return (
    <div>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={userData.username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="text"
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddUserForm;
