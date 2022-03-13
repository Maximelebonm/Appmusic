import { Link } from "react-router-dom";
import "../css/navigation.css";

const Header = () => {

    return (
            <div className="navigation">
                    <nav className="contentLogo">
                        <Link to="/" className="logo">MusicLearn</Link>
                    </nav>
                    <nav className="mainNav">
                        <Link to="/choixinstrument" className="navitem" id="choixinstrument">Choix d'instrument</Link>
                        <Link to="/profil" className="navitem" id="profil">Profil</Link>               
  
                  </nav>       
            </div>

    );
};

export default Header;