import React, { useState } from "react";
import UserList from "./UserList";
import UserForm from "./UserForm";
import UserService from "./UserService";
// import EditUser from "./EditUser";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

const AdminPanel = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  const handleFormSubmit = (formData) => {
    if (selectedUser) {
      UserService.updateUser(selectedUser.id, formData);
    } else {
      UserService.createUser({ id: Date.now(), ...formData });
    }
    setSelectedUser(null);
  };

  const handleDeleteUser = (userId) => {
    UserService.deleteUser(userId);
    setSelectedUser(null);
  };

  return (
    <div>
      <UserList onUserSelect={handleUserSelect} />
      {selectedUser && (
        <div>
          <h2>Edit User</h2>
          <UserForm user={selectedUser} onSubmit={handleFormSubmit} />
          <button onClick={() => handleDeleteUser(selectedUser.id)}>
            Delete User
          </button>
        </div>
      )}
      {!selectedUser && (
        <div>
          <h2>Create User</h2>
          <UserForm onSubmit={handleFormSubmit} />
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
