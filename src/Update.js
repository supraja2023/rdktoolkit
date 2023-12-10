// src/components/UserList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, editUser, removeUser} from './Action';

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleUpdateUser = (updatedData) => {
    dispatch(editUser( updatedData));
  };

  const handleDeleteUser = (userId) => {
    dispatch(removeUser(userId));
  };

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            <strong>{user.username}</strong> - {user.email}
            <button onClick={() => handleUpdateUser({ username: 'UpdatedUsername' })}>
              Update
            </button>
            <button onClick={() => handleDeleteUser(user._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
