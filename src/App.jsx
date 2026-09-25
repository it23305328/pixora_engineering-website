import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SolarEnergy from './pages/SolarEnergy';
import Construction from './pages/Construction';
import Elevator from './pages/Elevator';
import Projects from './pages/Projects';
import AboutUs from './pages/AboutUs';
import ScrollToTop from './components/ScrollToTop';
import AdminAddProject from './pages/AdminAddProject';
import AdminManageProjects from './pages/AdminManageProjects';
import AdminLogin from './pages/AdminLogin';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solar-energy" element={<SolarEnergy />} />
        <Route path="/construction" element={<Construction />} />
        <Route path="/elevators" element={<Elevator />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<AboutUs />} />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/add-project" element={
          <ProtectedRoute>
            <AdminAddProject />
          </ProtectedRoute>
        } />
        <Route path="/admin/manage-projects" element={
          <ProtectedRoute>
            <AdminManageProjects />
          </ProtectedRoute>
        } />
      </Routes>
    </>
  );
}

export default App;
