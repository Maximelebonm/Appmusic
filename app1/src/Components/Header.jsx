import { Link } from "react-router-dom";
const Header = () => {

    return (
            <div className="container-fluid p-0">
                <nav className="navbar navbar-light bg-dark ">
                    <nav className="navbar">
                    <Link to="/" className="nav-link text-light" href="#">MusicLearn</Link>
                    </nav>
                    <nav className="navbar justify-content-center">
                    <Link to="/choixinstrument" className="nav-link text-light" href="#">Choix d'instru</Link>
                    <a className="nav-link text-light" href="#">favoris</a>
                    
                    <a className="nav-link text-light" href="#">Profil</a>
                  </nav>
                </nav>
            </div>

    )



};

export default Header;