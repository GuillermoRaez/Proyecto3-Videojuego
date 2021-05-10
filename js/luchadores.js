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
let player4 = new Luchadores("Randy Orton",30,13,14,18);
let player5 = new Luchadores("John Cena",39,16,7,11);
let player6 = new Luchadores("Triple H",37,14,8,10);
let player7 = new Luchadores("The Rock",32,13,9,12);
let player8 = new Luchadores("Stone Cold",33,13,7,11);


let allPLayers = {
    "1" : player1,
    "2" : player2,
    "3" : player3,
    "4" : player4,
    "5" : player5,
    "6" : player6,
    "7" : player7,
    "8" : player8,
}