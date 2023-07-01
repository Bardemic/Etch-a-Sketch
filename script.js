const container = document.querySelector(".container");
const sizeSlider = document.querySelector("#sizeSlider");
const rgbOption = document.querySelector(".rgbOption");
const colorPicker = document.querySelector(".colorPicker");
let resolution = 16;
let containerSize = container.clientWidth;
let color = "black";
let randomColor = false;
newBoard();


function changeColor(drawBox){ 
    let rColor = Math.floor(Math.random()*16777215).toString(16);
    if(randomColor) drawBox.style.backgroundColor = `#${rColor}`;
    else drawBox.style.backgroundColor = (colorPicker.value);
}

sizeSlider.oninput = function() {
    resolution = this.value;
    document.querySelectorAll(".drawBox").forEach(box => box.remove());
    newBoard();
    }
    
rgbOption.addEventListener('click', () => randomColor = !randomColor);

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

