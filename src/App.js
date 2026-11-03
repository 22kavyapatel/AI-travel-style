import React from 'react';
import { BrowserRouter as Router, Routes, Route, Form } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from "./pages/homePage"
import Dashboard from"./pages/Dashboard";
import Contact from './pages/Contact';
import DestinationDetails from "./pages/DestinationDetails";
import About from "./pages/About";
import MainForm from "./pages/MainForm";
import Result from "./pages/Result";
import Navbar from './components/Navbar';
import ProfilePage from './pages/ProfilePage';
function App() {
  
  return (
    <Router>
      
      {/* HEADER */}
      <Header />

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/About" element={<About/>} />
         <Route path="/MainForm" element={<MainForm/>} />
       <Route path="/" element={<HomePage />} />
     <Route path="/destination/:id" element={<DestinationDetails />} />
     <Route path="/result" element={<Result/>} />
     <Route path="/profile" element={<ProfilePage/>} />
      </Routes>
     
      {/* FOOTER */}
      <Footer />

    </Router>
  );
}

export default App;




