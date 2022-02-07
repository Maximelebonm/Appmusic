import { Link } from "react-router-dom";
const Header = () => {

    return (
            <div className="container-fluid p-0">
                <nav className="navbar navbar-light bg-dark ">
                    <nav className="navbar">
                        <Link to="/" className="nav-link text-light justify-content-between">MusicLearn</Link>
                    </nav>
                    <nav className="navbar justify-content-center">
                        <Link to="/choixinstrument" className="nav-link text-light">Choix d'instru</Link>
                        <Link to="/profil" className="nav-link text-light">Profil</Link>               
  
                  </nav>
                </nav>
            </div>

    );
};

export default Header;