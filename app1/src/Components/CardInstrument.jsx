import { Link } from "react-router-dom";
import '../css/instrument.css'
const CardInstrument = (props) => {
    const {title, lien, src} = props;
    return (
        <div className="intrumentGen">
            <img className="instrumentImage" src={src} alt="Card image cap"/>
                <div className="instrumentbody">
                    <Link to={`${lien}`} ><button className="instrumentBouton">{title}</button></Link>
                </div>
        </div>
    )
}
export default CardInstrument;