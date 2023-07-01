const container = document.querySelector(".container");
const sizeSlider = document.querySelector("#sizeSlider");
let resolution = 16;
let containerSize = container.clientWidth;
let color = "black";
newBoard();


function changeColor(drawBox){ 
    drawBox.style.backgroundColor = (color);
}

sizeSlider.oninput = function() {
    resolution = this.value;
    document.querySelectorAll(".drawBox").forEach(box => box.remove());
    newBoard();
    }
    


function newBoard(){
    let boxHeight = containerSize / resolution;
    for(let i = 0; i < resolution; i++) {
        for(let j = 0; j < resolution; j++) {
            let box = document.createElement("div");
            box.classList.add("drawBox");
            box.style.width = `${boxHeight}px`;
            box.style.height = `${boxHeight}px`;
            box.addEventListener('mouseover', () => changeColor(box));
            container.append(box);
        }
    }
    return;
}

