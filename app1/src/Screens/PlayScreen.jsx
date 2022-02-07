import { Caroussel } from "../Components/caroussel";

const PlayScreen = () => {
    return ( 
        <div className="container col-10 mt-3">
            <div className="row bg-dark text-center text-light">
                <p class="mb-0">ceci est un lecteur</p> 
                <Caroussel/>

            </div>
        </div>
    );
};

export default PlayScreen;