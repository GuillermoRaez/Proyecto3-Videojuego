class Luchadores{

    constructor(nombre,ataque,defensa,tecnica,velocidad){
        this.vida = 100,
        this.suerte = Math.floor(Math.random() * 11),
        this.nombre = nombre, 
        this.ataque = ataque,
        this.defensa = defensa;
        this.tecnica = tecnica;
        this.velocidad = velocidad;
    }

    hit(enemy){
        enemy.vida -= this.ataque - (enemy.defensa * (enemy.suerte / this.velocidad));
    }


    specialHit(enemy){
        enemy.vida -= this.ataque + this.tecnica - (enemy.defensa * (enemy.suerte / this.velocidad));
    }
}


// Instancio luchadores 

let player1 = new Luchadores("Undertaker",35,20,15,8);
let player2 = new Luchadores("Batista",38,15,8,10);
let player3 = new Luchadores("Edge",28,11,12,15);
let player4 = new Luchadores("RandyOrton",30,13,14,18);
let player5 = new Luchadores("JohnCena",39,16,7,11);
let player6 = new Luchadores("TripleH",37,14,8,10);
let player7 = new Luchadores("TheRock",32,13,9,12);
let player8 = new Luchadores("StoneCold",33,13,7,11);
let player9 = new Luchadores("ChrisJericho",29,13,12,11);
let player10 = new Luchadores("CMPunk",29,14,14,12);
let player11 = new Luchadores("MattHardy",27,12,13,10);
let player12 = new Luchadores("JeffHardy",26,15,14,18);


let todosJugadores = {
    "1" : player1,
    "2" : player2,
    "3" : player3,
    "4" : player4,
    "5" : player5,
    "6" : player6,
    "7" : player7,
    "8" : player8,
    "9" : player9,
    "10" : player10,
    "11" : player11,
    "12" : player12,

}