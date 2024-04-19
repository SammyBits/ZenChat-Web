import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Login } from '../pages/Login';
const ManagerRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<div>Test</div>} />
      </Routes>
      
    </Router>
  );
}

export default ManagerRoutes;