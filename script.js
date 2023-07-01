const container = document.querySelector(".container");
let resolution = 16;
let containerSize = container.clientWidth;

newBoard();

function newBoard(){
    let boxHeight = containerSize / resolution;
    for(let i = 0; i < resolution; i++) {
        for(let j = 0; j < resolution; j++) {
            let box = document.createElement("div");
            box.classList.add("drawBox");
            box.style.width = `${boxHeight}px`;
            box.style.height = `${boxHeight}px`;
            container.append(box);
        }
    }
    return;
}

