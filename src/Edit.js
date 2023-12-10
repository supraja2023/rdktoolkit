// src/components/UserUpdateForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editUser } from './Action';

const UserUpdateForm = ({ user, onClose }) => {
  const dispatch = useDispatch();

  const [updatedUser, setUpdatedUser] = useState({
    _id: user._id,
    username: user.username,
    email: user.email,
    
    // Add other fields as needed
  });

  const handleUpdateUser = () => {
    dispatch(editUser(updatedUser));
    // You can add additional logic here, such as closing the form
    onClose();
  };

  const handleChange = (e) => {
    setUpdatedUser({
      ...updatedUser,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h2>Update User</h2>
      <label>
        Username:
        <input type="text" name="username" value={updatedUser.username} onChange={handleChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="text" name="email" value={updatedUser.email} onChange={handleChange} />
      </label>
      <br />
      {/* Add other fields as needed */}
      <button onClick={handleUpdateUser}>Update</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default UserUpdateForm;
