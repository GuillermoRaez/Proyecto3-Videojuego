let equipo1 = [];
let equipo2 = [];
let j1 = "";
let j2 = "";
let a=0, b=0;

const cambiarStage = (destiny) => {
    // console.log(destiny);
    let arrStage = ["stage1","stage2","stage3","stage4","stage5", "stage6"];
    
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
                    cambiarStage("stage4");
                    fightscreen(a,b);
                }, 3500);

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
        <div><img class="luchador" src="img/${equipo1[1].nombre}.png" alt="luchador2"></div>
        <div><img class="luchador" src="img/${equipo1[2].nombre}.png" alt="luchador3"></div>
        <div><img class="luchador" src="img/${equipo1[3].nombre}.png" alt="luchador4"></div>
    </div>
    <div><img class="Ring" src="img/wwelogo.png" alt="lucha"></div>
    <div class="equipoLuchadores">
        <div><img class="luchador" src="img/${equipo2[0].nombre}.png" alt="luchador5"></div>
        <div><img class="luchador" src="img/${equipo2[1].nombre}.png" alt="luchador6"></div>
        <div><img class="luchador" src="img/${equipo2[2].nombre}.png" alt="luchador7"></div>
        <div><img class="luchador" src="img/${equipo2[3].nombre}.png" alt="luchador8"></div>
    </div>
    `;
}

const fightscreen = (a, b) => {
        let leftPlayer1 = document.getElementById("leftPlayer");
        leftPlayer1.src=`img/${equipo1[a].nombre}.png`; 
        let lifeP1 = document.getElementById("vidaP1");
        lifeP1.innerHTML = `${equipo1[a].nombre} : ${equipo1[a].vida}`;
    
    
        let rightPlayer1 = document.getElementById("rightPlayer");
        rightPlayer1.src=`img/${equipo2[b].nombre}.png`;
        let lifeP2 = document.getElementById("vidaP2");
        lifeP2.innerHTML = `${equipo2[b].nombre} : ${equipo2[b].vida}`;
    };

// let fight = document.getElementById("fight");
// fight.innerHTML = `
//             <div class="equipoLuchadores">
//             <div><img class="luchador" src="img/${equipo1[0].nombre}.png" alt="luchador1"></div>
//             <span class="textoBasico" id="vidaP1">${equipo1[0].nombre}</span> 
//             </div>
//                 <div><img class="inRing" onclick="fighting()" src="img/fistFight.png" alt="lucha"></div>
//             <div class="equipoLuchadores">
//             <div><img class="luchador" src="img/${equipo2[0].nombre}.png" alt="luchador2"></div>
//             <span class="textoBasico" id="vidaP2">${equipo2[0].nombre}</span>
//             </div>`;}

const fighting1 = () => {
    j1 = equipo1[a];
    j2 = equipo2[b];
    j1.hit(j2);

    if(j2.vida <= 0 && b<3) {
        b++;
        document.getElementById("vidaP2").innerHTML = `${equipo2[b].nombre} : ${equipo2[b].vida}`;
        fightscreen(a, b);
    }

    (j2.vida<0) ? j2.vida=0 : console.log("");

    let vidaP2 = document.getElementById("vidaP2");
    vidaP2.innerHTML = `${equipo2[b].nombre} : ${equipo2[b].vida}`;

    EndofFight(a,b);
};

const fighting2 = () => {
    j1 = equipo1[a];
    j2 = equipo2[b];
    j2.hit(j1);

    if(j1.vida <= 0 && a<3) {
        a++;
        document.getElementById("vidaP1").innerHTML = `${equipo1[a].nombre} : ${equipo1[a].vida}`;
        fightscreen(a, b);
    }

    (j1.vida<0) ? j1.vida=0 : console.log("");

    let vidaP1 = document.getElementById("vidaP1");
    vidaP1.innerHTML = `${equipo1[a].nombre} : ${equipo1[a].vida}`;

    EndofFight(a,b);
}

const EndofFight = (a, b) => {
    if ((equipo1[a].vida<=0 && a==3) || (equipo2[b].vida<=0 && b==3)){
        let winner = document.getElementById("winner");

        // if (equipo1[a].vida<=0 && equipo2[b].vida<=0) { 
        // winner.innerHTML = `¡¡Double KO!!`;
    // }
    //    else 
        if (equipo2[b].vida<=0) {
            winner.innerHTML = `
            <div><img class="winnersize" src="img/${equipo1[a].nombre}.png">
            <p>${equipo1[a].nombre} is the Winner!!<p></div>`;    
            
        } else{
            winner.innerHTML = `
            <div><img class="winnersize" src="img/${equipo2[b].nombre}.png">
            <p>${equipo2[b].nombre} is the Winner!!</p></div>`;
        }
        
        setTimeout(() => {
            cambiarStage("stage5");
        }, 500)
    }  

}

document.body.onkeydown = (c) =>{
    if(c.keyCode == 37){
        fighting1();
    }

    if(c.keyCode == 39){
        fighting2();
    }
}

document.body.onkeyup = (c) =>{
    if(c.keyCode == 37){}
    if(c.keyCode == 39){}
}

const reset = document.getElementById('playAgain');

reset.addEventListener('click', () => {
    window.location.reload();
});


// let winner = document.getElementById("winner");
// winner.innerHTML = `
// <div class="teamCharacters">
//     <div class="containerWinner" id="winnerName"></div>
//     <div><img class="winner" src="img/${equipo2[0].nombre}.png" alt="luchador1"></div>
// </div>
// `
// cambiarStage("Stage5");

//     } else if(j2.vida <= 0 ) {

//         let winner = document.getElementById("winner");
//         winner.innerHTML = `
//         <div class="teamCharacters">
//             <div class="containerWinner" id="winnerName"></div>
//             <div><img class="winner" src="img/${equipo1[0].nombre}.png" alt="luchador2"></div>
//         </div>
//         `
//         cambiarStage("Stage5");

//     } else if(j1.vida <= 0 && j2.vida <= 0){
//             alert("empate");
//     }
//     let resetGame = document.getElementById("reset");

//         resetGame.addEventListener("click",showWinner);
        
//         function showWinner() {
        
//             cambiarStage("stage1");
//             window.location.reload();
//         }
// }

