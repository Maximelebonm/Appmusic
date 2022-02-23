
import "../css/caroussel.css";
import img from './img/D.png';
import img2 from './img/E.png';
import img3 from './img/Am.png';
import img4 from './img/G.png';
import img5 from './img/C.png';
import img6 from './img/F.png';

export function Caroussel(props) {

    let bouton = document.querySelector(".play");
    // let img = document.getElementsByname("Am")
    let test = 10 + "px";
    let D = document.querySelector('#D');
    let E = document.querySelector('#E');
    let G = document.querySelector('#G');
    let Am = document.querySelector('#Am');
    let C = document.querySelector('#C');
    let F = document.querySelector('#F');
    let tabimage = [D, E, G, C, Am, F];
    let tabpartiton = [1, 2, 0, 5, 1, 4, 4, 1, 2, 0, 5, 1, 4, 1]

    let cible;
    let jouer;

    //tableau d'evenement ; animation parametre (); timeout il regarde dans le tableau si il y a une animation a faire
    //[declencheur devenement {animationIn}{animationInandout}{animationnout}] 
    //un compteur pour la carte 1 A=>B puis B=>C C=>D(en seconde) // une fois la carte 1 à C je met la carte 2 à A //boucle for

    const animAB = (image) => {
        let bp;
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

    let decompte = document.querySelector('.counter')
        ;
    // for(let i = 0; i<tabpartiton.length; i++){
    //     tabpartion[i]
    // }

    function decrementation() {
        // tabimage.forEach(item => {
        counter--;
        // decompte.innerHTML = counter
        //console.log("counter visible : " + counter)
        if (counter == 16) {
            if (counterInit == 0) {
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
        else if (counter == 12) {
            if (counterInit == 0) {
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
        else if (counter == 8) {
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
        else if (counter == 4) {
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
        else if (counter == 1) {
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

    return (
        <>
            <div className="test">
                <img src={img} name="D" id="D" className="imgcar" />
                <img src={img2} name="Am" id="Am" className="imgcar" />
                <img src={img3} name="E" id="E" className="imgcar" />
                <img src={img4} name="C" id="C" className="imgcar" />
                <img src={img5} name="G" id="G" className="imgcar" />
                <img src={img6} name="F" id="F" className="imgcar" />
            </div>
            <button className="btn btn-danger col-6" onClick={start}>play</button>
            <button className="btn btn-danger col-6" onClick={finish}>pause</button>
        </>
    );

};

