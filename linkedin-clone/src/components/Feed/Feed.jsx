import React, { useEffect, useState } from "react";
import "./feed.css";
import {
  Create,
  InsertPhoto,
  VideoCall,
  Event,
  Article,
} from "@mui/icons-material";
import InputOptions from "../InputOptions/InputOptions";
import Post from "../Post/Post";

const Fedd = () => {
  const [input, setInput] = useState("");
  const [post, setPost] = useState([]);

  const sendPost = (e) => {
    e.preventDefault();
    if (input != "") {
      setPost([
        ...post,
        { name: "Huseyn", description: "deneme", message: input },
      ]);
    }
    console.log(post);
    setInput("");
  };
  return (
    <div className="feed">
      <div className="feed_container">
        <div className="feed_input">
          <Create />
          <form action="" onSubmit={(e) => sendPost(e)}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Start a post"
            />
          </form>
        </div>
        <div className="feed_options">
          <InputOptions Icon={InsertPhoto} title="Photo" color="green" />
          <InputOptions Icon={VideoCall} title="Video" color="yellow" />
          <InputOptions Icon={Event} title="Event" color="gray" />
          <InputOptions Icon={Article} title="Write Article" color="darkred" />
        </div>
      </div>
      <div className="post_cont">
      <Post name="Amir Khan" description="Devops" message="Hello everyone" />
        <Post name="Prototurk" description="Devops" message="Hello everyone" />
        <Post name="Alizade Anar" description="Devops" message="Hello everyone" />
        <Post name="Alizade Hasan" description="Devops" message="Hello everyone" />
        {post.map((data) => (
          <Post
            name={data.name}
            description={data.description}
            message={data.message}
          />
        ))}
       
      </div>
    </div>
  );
};

export default Fedd;
