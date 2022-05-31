function createTowers(){

    const tower1 = document.createElement("div");
    tower1.id = "tower1";
    tower1.classList.add("tower");

    const tower2 = document.createElement("div");
    tower2.id = "tower2";
    tower2.classList.add("tower");

    const tower3 = document.createElement("div");
    tower3.id = "tower3";
    tower3.classList.add("tower");

    const base1 = document.createElement("div");
    base1.classList.add("base");

    const base2 = document.createElement("div");
    base2.classList.add("base");

    const base3 = document.createElement("div");
    base3.classList.add("base");

    game.appendChild(tower1);
    game.appendChild(tower2);
    game.appendChild(tower3);

    tower1.appendChild(base1);
    tower2.appendChild(base2);
    tower3.appendChild(base3);

}

createTowers()

let diskCount = 0;
let difficulty = document.getElementById("dificulty")

const buttons = document.querySelectorAll(".difficultyButton");

buttons.forEach(function(button) {
    button.addEventListener("click", selectDifficulty);
})

function selectDifficulty(button) {
    
    if (button.target.id == "threeDisks") {
        threeDisks();
    }
    if (button.target.id == "fourDisks") {
        fourDisks();
    }
    if (button.target.id == "fiveDisks") {
        fiveDisks();
    }
    if (button.target.id == "sixDisks") {
        sixDisks();
    }

}


function threeDisks() {

    const disk1 = document.createElement('div');
    disk1.id = "1";
    disk1.classList.add("disk1");
    disk1.classList.add("disk");
    disk1.style.display = "inherit"
    
    const disk2 = document.createElement('div');
    disk2.id = "2";
    disk2.classList.add("disk2");
    disk2.classList.add("disk");
    disk2.style.display = "inherit"
    
    const disk3 = document.createElement('div');
    disk3.id = "3";
    disk3.classList.add("disk3");
    disk3.classList.add("disk");
    disk3.style.display = "inherit"

    tower1.appendChild(disk1);
    tower1.appendChild(disk2);
    tower1.appendChild(disk3);

    document.getElementById("inicialMessage").style.display = "none";
    document.getElementById("game").style.display = "inherit";

    diskCount = 3;
    difficulty.innerText = diskCount;
    difficulty.style.color = "#FFF500";
}

function fourDisks() {

    const disk1 = document.createElement('div');
    disk1.id = "1";
    disk1.classList.add("disk1");
    disk1.classList.add("disk");
    disk1.style.display = "inherit"
    
    const disk2 = document.createElement('div');
    disk2.id = "2";
    disk2.classList.add("disk2");
    disk2.classList.add("disk");
    disk2.style.display = "inherit"
    
    const disk3 = document.createElement('div');
    disk3.id = "3";
    disk3.classList.add("disk3");
    disk3.classList.add("disk");
    disk3.style.display = "inherit"

    const disk4 = document.createElement('div');
    disk4.id = "4";
    disk4.classList.add("disk4");
    disk4.classList.add("disk");
    disk4.style.display = "inherit"

    tower1.appendChild(disk1);
    tower1.appendChild(disk2);
    tower1.appendChild(disk3);
    tower1.appendChild(disk4);

    document.getElementById("inicialMessage").style.display = "none";
    document.getElementById("game").style.display = "inherit";
    
    diskCount = 4;
    difficulty.innerText = diskCount;
    difficulty.style.color = "#14FF00";
}

function fiveDisks() {

    const disk1 = document.createElement('div');
    disk1.id = "1";
    disk1.classList.add("disk1");
    disk1.classList.add("disk");
    disk1.style.display = "inherit"
    
    const disk2 = document.createElement('div');
    disk2.id = "2";
    disk2.classList.add("disk2");
    disk2.classList.add("disk");
    disk2.style.display = "inherit"
    
    const disk3 = document.createElement('div');
    disk3.id = "3";
    disk3.classList.add("disk3");
    disk3.classList.add("disk");
    disk3.style.display = "inherit"

    const disk4 = document.createElement('div');
    disk4.id = "4";
    disk4.classList.add("disk4");
    disk4.classList.add("disk");
    disk4.style.display = "inherit"

    const disk5 = document.createElement('div');
    disk5.id = "5";
    disk5.classList.add("disk5");
    disk5.classList.add("disk");
    disk5.style.display = "inherit"

    tower1.appendChild(disk1);
    tower1.appendChild(disk2);
    tower1.appendChild(disk3);
    tower1.appendChild(disk4);
    tower1.appendChild(disk5);

    document.getElementById("inicialMessage").style.display = "none";
    document.getElementById("game").style.display = "inherit";
    
    diskCount = 5;
    difficulty.innerText = diskCount;
    difficulty.style.color = "#2400FF";
}

function sixDisks(){

    const disk1 = document.createElement('div');
    disk1.id = "1";
    disk1.classList.add("disk1");
    disk1.classList.add("disk");
    disk1.style.display = "inherit"
    
    const disk2 = document.createElement('div');
    disk2.id = "2";
    disk2.classList.add("disk2");
    disk2.classList.add("disk");
    disk2.style.display = "inherit"
    
    const disk3 = document.createElement('div');
    disk3.id = "3";
    disk3.classList.add("disk3");
    disk3.classList.add("disk");
    disk3.style.display = "inherit"

    const disk4 = document.createElement('div');
    disk4.id = "4";
    disk4.classList.add("disk4");
    disk4.classList.add("disk");
    disk4.style.display = "inherit"

    const disk5 = document.createElement('div');
    disk5.id = "5";
    disk5.classList.add("disk5");
    disk5.classList.add("disk");
    disk5.style.display = "inherit"

    const disk6 = document.createElement('div');
    disk6.id = "6";
    disk6.classList.add("disk6");
    disk6.classList.add("disk");
    disk6.style.display = "inherit"

    tower1.appendChild(disk1);
    tower1.appendChild(disk2);
    tower1.appendChild(disk3);
    tower1.appendChild(disk4);
    tower1.appendChild(disk5);
    tower1.appendChild(disk6);

    document.getElementById("inicialMessage").style.display = "none";
    document.getElementById("game").style.display = "inherit";
    
    diskCount = 6;
    difficulty.innerText = diskCount;
    difficulty.style.color = "#9E00FF";
}

const instructionsButton = document.getElementById("instructions");

instructionsButton.addEventListener("click", instructions);

function instructions(){
    document.getElementById("inicialMessage").style.display = "none";
    document.querySelector(".instructions").style.display = "inherit";
}

const backtoMenu = document.getElementById("backMenu");

backtoMenu.addEventListener("click", backtoMainPage);

function backtoMainPage(){
    document.querySelector(".instructions").style.display = "none";
    document.getElementById("inicialMessage").style.display = "inherit";
}
