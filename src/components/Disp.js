// src/components/UserTable.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, updateUser, deleteUser } from '../service/auth';

const UserTable = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const status = useSelector((state) => state.users.status);

  const [editUser, setEditUser] = useState(null);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUsers());
    }
  }, [status, dispatch]);

  const handleUpdateUser = () => {
    if (editUser) {
      dispatch(updateUser(editUser));
      setEditUser(null);
    }
  };

  const handleDeleteUser = (userId) => {
    dispatch(deleteUser(userId));
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{editUser === user._id ? <input type="text" value={user.username} /> : user.username}</td>
              <td>{editUser === user._id ? <input type="text" value={user.email} /> : user.email}</td>
              <td>
                {editUser === user._id ? (
                  <>
                    <button onClick={handleUpdateUser}>Save</button>
                    <button onClick={() => setEditUser(null)}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => setEditUser(user._id)}>Edit</button>
                    <button onClick={() => handleDeleteUser(user._id)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
