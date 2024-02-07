function getUserRequest() {

    let squareGrid = prompt('Please input Square Grid:');

    // Only proceed if user provide a number OR an interger
    if ((squareGrid != null) || (Number.isInteger(squareGrid))) {
        squareGrid = parseInt(squareGrid)
    }

    return squareGrid;
}

function sketchPad() {

    // Clear the sketch pad each time user click the "Start" button
    const root = document.querySelector('#container');
    root.textContent = '';

    let squareGrid = getUserRequest();
    let numberOfBox = squareGrid ** 2;

    // Draw the square box
    for (let i = 1; i <= numberOfBox; i++) {

        const box = document.createElement('div');

        // height and width of each box based on outer box 600px and divided among numberOfBox
        const height = 600 / squareGrid;
        const width = 600 / squareGrid;

        box.style.cssText = `height: ${height}px; width: ${width}px;`

        root.appendChild(box);
    }
}

const button = document.querySelector('button');
button.addEventListener('click', sketchPad);