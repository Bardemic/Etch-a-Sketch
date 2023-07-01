const container = document.querySelector(".container");
const sizeSlider = document.querySelector("#sizeSlider");
let resolution = 16;
let containerSize = container.clientWidth;
let color = "black";
let randomColor = true;
newBoard();


function changeColor(drawBox){ 
    let rColor = Math.floor(Math.random()*16777215).toString(16);
    if(randomColor) {
        drawBox.style.backgroundColor = `#${rColor}`;
    }
    //drawBox.style.backgroundColor = (color);
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

