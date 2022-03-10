
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

    let tabpartiton = [0, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1]
    let tabLink = []

    const link = () => {
        for (let i=0 ; i < tabpartiton.length ; i++){
           let lien = accords[tabpartiton[i]]?.chemin
           tabLink.push(lien)
           console.log("lien : ", lien)
        }
    }
    link()
    console.log("lien : ", tabLink)


    let bouton = document.querySelector(".play");
    let image1 = document.querySelector('#image1');
    let image2 = document.querySelector('#image2');
    let image3 = document.querySelector('#image3');
    let tabimage = [image1,image2,image3];
     //TODO faire une fonction qui appel la BDD

     console.log("tabimage : ", tabimage)

    
    let countersource = 0

     
    // tabpartiton.forEach(item => {
    //     image1 = tabpartiton[item]
    // });
    //filter , soit des getOne 
    let cible;
    let jouer;

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
                animAB(tabLink[counterAB]); //1er index du tabPartition
                console.log("init1")
                counterAB++
            }
            else {
                console.log("boucle1")
                animAB(tabLink[counterAB]);    //nouvel index       
                animBC(tabLink[counterAB - 1]);  //index de A=>B précédent
                animCD(tabLink[counterAB - 2]); // index de B=>C précédent  
                counterAB++
            }
        }
        else if (counter === 12) {
            if (counterInit === 0) {
                animAB(tabLink[counterAB]);     // 2eme index du tabPartition
                animBC(tabLink[counterAB - 1]);   // 1eme index du tabPartiton
                counterAB++
                console.log("init2")
            }
            else {
                console.log("boucle2")
                animAB(tabLink[counterAB]);            //nouvel index
                animBC(tabLink[counterAB - 1]);          //index de A=>B précédent
                animCD(tabLink[counterAB - 2]);          // index de B=>C précédent
                counterAB++
            }
        }
        else if (counter === 8) {
            if (counterAB >= tabpartiton.length - 2) {
                console.log("fin1")
                animBC(tabLink[counterAB - 1]);          //index de A=>B précédent
                animCD(tabLink[counterAB - 2]);           //index de B=>C précédent
                counterAB++

            }
            else {
                animAB(tabLink[counterAB]);
                animBC(tabLink[counterAB - 1]);
                animCD(tabLink[counterAB - 2]);
                counterAB++
            }
        }
        else if (counter === 4) {
            if (counterAB >= tabpartiton.length - 1) {
                console.log("fini2")
                animCD(tabLink[counterAB - 2]);
            }
            else {
                animAB(tabLink[counterAB]);
                animBC(tabLink[counterAB - 1]);
                animCD(tabLink[counterAB - 2]);
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
    console.log("counterAB : ", tabLink[counterAB])
    let imagetest1;
    let imagetest2;
    let imagetest3;
    const start = (card1, card2) => {
        //boucle sur le tableau 
        //imagetest1 = tabLink[0] 
        
        intervalId = setInterval(decrementation, 700);
        
    }
   
    console.log("return")

    return (
        <>
            <div className="test">       
               <img src={tabLink[counterAB]} name="Am" id="image1" className="imgcar" />
               <img src={tabLink[counterAB - 1]} name="Am2" id="image2" className="imgcar" />
                <img src={tabLink[counterAB - 2]} name="Am3" id="image3" className="imgcar" />      
            </div>
            <button className="btn btn-danger col-6" onClick={start}>play</button>
            <button className="btn btn-danger col-6" onClick={finish}>pause</button>
        </>
        );
};

