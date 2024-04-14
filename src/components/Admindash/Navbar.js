import React from "react";
import { Link } from "react-router-dom";
import "../../Admin.css";

const Navbar = () => {
  return (
    <nav className="sidenav">
      <ul className="adminnav">
        <li>
          <Link to="/admin/table">Table</Link>
        </li>
        <li>
          <Link to="/admin/form">Form</Link>
        </li>
        <li>
          <Link to="/admin/gallery">Gallery</Link>
        </li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
