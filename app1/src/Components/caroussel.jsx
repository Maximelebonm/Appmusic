
import "../css/caroussel.css";
import { useState, useEffect, Component, Fragment } from "react";
import { Accord } from "../Models/accord.model";
//import { FetchAccord } from "../Components/fetchaccord";


export function Caroussel(props) {

    const { img } = props;

    const [loadingState, setLoadingState] = useState('loading');
    console.log("entre les usestate")
    const [accords, setAccords] = useState([]);
    //const [tabLinkAcc, setTabLinkAcc] = useState([]);
    const [startBtn, setStartBtn] = useState();
    const [session, setSession] = useState({})

    // const [index, setIndex] = useState(0);
    // const [currentProduct, setCurrentProduct] = useState();

    //setgame avec link et current
    //state Partition
    //linkState
    //autres states waiting(si 5sec passer et pas charger)
    //stateReady (5sec passer et tt charger)
    //state deconnected
    // useEffect(()=> {
    //     const link = () => {    
    //         let tabpartiton = [0, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1]
            
    //         //console.log("accord : ", accords)
    //         for (let i = 0; i < tabpartiton.length; i++) {         
    //             let lien = accords[tabpartiton[i]]?.chemin
    //             tabLinkAcc.push(lien)
    //             console.log("lien : ", lien)
    //         }
    //     }
    //     link()       
    // },[accords]);


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

        let tabpartiton = [0, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1]

        let tabLink = [];
        
        const link = () => {            
                for (let i = 0; i < tabpartiton.length; i++) {         
                    let lien = sess.dataAccords[tabpartiton[i]]?.chemin
                    tabLink.push(lien)
                 //   console.log("lien : ", lien)
                }
            }        
        link()
        console.log("tablink : ",tabLink)

        let cible;
        let jouer;
        
        const animAB = (image) => {
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

        var intervalId = null;

        const start = (card1, card2) => {  
            intervalId = setInterval(decrementation, 700);
        }
    
        console.log("Fin de UseEffect");
    })
    .catch(console.log())
    setLoadingState('Ready')
      //setSession({
        //accord,current,partition,state(loading)(ready)(pause)(stop)
    //   })
    }, []);

    console.log("avant les return")
    if (loadingState == 'loading') {
        console.log("1er return")
        return (
            <>
                <div>chargement...</div>
            </>
        )
    }
    else if(loadingState == 'ok'){

        console.log("2nd return")
        return (
            <>
            <div>terminé</div>
            <div className="test">
                <img src={tabLink[counterAB]} name="Am" id="image1" className="imgcar" />
                <img src={tabLink[counterAB - 1]} name="Am2" id="image2" className="imgcar" />
                <img src={tabLink[counterAB - 2]} name="Am3" id="image3" className="imgcar" />
            </div>
            <button className="btn btn-danger col-6" onClick={startBtn}>play</button>
            <button className="btn btn-danger col-6" onClick={finish}>pause</button>
            </>
        );
    }
};

