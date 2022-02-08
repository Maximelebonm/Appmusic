import { useState, useEffect } from "react";

export function Caroussel(props) {

    const { accord } = props
    const [currentAccord, setcurrentAccord] = useState(accord[0]);
    const [lecteur, setLecteur] = useState(0);
    const [index, setIndex] = useState(0);
    const [isActive, setIsActive] = useState(true);

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                if (index < accord.length - 1) {
                    setIndex(index + 1)
                }
                else {
                    setIndex(0);
                }
                setcurrentAccord(accord[index]);

            }, 3000);
        } else if (!isActive) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, index, accord]);



    return (

        <div className="card text-white bg-dark">


            <img src={currentAccord?.image} className="card-img-top" alt="..." />

            <div className="card-body">

                <h5 className="card-title">{currentAccord?.title}</h5>
                <p className="card-text">{currentAccord?.description}</p>
            </div>

        </div>
    );

};

