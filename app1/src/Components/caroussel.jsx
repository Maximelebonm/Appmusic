
import "../css/caroussel.css";
import { useState, useEffect, Component, Fragment } from "react";
import { Accord } from "../Models/accord.model";
import "../musicfont/styles.css";
//import { FetchAccord } from "../Components/fetchaccord";


export function Caroussel(props){
    const { img } = props;
    const [loadingState, setLoadingState] = useState('loading');
    console.log("entre les usestate")
    const [accords, setAccords] = useState([]);
    const [tabLinkAcc, setTabLinkAcc] = useState([]);
    const [startBtn, setStartBtn] = useState();
    const [session, setSession] = useState({ state: 'loading', tabLinkAcc: [], })

    useEffect(() => {
        const fetchData = async () => {
            console.log("fetch")
            let dataAccords = await (await fetch('http://localhost:5006/composer')).json();
            let data2 = await (await fetch('http://localhost:5006/accord')).json();
            return { dataAccords, data2 }
            //setAccords(data);         
        }
        fetchData().then(sess => {
            console.log(sess.dataAccords)
            let tabpartiton = sess.dataAccords
            let tabLink = [];
            let tabImgs = [];
            const link = () => {
                for (let i = 0; i < tabpartiton.length; i++) {
                    let avantLien = sess.dataAccords[i]?.Id_accord-1
                    let lien = sess.data2[avantLien].image
                    let name = sess.data2[avantLien].name
                    // genere variable
                    //ManyToMany puis Jointure
                    tabLink.push([lien,name])
                }
                tabLink.forEach((item, index) => {
                    let AccordCharger = document.createElement('img');
                    //TODO fonction disable (display : disable)
                    AccordCharger.src = item[0];
                    AccordCharger.className = "imgcar";
                    AccordCharger.alt = item[1];
                    AccordCharger.id = index;
                    tabImgs[index] = AccordCharger;
                    document.getElementById('content').appendChild(AccordCharger);
                })
            }
            link()
            console.log("TabImgs : ", tabImgs);
            console.log("tablink : ", tabLink);

            console.log("Fin de UseEffect");
            //setTabLinkAcc(tabLink)
            setSession({
                tabImgs,
                tabLinkAcc: tabLink,
                state: 'ready',
                //accord,current,partition,state(loading)(ready)(pause)(stop)
            })
        })
            .catch(console.log())
        //setLoadingState('Ready')
    }, []);


    console.log('startgame');
    let jouer;
    //resize on window //heroku
    const animAB = (image) => {
        jouer = image.animate([
            { transform: 'translate(0px)' },
            { transform: 'translate(-600px)' },
            { transform: 'translate(-600px)' },
        ], 1500);
        image.style.transform = 'translate(-600px)'
    };
    function animBC(image) {
        // cible = document.querySelector(image);
        jouer = image.animate([
            { transform: 'translate(-600px)' },
            { transform: 'translate(-860px)' },
            { transform: 'translate(-860px)' },
        ], 1000);
        image.style.transform = 'translate(-860px)'
    };
    function animCD(image) {
        //cible = document.querySelector(image);
        jouer = image.animate([
            { transform: 'translate(-860px)' },
            { transform: 'translate(-1560px)' },
            { transform: 'translate(-1560px)' },
        ], 2000);
        image.style.transform = 'translate(-1560px)'
    };
    function pause() {
        clearInterval(intervalId);
        intervalId = null;
    };
    
    let counter = 17;
    let counterInit = 0
    let counterAB = 0
    let counterDepart = 4

    function decompte(){
        counter--;
        if (counter === 16) {
            if (counterInit === 0) {
                animAB(session.tabImgs[counterAB]); //1er index du tabPartition
                counterAB++
                counterDepart--
            }
            else if (counterAB >= session.tabImgs.length-1){ //FIN1
                animBC(session.tabImgs[counterAB - 1]);          //index de A=>B précédent
                animCD(session.tabImgs[counterAB - 2]);
                counterAB++ 
            }
            else {
                animAB(session.tabImgs[counterAB]);    //nouvel index       
                animBC(session.tabImgs[counterAB - 1]);  //index de A=>B précédent
                animCD(session.tabImgs[counterAB - 2]); // index de B=>C précédent  
                counterAB++
            }
        }
        else if (counter === 12) {
            if (counterInit === 0) {
                animAB(session.tabImgs[counterAB]);     // 2eme index du tabPartition
                animBC(session.tabImgs[counterAB - 1]);   // 1eme index du tabPartiton
                counterAB++
                counterDepart--
            }
            else if (counterAB >= session.tabImgs.length){// Fin 1
                    //index de A=>B précédent
                    animCD(session.tabImgs[counterAB - 2]);
                    pause()
                }
                else if (counterAB >= session.tabImgs.length-1){ // FIN 2
                    animBC(session.tabImgs[counterAB - 1]);          //index de A=>B précédent
                    animCD(session.tabImgs[counterAB - 2]);
                    counterAB++ 
                }
            else {
                animAB(session.tabImgs[counterAB]);            //nouvel index
                animBC(session.tabImgs[counterAB - 1]);          //index de A=>B précédent
                animCD(session.tabImgs[counterAB - 2]);          // index de B=>C précédent
                counterAB++
            }
        }
        else if (counter === 8) {
            if (counterAB >= session.tabImgs.length-1) {  //FIN 3
                animBC(session.tabImgs[counterAB - 1]);          //index de A=>B précédent
                animCD(session.tabImgs[counterAB - 2]);           //index de B=>C précédent
                counterAB++
            }
            else if (counterAB >= session.tabImgs.length){   // FIN 2
                animCD(session.tabImgs[counterAB - 2]);
                pause()
            }
            else {
                animAB(session.tabImgs[counterAB]);
                animBC(session.tabImgs[counterAB - 1]);
                animCD(session.tabImgs[counterAB - 2]);
                counterAB++
            }
        }
        else if (counter === 4) {
            if (counterAB >= session.tabImgs.length) {             //FIN 3
                animCD(session.tabImgs[counterAB - 2]);
                pause()
            }
            else {
                animAB(session.tabImgs[counterAB]);
                animBC(session.tabImgs[counterAB - 1]);
                animCD(session.tabImgs[counterAB - 2]);
                counterAB++
            }
        }
        else if (counter === 1) {
            if (counterAB < session.tabImgs.length+2) {
                counter = 17;
                counterInit++;
            }
            else {
                pause()
            }
        }
    }

    let intervalId = null;
    function start() {
        if(intervalId == null){
            intervalId = setInterval(decompte, 450);
        }
    }

    function reset(){
        clearInterval(intervalId);
        counter = 17;
        let get = document.getElementsByClassName('imgcar');
        get.remove(session.tabImgs[counterAB]);
        // animAB(null);
        animBC(null);
        animCD(null);
        get.transform = 'translate(-860px)';
        counterAB = 0;
    }

    function mode(){
    //modifier les carte par le title

    }

    console.log("avant les return")
    if (session.state === 'loading') {
        console.log("1er return")
        return (
            <>
                <div>chargement...</div>
                <div id="content"></div>
            </>
        )
    }
    //ici mes donnée sont charger
    else if (session.state === 'ready') {
        console.log("2nd return")
        console.log("tabLink 2nd retur : ", session.tabLinkAcc)
        return (
            <>
                <div className="conseil">A vous de jouer ! <br />
                    attendre que l'accord soit arrivé dans le cadre pour jouer</div>
                <div className="playerCar">
                    <div className="blockajouer"></div>
                    <div className="repaire"></div>

                    <div id="content">

                    </div>
                </div>
                <div className="playerOption">
                    <div class="icon-to-start" onClick={reset}></div>
                    <div class="play"><i  class="icon-play" onClick={start}></i></div>
                    <div class="icon-pause" onClick={pause}></div>
                    <div className="player_mode" onClick={mode}><button>Mode</button></div>
                </div>
                <div>Appuyez sur play pour commencer !<br />
                    Actualiser la page pour rejouer !
                </div>
            </>
        );
    }
};

