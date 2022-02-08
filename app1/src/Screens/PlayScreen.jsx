import { useState, useEffect } from "react";
import { Caroussel } from "../Components/Caroussel";
import { PlayerGuitare } from "../Models/PlayerGuitare.Model";

const PlayScreen = () => {
    const [accords, setaccords] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            let data = PlayerGuitare.from(await (await fetch('./data/guitareTab.json')).json());
            console.log(data);
            data = data.filter(item => item.id < 4);
            setaccords(data);

        }
        fetchData().catch(console.error);
    }, [])


    return ( 
        <div className="container col-10 mt-3">
            <div className="row bg-dark text-center text-light">
                <p className="mb-0">ceci est un lecteur</p> 
                <Caroussel accord={accords}/>

            </div>
        </div>
    );
};

export default PlayScreen;