
const startButton = document.querySelector("input");
const pad = document.querySelector("#sketch-pad");


addEventListener('load', () => {
    const numberOfBoxes = 16 * 16;

    for (let i = 1; i <= numberOfBoxes; i++) {
        
        const div = document.createElement('div');
        div.setAttribute('id', i);
        pad.appendChild(div);
        
    }
})


function randomColor() {
    const code = Math.ceil(Math.random() * 255);

    return code;
}


startButton.addEventListener('click', () => {

    let input = prompt("Please enter an integer between 16 and 100: ")
    
    if (input === '') {
        alert("Number is missing !!")
        return
    }
    else if (Number(input) < 16 || Number(input) > 100) {
        alert("Invalid Number. Please enter a number between 16 and 100.")
        return
    }
    else {
        // Actions if number is valid

        pad.textContent = ""
        pad.style.cssText = "border: 5px dotted grey;"

        const numberOfBoxes = input ** 2;
        const boxWidth = 800 / input;
        const boxHeight = 800 / input;
        const boxStyle = `width: ${boxWidth}px; height: ${boxHeight}px; border: none; background: none`;

        for (let i = 1; i <= numberOfBoxes; i++) {
            
            const div = document.createElement('div');
            div.style.cssText = boxStyle;
            div.id = i;
            div.addEventListener('mouseover', e => { 
                e.target.style.cssText = `width: ${boxWidth}px; height: ${boxHeight}px; border: none; background: rgb(${randomColor()}, ${randomColor()}, ${randomColor()});`;
            })

            pad.appendChild(div);
        }
    }
})

