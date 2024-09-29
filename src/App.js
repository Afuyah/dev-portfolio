import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard'; // Import Dashboard
import PrivateRoute from './components/PrivateRoute'; // Import PrivateRoute

import ManageSkills from './components/ManageSkills';
import ManageProjects from './components/ManageProjects';
import ManageExperience from './components/ManageExperience';
import ScrollToTop from './components/ScrollToTop'; 
import FloatingContactButton from './components/FloatingContactButton'; 
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Ensure scrolling to top on navigation */}
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Protected Dashboard Route */}
          <Route path="/dashboard" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } />
          
          {/* Add any additional protected routes here */}
          <Route path="/manage-skills" element={
    <PrivateRoute>
        <ManageSkills />
    </PrivateRoute>
} />
<Route path="/manage-projects" element={
    <PrivateRoute>
        <ManageProjects />
    </PrivateRoute>
} />
<Route path="/manage-experience" element={
    <PrivateRoute>
        <ManageExperience />
    </PrivateRoute>
} />

          <Route path="*" element={<h2>404: Page Not Found</h2>} /> {/* Catch-all route */}
        </Routes>
        <Footer />

        <FloatingContactButton />
      </div>
    </Router>
  );
}

export default App;
