
import "../css/caroussel.css";
import { useState, useEffect, Component, Fragment } from "react";
import { Accord } from "../Models/accord.model";
//import { FetchAccord } from "../Components/fetchaccord";


export function Caroussel(props) {

    const { img } = props;

    const [accords, setAccords] = useState([]);
    const [loadingState, setLoadingState] = useState('loading');
    const [tabLinkAcc, setTabLinkAcc] = useState([]);
    const [startBtn, setStartBtn] = useState()

    const [index, setIndex] = useState(0);
    const [currentProduct, setCurrentProduct] = useState();

    //setgame avec link et current
    //state Partition
    //linkState
    //autres states waiting(si 5sec passer et pas charger)
    //stateReady (5sec passer et tt charger)
    //state deconnected

    useEffect(() => {
        const fetchData = async () => {
            let data = await (await fetch('http://localhost:5001/accord')).json();
            setAccords(data);
            console.log("fetch")
        }
        fetchData()
        .then(data => { 
        console.log("accord : ", accords)

        let tabpartiton = [0, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1]
        const link = () => {
            for (let i = 0; i < tabpartiton.length; i++) {
                let lien = accords[tabpartiton[i]]?.chemin
                tabLinkAcc.push(lien)
                console.log("lien : ", lien)
            }
        }
        link()

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
        function decrementation() {
            // tabimage.forEach(item => {
            counter--;
            // decompte.innerHTML = counter
            //console.log("counter visible : " + counter)
            if (counter === 16) {
                if (counterInit === 0) {
                    animAB(tabLinkAcc[counterAB]); //1er index du tabPartition
                    console.log("init1")
                    counterAB++
                }
                else {
                    console.log("boucle1")
                    animAB(tabLinkAcc[counterAB]);    //nouvel index       
                    animBC(tabLinkAcc[counterAB - 1]);  //index de A=>B précédent
                    animCD(tabLinkAcc[counterAB - 2]); // index de B=>C précédent  
                    counterAB++
                }
            }
            else if (counter === 12) {
                if (counterInit === 0) {
                    animAB(tabLinkAcc[counterAB]);     // 2eme index du tabPartition
                    animBC(tabLinkAcc[counterAB - 1]);   // 1eme index du tabPartiton
                    counterAB++
                    console.log("init2")
                }
                else {
                    console.log("boucle2")
                    animAB(tabLinkAcc[counterAB]);            //nouvel index
                    animBC(tabLinkAcc[counterAB - 1]);          //index de A=>B précédent
                    animCD(tabLinkAcc[counterAB - 2]);          // index de B=>C précédent
                    counterAB++
                }
            }
            else if (counter === 8) {
                if (counterAB >= tabpartiton.length - 2) {
                    console.log("fin1")
                    animBC(tabLinkAcc[counterAB - 1]);          //index de A=>B précédent
                    animCD(tabLinkAcc[counterAB - 2]);           //index de B=>C précédent
                    counterAB++

                }
                else {
                    animAB(tabLinkAcc[counterAB]);
                    animBC(tabLinkAcc[counterAB - 1]);
                    animCD(tabLinkAcc[counterAB - 2]);
                    counterAB++
                }
            }
            else if (counter === 4) {
                if (counterAB >= tabpartiton.length - 1) {
                    console.log("fini2")
                    animCD(tabLinkAcc[counterAB - 2]);
                }
                else {
                    animAB(tabLinkAcc[counterAB]);
                    animBC(tabLinkAcc[counterAB - 1]);
                    animCD(tabLinkAcc[counterAB - 2]);
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

        var intervalId = null;
        const start = (card1, card2) => {  
            intervalId = setInterval(decrementation, 700);
        }
    
        setLoadingState('Ready')

    .catch(console.log())
    })
    }, []);

    // console.log("lien : ", tabLink)
    // let bouton = document.querySelector(".play");
    // let image1 = document.querySelector('#image1');
    // let image2 = document.querySelector('#image2');
    // let image3 = document.querySelector('#image3');
    // let tabimage = [image1, image2, image3];
    //TODO faire une fonction qui appel la BDD
    // console.log("tabimage : ", tabimage)
    // let countersource = 0
    // tabpartiton.forEach(item => {
    //     image1 = tabpartiton[item]
    // });
    //filter , soit des getOne 
    // let decompte = document.querySelector('.counter');

    // console.log("counterAB : ", tabLink[counterAB])

 
    console.log('TabLinkAcc : ',tabLinkAcc)
    console.log("BOUCLE RETURN")
    if (loadingState == 'loading') {
        console.log("1er return")
        return (
            <>
                <div>chargement...</div>
            </>
        )
    }
    else if(loadingState == 'Ready'){
        console.log("2nd return")
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
    }
};

