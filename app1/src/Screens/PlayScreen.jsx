import { useState, useEffect } from "react";
import "../css/player.css";
import { Caroussel } from "../Components/caroussel";
import { Accord } from "../Models/accord.model";

const PlayScreen = () => {



    return ( 
        <>
        <div className="playerMain">
        </div>
                <div className="playerSecond">Titre de la musique</div> 
                <Caroussel/>
        </>
    );
};

export default PlayScreen;