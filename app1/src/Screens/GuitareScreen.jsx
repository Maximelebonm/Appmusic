import { Link } from "react-router-dom";
const GuitareScreen = () => {
    return (
        <div>Page Guitare
            <ul>
                <li><Link to="/play"> liste tendance </Link> </li>
                <li>liste fav</li>
                <li>liste création</li>
                <li>encard actu / interview</li>
            </ul>
        </div>
    );

};
export default GuitareScreen;