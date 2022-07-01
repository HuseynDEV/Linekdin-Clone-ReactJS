import React from "react";
import {
  LinkedIn,
  Search,
  Home,
  Apps,
  BusinessCenter,
  Chat,
  NotificationsNone,
  People,
  Avatar,
} from "@mui/icons-material";
import logo from "../../images/logo.png";
import "./header.css";
import HeaderOptions from "../HeaderOptions/HeaderOptions";
import profile from "../../images/profile.avif";

const Header = () => {
  return (
    <div className="header">
      <div className="header_left">
        <img src={logo} alt="" />
        <div className="header_search">
          <Search />
          <input type="text" placeholder="Search.." />
        </div>
      </div>
      <div className="header_right">
        <HeaderOptions Icon={Home} title="Home" />
        <HeaderOptions Icon={BusinessCenter} title="My Network" />
        <HeaderOptions Icon={People} title="My Network" />
        <HeaderOptions Icon={Chat} title="Chat" />
        <HeaderOptions Icon={NotificationsNone} title="Notification" />
        <HeaderOptions avatar={profile} title="Me" />
      </div>
    </div>
  );
};

export default Header;
