import React from "react";
import "./widget.css";
import { Info, CircleNotifications } from "@mui/icons-material";

const Cont = () => {
  const newArticle = (heading, title) => {
    return (
      <div className="widget_article">
        <div className="left">
          <CircleNotifications />
        </div>
        <div className="right">
          <h4>{heading}</h4>
          <p>{title}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="widget">
      <div className="widget_header">
        <h2>LinkedIn News</h2>
        <Info />
      </div>
      {newArticle("Huseyn ReactJS", "views:934")}
      {newArticle("Huseyn ReactJS", "views:934")}
      {newArticle("Huseyn ReactJS", "views:934")}

      <div className="bottom">
        <img
          src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Cont;
