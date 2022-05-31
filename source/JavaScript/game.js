const towers = document.querySelectorAll(".tower")

towers.forEach(function tower(click){
    click.addEventListener("click", play);
});

function play(clicked){
    
    if(clicked.target.classList.contains("disk")){
        diskClick(clicked.target)

    }else if(clicked.target.classList.contains("tower")){
        towerClick(clicked.target)
    }
}

let selectedDisk;
let previousDisk;

function diskClick(disk){

    if(selectedDisk === undefined){
        
        let lastDiskOnTower = disk.parentElement.lastChild
        lastDiskOnTower.classList.add("selected");

        selectedDisk = lastDiskOnTower;
        previousDisk = selectedDisk;

    }else if(disk.id < selectedDisk.id.lastChild){

        move(previousDisk, disk.parentElement)
        moveCount()

        selectedDisk.classList.remove("selected")
        selectedDisk = undefined;
    }

}

function move(disk, clickedTower) {
    clickedTower.appendChild(disk);
}

function towerClick(tower){

    if (selectedDisk === undefined) {

        selectedDisk = tower.lastChild;
        selectedDisk.classList.add("selected");

    }else if (tower.childElementCount == 0 || tower.lastChild.id <= selectedDisk.id) {

        move(previousDisk, tower)
        moveCount()

        selectedDisk.classList.remove("selected");
        selectedDisk = undefined;

        win()

    }

}


let movementCount = 0;
const moveNumber = document.getElementById("moves");

function moveCount() {

    movementCount++;
    moveNumber.innerText = movementCount;
}

function win() {

    if (tower3.childElementCount == diskCount + 1) {
        victoryMessage();
    }

}

function victoryMessage() {
    
    const mainContainer = document.querySelector("main")

    const container = document.createElement("div");
    container.classList.add("victoryMessage");

    const message = document.createElement("p");
    message.innerText = "Parabens! Você conseguiu vencer o jogo com: " + movementCount + " movimentos!"

    document.getElementById("game").style.display = "none";

    container.appendChild(message)
    mainContainer.appendChild(container)
}
