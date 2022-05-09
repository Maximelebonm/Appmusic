import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import "../css/navigation.css";

const Header = () => {
    const { auth } = useContext(AuthContext);
    return (
            <div className="navigation">
                    <nav className="contentLogo">
                    {auth.role === 1 && (
                    <Link to="/" className="logo">MusicLearn</Link>
                    )};
                    </nav>
                    <nav className="mainNav">
                    {auth.role === 1 && (
                        <Link to="/choixinstrument" className="navitem" id="choixinstrument">Choix d'instrument</Link>
                    )};
                    {auth.role === 1 && (
                        <Link to="/profil" className="navitem" id="profil">Profil</Link>               
                    )};
                      {auth.role === 1 && (
                        <Link to="/admin" className="navitem" id="choixinstrument">admin</Link>
                    )};
                        {auth.role === 1 && (
                        <Link to="/logout" className="navitem" id="profil">logout</Link>               
                    )};
                  </nav>       
            </div>

    );
};

export default Header;