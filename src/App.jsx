import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; // CSS عام (فارغ أو للأشياء العامة فقط)
import Home from './pages/Home'; // الصفحة الرئيسية (من components)
import SignIn from './pages/SignIn'; // صفحة تسجيل الدخول (من pages)

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* الصفحة الرئيسية */}
        <Route path="/signin" element={<SignIn />} /> {/* صفحة تسجيل الدخول */}
      </Routes>
    </Router>
  );
}

export default App;