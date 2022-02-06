import { Link } from "react-router-dom";
const CardInstrument = (props) => {
    const {title, lien} = props;
    return (
        <div class="card text-center">
            <img class="card-img-top" src="https://picsum.photos/400/200" alt="Card image cap"/>
                <div class="card-body">
                    <Link to={`${lien}`} class="btn btn-dark">{title}</Link>
                </div>
        </div>
    )
}
export default CardInstrument;