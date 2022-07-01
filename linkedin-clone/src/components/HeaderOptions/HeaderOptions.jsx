import React from "react";
import "./headerOptions.css";
import { Avatar } from "@mui/material";

const HeaderOptions = ({Icon, title, avatar}) => {
  return (
    <div className="headerOption">
    {Icon && <Icon className="headerOption_icon" />}
      {avatar && <Avatar src={avatar} className='headerOption_icon' />}
     <span className="title_sub"> {title}</span> 
    </div>
  );
};

export default HeaderOptions;

