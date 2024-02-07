function getUserRequest() {

    let squareGrid = prompt('Please input integer between 16 and 100:');

    // Only proceed if user provide a number OR an interger
    if (isNaN(parseInt(squareGrid))) {
        alert(`Your input is incorrect. Please try again.`)
        return
    }
    else if ((parseInt(squareGrid) >= 16) && ((parseInt(squareGrid) <= 100))) {
        squareGrid = parseInt(squareGrid)
    }
    else {
        alert(`Invalid Input: ${squareGrid}. Please try again.`)
        return
    }

    return squareGrid;
}

function hoverEffect() {

    // Generate random number within specific range
    function getRandom(min, max) {
        const floatRandom = Math.random()

        const difference = max - min

        // random between 0 and the difference
        const random = Math.round(difference * floatRandom)

        const randomWithinRange = random + min

        return randomWithinRange
    }

    const boxes = document.querySelectorAll('#container > div');

    boxes.forEach(box => {

        let red = getRandom(0, 255)
        let green = getRandom(0, 255)
        let blue = getRandom(0, 255)

        box.addEventListener('mouseenter',
            e => { e.target.style.backgroundColor = `RGB(${red}, ${green}, ${blue})` }
        )
    })
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

    hoverEffect()
}

const button = document.querySelector('button');
button.addEventListener('click', sketchPad);