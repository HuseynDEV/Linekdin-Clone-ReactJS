import { Avatar } from "@mui/material";
import React from "react";
import InputOptions from "../InputOptions/InputOptions";
import "./post.css";
import { ThumbUp, Comment, Share, Send } from "@mui/icons-material";
import { selectUser } from "../../data";
const Post = ({ name, description, message }) => { 
  return (
  
    <div className="post">
        {selectUser}
      <div className="post_header">
        <Avatar />
        <div className="post_info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post_body">
        <p>{message}</p>
      </div>
      <div className="post_buttons">
        <InputOptions Icon={ThumbUp} title="Like" color="gray" />
        <InputOptions Icon={Comment} title="Comment" color="gray" />
        <InputOptions Icon={Share} title="Share" color="gray" />
        <InputOptions Icon={Send} title="Send" color="gray" />
      </div>
    </div>
  );
};

export default Post;
