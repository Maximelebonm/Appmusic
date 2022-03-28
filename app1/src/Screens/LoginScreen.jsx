import "../css/formulaire.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import { AuthContext } from "../contexts/AuthContext";

const LoginScreen = () => {
  const [signin, setSignin] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();

      console.log("handl");
      const form = event.currentTarget;
      const formData = new FormData(form);
      const jsonData = Object.fromEntries(formData.entries());
      const body = JSON.stringify(jsonData);
      fetch("http://localhost:5006/appuser/login", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body,
      })
        .then((resp) => resp.text())
        .then((text) => {
            const data = text.toJson();
            if(data.result){
                document.cookie = `auth=${data.token};max-age=${60*60*24}`;
            }
            else{
                document.cookie = `auth=null;max-age=0`;
            }
        });
    }

  return (
    <>
      <div className="authscreen">
        <form onSubmit={handleSubmit}>
          <div className="fieldForm">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="text" name="email"className="inputauth" id="InputEmail" aria-describedby="emailHelp" />
          </div>
          <div className="fieldForm">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" name="password" className="inputauth" id="exampleInputPassword1" />
          </div>
          <div className="buttonform">
            <button type="submit" className="submit">log in</button>
            <Link to="/register"> <button className="submit">Sign in</button></Link>
          </div>

          <div className="fieldForm">
            <div className="forgotpass">
              forgot your password ?
            </div>
            
          </div>
        </form>
      </div>
    </>
  );
  };
 

export default LoginScreen;