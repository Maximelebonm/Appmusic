
import "../css/caroussel.css";
import {useState, useEffect, Component} from "react";
import { Accord } from "../Models/accord.model";

export function Caroussel(props) {
    const {img} = props;

            const [accords, setAccords] = useState([])
        useEffect(() => {
            const fetchData = async () => {
                let data = Accord.from(await (await fetch('http://localhost:5001/accord')).json());
                setAccords(data);
            }
            fetchData().catch(console.error);
        }, []);
        
        console.log("chemin playscreen : ", accords);
        console.log("selection accord : ", accords[0].chemin)
    
    let bouton = document.querySelector(".play");
    let test = 10 + "px";
    let D = document.querySelector('#D');
    let E = document.querySelector('#E');
    let G = document.querySelector('#G');
    let Am = document.querySelector('#Am');
    let Am2 = document.querySelector('#Am2');
    let Am3 = document.querySelector('#Am3');
    let C = document.querySelector('#C');
    let F = document.querySelector('#F');
    let tabimage = [D, E, G, C, F, Am,Am2,Am3];
     //TODO faire une fonction qui appel la BDD

    
    let tabpartiton = [5, 6, 7, 5, 6, 7, 5, 6, 7, 0, 5, 1, 4, 1]

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
        animAB();
    }
    //boucle selectionCard

    var counter = 17;
    let counterInit = 0
    let counterEnd = 0
    let counterAB = 0

    var intervalId = null;

    let decompte = document.querySelector('.counter');
    // for(let i = 0; i<tabpartiton.length; i++){
    //     tabpartion[i]
    // }

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
                counterEnd++;
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
  
    }

   
    console.log("image caroussel : ", img)
        return (
        <>
            <div className="test">       
                <span><img src={img} name="Am" id="Am" className="imgcar" /></span>
                <span><img src={img} name="Am2" id="Am2" className="imgcar" /></span>
                <img src={img} name="Am3" id="Am3" className="imgcar" />        
            </div>
            <button className="btn btn-danger col-6" onClick={start}>play</button>
            <button className="btn btn-danger col-6" onClick={finish}>pause</button>
        </>
        );
};

