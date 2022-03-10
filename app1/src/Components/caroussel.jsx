
import "../css/caroussel.css";
import {useState, useEffect, Component, Fragment} from "react";
import { Accord } from "../Models/accord.model";
//import { FetchAccord } from "../Components/fetchaccord";


export function Caroussel(props) {

    const {img} = props;   
    const [accords, setAccords] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            let data = await (await fetch('http://localhost:5001/accord')).json();
            setAccords(data);
            console.log("fetch")
        }
        fetchData()
    }, []);         

    // verifier le chemin, découper le code, switch case
    // console.log("selection accord : ", accords[0].chemin)
    let bouton = document.querySelector(".play");
    let test = 10 + "px";
    let image1 = document.querySelector('#image1');
    let image2 = document.querySelector('#image2');
    let image3 = document.querySelector('#image3');
    let tabimage = [image1,image2,image3];
     //TODO faire une fonction qui appel la BDD

     console.log("tabimage : ", tabimage)

    let tabpartiton = [0, 1, 2, 0, 1, 2]
    
    let countersource = 0

    // tabpartiton.forEach(item => {
    //     image1 = tabpartiton[item]
    // });
    //filter , soit des getOne 
    let cible;
    let jouer;

    //tableau d'evenement ; animation parametre (); timeout il regarde dans le tableau si il y a une animation a faire
    //[declencheur devenement {animationIn}{animationInandout}{animationnout}] 
    //un compteur pour la carte 1 A=>B puis B=>C C=>D(en seconde) // une fois la carte 1 à C je met la carte 2 à A //boucle for

    const animAB = (image) => {

        // cible = document.querySelector(image);
        jouer = image.animate([
            { transform: 'translate(0px)' },
            { transform: 'translate(-200px)' },
            { transform: 'translate(-200px)' },
        ], 2000);
        image.style.transform = 'translate(-200px)'
    };
    function animBC(image) {
        // cible = document.querySelector(image);
        jouer = image.animate([
            { transform: 'translate(-200px)' },
            { transform: 'translate(-300px, 0px)' },
            { transform: 'translate(-300px , 0px)' },
        ], 1000);
        image.style.transform = 'translate(-300px, 0px)'
    };
    function animCD(image) {
        //cible = document.querySelector(image);
        jouer = image.animate([
            { transform: 'translate(-300px)' },
            { transform: 'translate(-1200px, 0px)' },
            { transform: 'translate(-1200px , 0px)' },
        ], 2000);
        image.style.transform = 'translate(-1200px, 0px)'
    };
    function finish() {
        clearInterval(intervalId);
      
    };

    var counter = 17;
    let counterInit = 0
    let counterAB = 0
    var intervalId = null;
    let decompte = document.querySelector('.counter');

    function decrementation() {
        // tabimage.forEach(item => {
        counter--;
        // decompte.innerHTML = counter
        //console.log("counter visible : " + counter)
        if (counter === 16) {
            if (counterInit === 0) {
                animAB(tabimage[tabpartiton[counterAB]]); //1er index du tabPartition
                console.log("init1")
                counterAB++
            }
            else {
                console.log("boucle1")
                animAB(tabimage[tabpartiton[counterAB]]);    //nouvel index       
                animBC(tabimage[tabpartiton[counterAB - 1]]);  //index de A=>B précédent
                animCD(tabimage[tabpartiton[counterAB - 2]]); // index de B=>C précédent  
                counterAB++
            }
        }
        else if (counter === 12) {
            if (counterInit === 0) {
                animAB(tabimage[tabpartiton[counterAB]]);     // 2eme index du tabPartition
                animBC(tabimage[tabpartiton[counterAB - 1]]);   // 1eme index du tabPartiton
                counterAB++
                console.log("init2")
            }
            else {
                console.log("boucle2")
                animAB(tabimage[tabpartiton[counterAB]]);            //nouvel index
                animBC(tabimage[tabpartiton[counterAB - 1]]);          //index de A=>B précédent
                animCD(tabimage[tabpartiton[counterAB - 2]]);          // index de B=>C précédent
                counterAB++
            }
        }
        else if (counter === 8) {
            if (counterAB >= tabpartiton.length - 2) {
                console.log("fin1")
                animBC(tabimage[tabpartiton[counterAB - 1]]);          //index de A=>B précédent
                animCD(tabimage[tabpartiton[counterAB - 2]]);           //index de B=>C précédent
                counterAB++

            }
            else {
                animAB(tabimage[tabpartiton[counterAB]]);
                animBC(tabimage[tabpartiton[counterAB - 1]]);
                animCD(tabimage[tabpartiton[counterAB - 2]]);
                counterAB++
            }
        }
        else if (counter === 4) {
            if (counterAB >= tabpartiton.length - 1) {
                console.log("fini2")
                animCD(tabimage[tabpartiton[counterAB - 2]]);
            }
            else {
                animAB(tabimage[tabpartiton[counterAB]]);
                animBC(tabimage[tabpartiton[counterAB - 1]]);
                animCD(tabimage[tabpartiton[counterAB - 2]]);
                counterAB++
            }
        }
        else if (counter === 1) {
            if (counterAB < tabpartiton.length - 1) {
                counter = 17;
                counterInit++;
            }
            else {
                finish()
            }
        }

        else {
            console.log("ok");
        }
        // })
    }
    const start = (card1, card2) => {
        //boucle sur le tableau 
        intervalId = setInterval(decrementation, 700);
        console.log("selection accord : ", accords[tabpartiton[1]]?.chemin)     
    }
   
    console.log("return")

    return (
        <>
            <div className="test">       
                <span><img src={accords[tabpartiton[0]]?.chemin} name="Am" id="image1" className="imgcar" /></span>
                <span><img src={accords[tabpartiton[1]]?.chemin} name="Am2" id="image2" className="imgcar" /></span>
                <span><img src={accords[tabpartiton[2]]?.chemin} name="Am3" id="image3" className="imgcar" /></span>        
            </div>
            <button className="btn btn-danger col-6" onClick={start}>play</button>
            <button className="btn btn-danger col-6" onClick={finish}>pause</button>
        </>
        );
};

