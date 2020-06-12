import React from 'react';
import '../Header/Header.scss';
export default function Header() {
  return (
    <div className="header">
      <div className="logo_container"></div>
      <div className="link_container">
        <a href="#">Login</a>
        <a href="#">Register</a>
      </div>
    </div>
  );
}
