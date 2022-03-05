import { useState, useEffect } from "react";
import { Caroussel } from "../Components/caroussel";
import { Accord } from "../Models/accord.model";

const PlayScreen = () => {



    return ( 
        <div className="container col-10 mt-3">
            <div className="row bg-dark text-center text-light">
                <p className="mb-0">ceci est un lecteur</p> 
                <Caroussel/>
            </div>
        </div>
    );
};

export default PlayScreen;