const container = document.querySelector("#container");
const slider = document.querySelector("#range");
let grids = document.querySelectorAll(".grid");

setGridSize(slider.value);

slider.addEventListener("click",() => {
    setGridSize(slider.value)
});

function removeGrids(){
    let grids = document.querySelectorAll(".grid");
    grids.forEach(grid => {
        grid.remove();
      });
};

function adjustBaseValue(value){
    let grids = document.querySelectorAll(".grid");
    grids.forEach(grid => {
        grid.style.flexBasis = `${100/value}%`;
      });
};

function setGridSize(value){
    removeGrids()

    for (let i = 0; i<(value**2);i++){
        let grid = document.createElement("div");
        grid.classList.add("grid");
        let opacity = 0;
        let red = Math.floor(Math.random() * 255);
        let green = Math.floor(Math.random() * 255);
        let blue = Math.floor(Math.random() * 255);

        container.appendChild(grid);

        grid.addEventListener('mouseover', () => {
            opacity += 0.1
            let randomColor = `rgb(${red}, ${green}, ${blue}, ${opacity})`;
            grid.style.backgroundColor = `${randomColor}`;
          });
    };
    adjustBaseValue(value);
};
