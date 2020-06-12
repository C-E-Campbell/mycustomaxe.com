import React from 'react';
import '../Header/Header.scss';
export default function Header() {
  return (
    <div className="header">
      <div className="logo_container"></div>
      <div className="link_container">
        <a href="#" className="login_btn">
          Login
        </a>
        <a href="#" className="register_btn">
          Register
        </a>
      </div>
    </div>
  );
}
