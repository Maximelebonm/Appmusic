
import "../css/caroussel.css";
import { useState, useEffect, Component, Fragment } from "react";
import { Accord } from "../Models/accord.model";
//import { FetchAccord } from "../Components/fetchaccord";


export function Caroussel(props) {

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
            let dataAccords = await (await fetch('http://localhost:5001/accord')).json();
            let data2 = await (await fetch('http://localhost:5001/musique')).json();
            return { dataAccords, data2 }
            //setAccords(data);         
        }
        fetchData().then(sess => {
            console.log(sess.data2[0].musiqueAccord)

            let tabpartiton = sess.data2[0].musiqueAccord


            let tabLink = [];
            let tabImgs = [];

            const link = () => {
                for (let i = 0; i < tabpartiton.length; i++) {
                    let lien = sess.dataAccords[tabpartiton[i] - 1]?.chemin
                    // genere variable
                    tabLink.push(lien)
                }
                tabLink.forEach((item, index) => {
                    let AccordCharger = document.createElement('img');
                    AccordCharger.src = item;
                    AccordCharger.className = "imgcar";
                    AccordCharger.id = index;
                    tabImgs[index] = AccordCharger
                    document.getElementById('content').appendChild(AccordCharger)
                })
            }
            link()
            console.log("TabImgs : ", tabImgs)
            console.log("tablink : ", tabLink)

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
    function finish() {
        clearInterval(intervalId);
    };

    let counter = 17;
    let counterInit = 0
    let counterAB = 0
    let counterDepart = 4

    function decompte() {
        // tabimage.forEach(item => {

        counter--;
        // decompte.innerHTML = counter
        //console.log("counter visible : " + counter)
        if (counter === 16) {
            if (counterInit === 0) {
                animAB(session.tabImgs[counterAB]); //1er index du tabPartition
                console.log("init1")
                counterAB++
                counterDepart--

            }
            else {
                console.log("boucle1")
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
                console.log("init2")
            }
            else {
                console.log("boucle2")
                animAB(session.tabImgs[counterAB]);            //nouvel index
                animBC(session.tabImgs[counterAB - 1]);          //index de A=>B précédent
                animCD(session.tabImgs[counterAB - 2]);          // index de B=>C précédent
                counterAB++
            }
        }
        else if (counter === 8) {
            if (counterAB >= session.tabImgs.length - 2) {
                console.log("fin1")
                animBC(session.tabImgs[counterAB - 1]);          //index de A=>B précédent
                animCD(session.tabImgs[counterAB - 2]);           //index de B=>C précédent
                counterAB++

            }
            else {
                animAB(session.tabImgs[counterAB]);
                animBC(session.tabImgs[counterAB - 1]);
                animCD(session.tabImgs[counterAB - 2]);
                counterAB++
            }
        }
        else if (counter === 4) {
            if (counterAB >= session.tabImgs.length - 1) {
                console.log("fini2")
                animCD(session.tabImgs[counterAB - 2]);
            }
            else {
                animAB(session.tabImgs[counterAB]);
                animBC(session.tabImgs[counterAB - 1]);
                animCD(session.tabImgs[counterAB - 2]);
                counterAB++
            }
        }
        else if (counter === 1) {
            if (counterAB < session.tabImgs.length - 1) {
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
    }

    let intervalId = null;

    function start() {

        intervalId = setInterval(decompte, 1000);
    }

    function test() {
        counterDepart--
        return (
            counterDepart
        )

    }
    console.log("avant les return")
    if (session.state == 'loading') {
        console.log("1er return")
        return (
            <>
                <div>chargement...</div>
                <div id="content"></div>
            </>
        )
    }


    //ici mes donnée sont charger
    else if (session.state == 'ready') {
        console.log("2nd return")

        console.log("tabLink 2nd retur : ", session.tabLinkAcc)
        return (
            <>
                <div className="conseil">A vous de jouer ! <br />
                    attendre que l'accord soit arrivé dans le cadre pour jouer</div>
                <div className="playerCar">
                    <div className="blockajouer">

                    </div>
                    <div className="repaire"> </div>

                    <div id="content">

                    </div>
                </div>
                <div className="playerOption">
                    <button className="boutonPLay" onClick={start}>play</button>
                    <button className="boutonStop" onClick={finish}>pause</button>
                </div>
                <div>Appuyez sur play pour commencer !<br />
                    Actualiser la page pour rejouer !
                </div>
            </>
        );
    }
};

