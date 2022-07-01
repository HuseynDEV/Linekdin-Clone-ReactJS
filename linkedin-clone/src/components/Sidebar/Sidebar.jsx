import React from "react";
import { Avatar } from "@mui/material";
import "./sidebar.css";
import profile from "../../images/profile.avif";
import photo from "../../images/photo.avif";

const Sidebar = () => {
  const recent = (deger) => {
    return (
      <p className=" recent recent-link">
        # {deger}
        <br />
      </p>
    );
  };

  return (
    <div className="sidebar">
      <div className="top">
        <div className="sidebar_top">
          <img src={photo} alt="" />
          <Avatar src={profile} className="sidebar_avatar" />
          <h2>Alizade Huseyn</h2>
          <h4>huseyn.alizade.03@mail.ru</h4>
        </div>
        <div className="status">
          <div>
            <p>Who viewed you</p>
            <p className="statusNumber">4,342</p>
          </div>
          <div>
            <p>Views on post</p>
            <p className="statusNumber">1,443</p>
          </div>
        </div>
      </div>
      <div className="bottom">
        <p className="recent">Recent</p>
        {recent("ReactJS")}
        {recent("Javascript")}
        {recent("VueJS")}
        {recent("Node js")}
        {recent("AngularJS")}
      </div>
    </div>
  );
};

export default Sidebar;
