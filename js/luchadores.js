class Luchadores{

    constructor(nombre,ataque,defensa,tecnica,velocidad){
        this.vida = 100,
        this.nombre = nombre, 
        this.ataque = ataque,
        this.defensa = defensa;
        this.tecnica = tecnica;
        this.velocidad = velocidad;
    }

    hit(enemy){
        enemy.vida -= this.ataque - enemy.defensa;
    }

}



// Instancio luchadores 

let jugador1 = new Luchadores("Undertaker",35,20,15,8);
let jugador2 = new Luchadores("Batista",38,15,8,10);
let jugador3 = new Luchadores("Edge",28,11,12,15);
let jugador4 = new Luchadores("RandyOrton",30,13,14,18);
let jugador5 = new Luchadores("JohnCena",39,16,7,11);
let jugador6 = new Luchadores("TripleH",37,14,8,10);
let jugador7 = new Luchadores("TheRock",32,13,9,12);
let jugador8 = new Luchadores("StoneCold",33,13,7,11);
let jugador9 = new Luchadores("ChrisJericho",29,13,12,11);
let jugador10 = new Luchadores("CMPunk",29,14,14,12);
let jugador11 = new Luchadores("MattHardy",27,12,13,10);
let jugador12 = new Luchadores("JeffHardy",26,15,14,18);


let todosJugadores = {
    "1" : jugador1,
    "2" : jugador2,
    "3" : jugador3,
    "4" : jugador4,
    "5" : jugador5,
    "6" : jugador6,
    "7" : jugador7,
    "8" : jugador8,
    "9" : jugador9,
    "10" :jugador10,
    "11" :jugador11,
    "12" :jugador12,
}