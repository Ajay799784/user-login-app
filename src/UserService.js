const users = [
  { id: 1, username: "admin", email: "admin@example.com", role: "admin" },
  { id: 2, username: "user1", email: "user1@example.com", role: "user" },
  // ... more user data
];

const UserService = {
  getUsers: () => {
    return users;
  },
  createUser: (newUser) => {
    users.push(newUser);
  },
  updateUser: (userId, updatedUser) => {
    const index = users.findIndex((user) => user.id === userId);
    if (index !== -1) {
      users[index] = { ...users[index], ...updatedUser };
    }
  },
  deleteUser: (userId) => {
    const index = users.findIndex((user) => user.id === userId);
    if (index !== -1) {
      users.splice(index, 1);
    }
  },
};

export default UserService;
