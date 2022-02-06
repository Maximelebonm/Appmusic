import { Link } from "react-router-dom"

const ExplicationScreen = () => {

    return (
        <div>
            ceci est un ne page d'explication de l'app.

            <Link className="btn btn-dark"to="/auth">revenir à l'authentifiction</Link>
        </div>

    );
};
export default ExplicationScreen