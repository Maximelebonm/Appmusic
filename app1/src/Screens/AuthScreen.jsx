import "../css/formulaire.css";
import { Link } from "react-router-dom";
const AuthScreen = () => {


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
            <Link to="/"><button type="submit" className="submit">log in</button></Link>
            <Link to="/"><button type="submit" className="submit">Sign in</button></Link>
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
export default AuthScreen;