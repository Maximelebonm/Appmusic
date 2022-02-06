import CardInstrument from "../Components/CardInstrument";

const ChoixInstrumentScreen = () => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <CardInstrument title="Guitare" lien="/guitare" />
                </div>
                <div className="col-3">
                    <CardInstrument title="Piano" lien="/piano" />
                </div>
            </div>
        </div>

    );
};
export default ChoixInstrumentScreen;