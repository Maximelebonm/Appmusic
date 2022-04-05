import { Link } from "react-router-dom";

const NotFoundScreen = () =>{
    return (
        <div>
            <h1>Error This Page doesn't Exist</h1>
            <Link to="/login">Back to login</Link>
        </div>
    );
};
export default NotFoundScreen