import { useState, useEffect } from "react";
import "../css/player.css";
import { Caroussel } from "../Components/caroussel";
import { Accord } from "../Models/accord.model";

const PlayScreen = () => {



    return ( 
        <>
        <div className="playerMain">
                <div className="playerSecond">Johnny Hallyday - Le Pénitencier</div> 
                <Caroussel/>
        </div>
        </>
    );
};

export default PlayScreen;