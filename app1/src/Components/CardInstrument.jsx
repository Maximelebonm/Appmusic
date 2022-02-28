import { Link } from "react-router-dom";
const CardInstrument = (props) => {
    const {title, lien} = props;
    return (
        <div className="card text-center">
            <img className="card-img-top" src="https://picsum.photos/400/200" alt="Card image cap"/>
                <div className="card-body">
                    <Link to={`${lien}`} className="btn btn-dark">{title}</Link>
                </div>
        </div>
    )
}
export default CardInstrument;