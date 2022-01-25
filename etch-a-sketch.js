//defining some stuff
const mainContainer = document.createElement('div');
const grid = document.getElementById('grid');
let selectedColor = 'black';
let selectedSize = 16;
let eraseBtn = document.getElementById('erase-button');
let slider = document.getElementById('myRange');
let output = document.getElementById('demo');
output.innerHTML = slider.value;
selectedSize = slider.value;

//slider function
slider.oninput = function (){
output.innerHTML = slider.value;
selectedSize = slider.value;
eraseGrid();
buildGrid(selectedSize);
}


//call the function that builds the grid
buildGrid(selectedSize);


//The function fills the grid with even shaped and sized squares, and builds a div for each one of them.

function buildGrid(size) {
    let squareSize = document.getElementById('grid').clientWidth / size;

    for (let i = 1; i <= size * size; i++) {
        let square = document.createElement('div');
        grid.appendChild(square);
        square.style.width = squareSize + "px";
        square.style.height = squareSize + "px";
        square.classList.add('square');
        square.id = "square"

        
    

        if (i == 1) {
            square.style.borderTopLeftRadius = "30px";
        } else if (i == size) {
            square.style.borderTopRightRadius = "30px";
        } else if (i == size * size - size + 1) {
            square.style.borderBottomLeftRadius = "30px";
        } else if (i == size * size) {
            square.style.borderBottomRightRadius = "30px";
        }

    }
}



//function that paints the grid

function paintGrid(elem, color) {
    let square = elem.target;
    console.log(square);
    square.style.backgroundColor = color;
}


//erase the grid

function eraseGrid() {
    grid.innerHTML = '';
}

eraseBtn.addEventListener('click', () => {
    eraseGrid();
    selectedSize = slider.value;
    buildGrid(selectedSize);
})


//random color

function getRandomColor() {
    let rand = Math.round(Math.random() * 0xffffff);
    let r = rand >> 16;
    let g = rand >> 8 & 255;
    let b = rand & 255;
    return 'rgb(' + r + ',' + g + ',' + b + ')';
    
}

//paint the grid when the mouseover event is active. uses selectedColor

grid.addEventListener('mousedown', event => {
    grid.addEventListener('mouseover', event =>{
        paintGrid(event, getRandomColor()); 
    })
})


//WHAT NEEDS TO BE CREATED:
//grid thats filled with 16x16 squares
//inside the grid - a funciton that creates the squares inside the grid ==> paintGrid
//a function that deletes the grid ==> eraseGrid
//a way to paint the grid - leave a trail of painted "pixels" (the squares we created) ==> paintGrid, getRandomColor
//add a hover effect that changes the squares with random colors once your mouse hovers over them ==> getRandomColor
//add a text input that asks user for the size (number of squares) for the new grid ==> gridInput
//link text input to action of erasing the grid

//ADDDITIONS
//Add a size controller to the Grid (control the size of the paint "brush")
//add a button that erases the grid
//that is, seperate between the funcrtion of controlling the brush and erasing the grid
