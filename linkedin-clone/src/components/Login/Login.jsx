import React, { useState } from "react";
import "./login.css";
import image from "../../images/LI-Logo.png";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../data";
import { login, logout } from "../../data";

const Login = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

 const deger=name

  const dispatch = useDispatch();
  const submit = (e) => {
    e.preventDefault();
    if (name ==='') alert("Please write the name")

    if(email!=''&& name!=''&& password!=''){
      dispatch(login(name));
    }


  };

  const register = () => {};
  const count = useSelector((state) => state.data.user);
  return (
    <div className="login">
      {count}
      <img src={image} alt="" />
      <form action="">
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name"
        />
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button disabled={!deger} onClick={(e) => submit(e)}>Sign in</button>
      </form>
      <p>
        Not a member?{" "}
        <span className="register" onClick={() => register}>
          Register Now{" "}
        </span>
      </p>
    </div>
  );
};

export default Login;
