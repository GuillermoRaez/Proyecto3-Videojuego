let equipo1 = [];
let equipo2 = [];
let j1 = "";
let j2 = "";
let a = 0;
let b = 0;

const cambiarStage = (destiny) => {
    // console.log(destiny);
    let arrStage = ["stage1","stage2","stage3","stage4"];
    
    arrStage = arrStage.filter(val => !destiny.includes(val));

    document.getElementById(destiny).style.display = "block";

    for(let _stage of arrStage){
        document.getElementById(_stage).style.display = "none";
    }

};

const elijeLuchador = (luchador) => { 

    if(equipo2.length < 4){
        if(equipo1.length < 4){
            equipo1.push(todosJugadores[luchador]);
        } else {
            equipo2.push(todosJugadores[luchador]);

            //Una vez que haya 4 luchadores por equipo:
            if(equipo2.length == 4){
                console.log("ESTE ES EL EQUIPO 1", equipo1);
                console.log("ESTE ES EL EQUIPO 2", equipo2);
                fillEquipos()
                cambiarStage("stage3");

                setTimeout(() => {
                cambiarStage("stage4")
                }, 5000);

                arena();
            }
        }
        document.getElementById(luchador).onclick = "";
        document.getElementById(luchador).className ="selected";

}

}

const fillEquipos = () => {
    let equipos = document.getElementById("equipos");

    equipos.innerHTML = `
    <div class="equipoLuchadores">
        <div><img class="luchador" src="img/${equipo1[0].nombre}.png" alt="luchador1"></div>
        <div><img class="luchador" src="img/${equipo1[1].nombre}.png" alt="luchador3"></div>
        <div><img class="luchador" src="img/${equipo1[2].nombre}.png" alt="luchador5"></div>
        <div><img class="luchador" src="img/${equipo1[3].nombre}.png" alt="luchador7"></div>
    </div>
    <div><img class="Ring" src="img/wwelogo.png" alt="lucha"></div>
    <div class="equipoLuchadores">
        <div><img class="luchador" src="img/${equipo2[0].nombre}.png" alt="luchador2"></div>
        <div><img class="luchador" src="img/${equipo2[1].nombre}.png" alt="luchador4"></div>
        <div><img class="luchador" src="img/${equipo2[2].nombre}.png" alt="luchador6"></div>
        <div><img class="luchador" src="img/${equipo2[3].nombre}.png" alt="luchador8"></div>
    </div>`;
}

const arena = () => {
    let ring = document.getElementById("inRing");

    inRing.innerHTML = `
     <div class="equipoLuchadores">
        <div><img class="luchador" src="img/${equipo1[0].nombre}.png" alt="luchador1"></div>
        <span class="textoBasico" id="vidaP1">${equipo1[0].nombre}</span> 
    </div>

    <div><img class="inRing" onclick="golpe1(),golpe2()" src="img/fistFight.png" alt="lucha"></div>

    <div class="equipoLuchadores">
        <div><img class="luchador" src="img/${equipo2[0].nombre}.png" alt="luchador2"></div>
        <span class="textoBasico" id="vidaP2">${equipo2[0].nombre}</span>
    </div>`;
}

const golpe1 = () => {

    j1=equipo1[a];
    j2=equipo2[b];
    console.log("Luchad!");

    j1.hit(j2);
}

//Intention to add some sounds on the characters selection.

// let sound = document.querySelector(".mouse");

//     sound.addEventListener("click", () => {
//        let audio = document.createElement("audio");
//        audio.setAttribute("src”, “/audio/undertaker.mp3");
//        audio.play();
//         console.log('click en imag');
//     })

    // sound.addEventListener(“click”, () => {
    //    let audio = document.createElement(“audio”);
    //    audio.setAttribute(“src”, “/audios/Undertaker.mp3”);
    //    audio.play();
    //     console.log(‘click en imag’);
    // })