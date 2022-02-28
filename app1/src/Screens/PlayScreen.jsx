import { useState, useEffect } from "react";
import { Caroussel } from "../Components/caroussel";
import { Accord } from "../Models/accord.model";

const PlayScreen = () => {
        const [accords, setAccords] = useState([])
        useEffect(() => {
            const fetchData = async () => {
                let data = Accord.from(await (await fetch('http://localhost:5001/accord')).json());
                setAccords(data);
            }
            fetchData().catch(console.error);;
        }, []);
        
       console.log("chemin playscreen : ", accords.chemin);


    return ( 
        <div className="container col-10 mt-3">
            <div className="row bg-dark text-center text-light">
                <p className="mb-0">ceci est un lecteur</p> 
                <Caroussel img = {accords.chemin}/>
            </div>
        </div>
    );
};

export default PlayScreen;