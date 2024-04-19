import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

import { AuthLayout } from "../layouts/AuthLayout";
const ManagerRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            <AuthLayout>
              <Login />
            </AuthLayout>
          }
        />
           <Route
          path="/register"
          element={
            <AuthLayout>
              <Register />
            </AuthLayout>
          }
        />
        <Route path="/" element={<div>Test</div>} />
      </Routes>
    </Router>
  );
};

export default ManagerRoutes;
