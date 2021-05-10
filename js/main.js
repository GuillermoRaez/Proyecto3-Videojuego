const cambiarStage = (destino) => {
    
    let arrStage = ["stage1", "stage2", "stage3"];
    
    arrStage = arrStage.filter(val => !destino.includes(val));

    document.getElementById(destino).style.display = "block";

    for(let _stage of arrStage){
        document.getElementById(_stage).style.display = "none";
    }

};