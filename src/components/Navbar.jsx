import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <header className="navbar">
        <div className="logo">
          <img src="/logo.png" alt="Goa Logo" />
        </div>

        <nav className="nav-center" aria-label="Main navigation">
          <NavLink to="/" end className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
          <NavLink to="/explore_events" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Explore Events</NavLink>
          <NavLink to="/registration" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Registration</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Contact Us</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>About Us</NavLink>
        </nav>

        <div className="profile">
          <img src="/profile.png" alt="Profile" />
        </div>
      </header>

      {/* spacer so fixed navbar doesn't cover content */}
      <div style={{ height: '95px' }} aria-hidden="true" />
    </>
  );
}
