import React from "react";
import AdminPanel from "./AdminPanel";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import UserList from "./UserList";
// import EditUser from "./EditUser";
// import UserForm from "./UserForm";
// import EditUser from "./EditUser";

function App() {
  return (
    <div>
      <AdminPanel />
      <BrowserRouter>
        <Routes>
          <Route path="AdminPanel" element={<AdminPanel />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
