import "../css/formulaire.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const AuthScreen = () => {
  const [signin, setSignin] = useState();


if (signin==undefined){
  return (
    <>
      <div className="authscreen">
        <form>
          <div className="fieldForm">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="inputauth" id="InputEmail" aria-describedby="emailHelp" />
          </div>
          <div className="fieldForm">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="inputauth" id="exampleInputPassword1" />
          </div>
          <div className="buttonform">
            <button type="submit" className="submit" onClick={() => setSignin(undefined)}>log in</button>
            <button type="submit" className="submit" onClick={() => setSignin(true)}>Sign in</button>
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
  }
  else if(signin==true){
    return (
      <>
        <div className="authscreen">
        <form>
        <div className="fieldForm">
            <label for="exampleInputEmail1" className="form-label">Nom</label>
            <input type="text" className="inputauth" id="inputNom" aria-describedby="NomHelp" />
          </div>
          <div className="fieldForm">
            <label for="exampleInputEmail1" className="form-label">Prénom</label>
            <input type="text" className="inputauth" id="inputPrenom" aria-describedby="prenomHelp" />
          </div>
          <div className="fieldForm">
            <label for="exampleInputEmail1" className="form-label">Pseudo</label>
            <input type="text" className="inputauth" id="inputPseudo" aria-describedby="pseudoHelp" />
          </div>
          <div className="fieldForm">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="inputauth" id="InputEmail" aria-describedby="emailHelp" />
          </div>
          <div className="fieldForm">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="inputauth" id="InputPassword1" />
          </div>
          <div className="buttonform">
            <button type="submit" className="submit" onClick={() => setSignin(undefined)}>log in</button>
            <button type="submit" className="submit" onClick={() => setSignin(true)}>Sign in</button>
          </div>
          <div className="fieldForm">
            <div className="forgotpass">
              forgot your password ?
            </div>
          </div>
        </form>
      </div>
      </>
    )
  }
};
export default AuthScreen;