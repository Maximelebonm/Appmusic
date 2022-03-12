
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
    const [session, setSession] = useState({state:'loading', tabLinkAcc:[],})

    useEffect(() => {
        const fetchData = async () => {
            console.log("fetch")
            let dataAccords = await (await fetch('http://localhost:5001/accord')).json();
            let data2 = await (await fetch('http://localhost:5001/accord')).json();
            return {dataAccords, data2} 
            //setAccords(data);         
        }
        fetchData().then(sess => { 
        console.log(sess)

        let tabpartiton = [2, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1]

        let tabLink = [];
        let tabImgs = [];
        
        const link = () => {            
                for (let i = 0; i < tabpartiton.length; i++) {         
                    let lien = sess.dataAccords[tabpartiton[i]]?.chemin
                    // genere variable
                    tabLink.push(lien)
                }
                tabLink.forEach((item,index) => {                   
                    let AccordCharger = document.createElement('img');
                    AccordCharger.src = item;
                    AccordCharger.className = "imgcar";
                    AccordCharger.id = index;
                    tabImgs[index] = AccordCharger
                    document.getElementById('content').appendChild(AccordCharger)  
                })
            }        
        link()
        console.log("TabImgs : ",tabImgs)
        console.log("tablink : ",tabLink)

        console.log("Fin de UseEffect");
        //setTabLinkAcc(tabLink)
        setSession({
            tabImgs,
            tabLinkAcc:tabLink, 
            state:'ready',
          //accord,current,partition,state(loading)(ready)(pause)(stop)
         })
    })
    .catch(console.log())
    //setLoadingState('Ready')
    }, []);
 
    function startGame() {
    console.log('startgame')
    let jouer;
    //resize on window
    const animAB = (image) => {
        jouer = image.animate([
            { transform: 'translate(0px)' },
            { transform: 'translate(-48%)' },
            { transform: 'translate(-50%)' },
        ], 2000);
        image.style.transform = 'translate(-50%)'
    };
    function animBC(image) {
        // cible = document.querySelector(image);
        jouer = image.animate([
            { transform: 'translate(-50%)' },
            { transform: 'translate(-55%)' },
            { transform: 'translate(-55%)' },
        ], 1000);
        image.style.transform = 'translate(-55%)'
    };
    function animCD(image) {
        //cible = document.querySelector(image);
        jouer = image.animate([
            { transform: 'translate(-55%)' },
            { transform: 'translate(-100%)' },
            { transform: 'translate(-100%)' },
        ], 2000);
        image.style.transform = 'translate(-100%)'
    };
    function finish() {
        clearInterval(intervalId);
    };

    let counter = 17;
    let counterInit = 0
    let counterAB = 0

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
    intervalId = setInterval(decompte, 700);
}

//changer les image tout les 3 setinterval 

//
    console.log("avant les return")
    if(session.state == 'loading') {
        console.log("1er return")
        return (
            <>
                <div>chargement...</div>
                <div id="content"></div>
            </>
        )
    }
    //faire une tableau de composant
    //ici mes donnée sont charger
    else if(session.state == 'ready'){
        console.log("2nd return")



        console.log("tabLink 2nd retur : ", session.tabLinkAcc)
        return (
            <>
            <div>A vous de jouer !</div>
                <div className="playerCar">               
                    <div id="content"></div>
                    {/* {tableauHTMLImage} */}
                </div>
            <button className="btn btn-danger col-6" onClick={startGame}>play</button>
            <button className="btn btn-danger col-6" onClick={startGame}>pause</button>
            <div>Appuyez sur play pour commencer !</div>
            </>
        );
    }
};

