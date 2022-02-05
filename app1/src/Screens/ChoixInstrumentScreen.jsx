import CardInstrument from "../Components/CardInstrument";

const ChoixInstrumentScreen = () => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <CardInstrument title="Guitare" />
                </div>
                <div className="col-3">
                    <CardInstrument title="Piano" />
                </div>
                <div className="col-3">
                    <CardInstrument title="Saxophone" />
                </div>
                <div className="col-3">
                    <CardInstrument title="Batterie" />
                </div>
            </div>
        </div>

    );
};
export default ChoixInstrumentScreen;