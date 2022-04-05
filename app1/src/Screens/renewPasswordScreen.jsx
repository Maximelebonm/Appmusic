import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";

const RenewPassWordScreen = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    
      }
    return (
        <div className="authscreen">
        <form onSubmit={handleSubmit}>
        <div className="fieldForm">
          <label htmlFor="renewPass1" className="form-label">Nouveau Password</label>
          <input type="password" name="password"className="inputauth" id="InputEmail" aria-describedby="emailHelp" />
        </div>
        <div className="fieldForm">
          <label htmlFor="renewPass2" className="form-label">confirmer Password</label>
          <input type="password" name="password" className="inputauth" id="exampleInputPassword1" />
        </div>
        <div className="buttonform">
          <button type="submit" className="submit">submit</button>       
        </div>
      </form>
      </div>
    );
};
export default RenewPassWordScreen;