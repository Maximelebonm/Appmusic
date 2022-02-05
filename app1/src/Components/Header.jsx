import { Link } from "react-router-dom";
const Header = () => {

    return (
            <div className="container">
                <nav className="navbar navbar-light bg-dark">
                    
                    <Link to="/" className="nav-link text-light" href="#">MusicLearn</Link>
                    <Link to="/choixinstrument" className="nav-link text-light" href="#">Choix d'instru</Link>
                    <a className="nav-link text-light" href="#">favoris</a>
                    
                    <a className="nav-link text-light" href="#">Profil</a>
                  
                </nav>
            </div>

    )



};

export default Header;