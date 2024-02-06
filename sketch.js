const root = document.querySelector('body');
const totalBox = (16 * 16) // 16 by 16 grid of square boxes;

for (let i = 1; i <= totalBox; i++) {

    const box = document.createElement('div');

    // height and width of each box based on outer box 600px and divided among totalBox
    const height = 600 / 16;
    const width = 600 / 16;
    box.style.cssText = `height: ${height}px; width: ${width}px;`

    root.appendChild(box);
}