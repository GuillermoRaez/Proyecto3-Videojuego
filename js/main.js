let equipo1 = [];
let equipo2 = [];

const cambiarStage = (destino) => {
    // console.log(destino);
    let arrStage = ["stage1","stage2","stage3","stage4"];
    
    arrStage = arrStage.filter(val => !destino.includes(val));

    document.getElementById(destino).style.display = "block";

    for(let _stage of arrStage){
        document.getElementById(_stage).style.display = "none";
    }

};

const elijeLuchador = (luchador) => { 

    if(equipo2.length < 4){

        if(equipo1.length < 4){

            equipo1.push(todosJugadores[luchador]);
            console.log(equipo1.length)
        } else {

            equipo2.push(todosJugadores[luchador]);

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
    <div><img class="Ring" src="img/fight.png" alt="lucha"></div>
    <div class="equipoLuchadores">
        <div><img class="luchador" src="img/${equipo2[0].nombre}.png" alt="luchador2"></div>
        <div><img class="luchador" src="img/${equipo2[1].nombre}.png" alt="luchador4"></div>
        <div><img class="luchador" src="img/${equipo2[2].nombre}.png" alt="luchador6"></div>
        <div><img class="luchador" src="img/${equipo2[3].nombre}.png" alt="luchador8"></div>
    </div>
    `;
}

const arena = () => {
    let ring = document.getElementById("inRing");

    inRing.innerHTML = `
    <div class="equipoLuchadores">
        <div><img class="luchador" src="img/${equipo1[0].nombre}.png" alt="luchador1"></div> 
    </div>

    <div><img class="inRing" src="img/Fist.png" alt="lucha"></div>

    <div class="equipoLuchadores">
        <div><img class="luchador" src="img/${equipo2[0].nombre}.png" alt="luchador2"></div>
    </div>`;

}

const fighting1 = () => {
   
    j1 = equipo1[0];
    j2 = equipo1[1];


    console.log("empieza la lucha");

    p1.hit(p2);
    p2.hit(p1);

    console.log(p1.vida,p2.vida);

    //do{

    //}while();
    

}

let button = document.getElementById("musicContainer");
let music = document.getElementById("music");

const playMusic = () => {

    music.play();

    button.innerHTML = `
    <button id="musicButton" onclick="pauseMusic()">
       <i class="fas fa-volume-up"></i>
    </button>`

}

const pauseMusic = () => {
    
    music.pause();

    button.innerHTML = `
    <button id="musicButton" onclick="playMusic()">
        <i class="fas fa-volume-mute"></i>
    </button>`
}
