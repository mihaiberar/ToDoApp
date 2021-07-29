import React, { Component } from "react";
import wishlist from "../../Media/check-list.png";
import NavListItem from "../NavListItem/navListItem";
import "./navbar.css";

export default class NavBar extends Component {
  render() {
    return (
      <div className="navbar-section">
        <img className="wishlist-img" src={wishlist} alt="Wishlist" />
        <h1 className="nav-title">M&M Development</h1>
        <ul className="nav-list">
          <NavListItem className="nav-item" text="All" />
          <NavListItem className="nav-item" text="Work" />
          <NavListItem className="nav-item" text="Personal" />
          <NavListItem className="nav-item" text="Wishlist" />
        </ul>
      </div>
    );
  }
}
