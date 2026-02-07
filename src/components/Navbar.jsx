import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div className="logo">CodeSteps</div>
      <div className="nav-buttons">
        <Link to="/signin" className="btn outline">تسجيل دخول</Link>
        <Link to="/signin" className="btn primary">سجل مجانًا</Link>
      </div>
    </nav>
  );
}

export default Navbar;