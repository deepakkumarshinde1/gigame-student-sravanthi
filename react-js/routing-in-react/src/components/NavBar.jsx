import { NavLink, useNavigate } from "react-router-dom";
import "../css/NavBar.css";
import { useState } from "react";

function NavBar() {
  let navigate = useNavigate();
  let [toggle, setToggle] = useState(false);
  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="brand">ShopKart</div>

        <ul className="nav-links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </div>

      <div className="nav-right">
        <div className="cart" onClick={() => navigate("/cart")}>
          🛒
          <span className="cart-count">2</span>
        </div>

        <div className="profile-wrapper" onClick={() => setToggle(!toggle)}>
          <div className={`profile-icon ${toggle && "border-red"}`}>👤</div>
          <div className={`profile-dropdown ${toggle && "d-flex"}`}>
            <NavLink to="/profile">My Profile</NavLink>
            <NavLink to="/logout" className="logout">
              Logout
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
