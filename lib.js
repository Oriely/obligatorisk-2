// hjelpevariable for både view og controller
var contentDiv = document.getElementById('content');
let errorMsg = '';

// model
let numbers = [7, 3, 1, 5, 8];
let chosenBar; // Variabel for hvilken stolpe som er valgt
let chosenBarValue;
let inputValue; // Variabel for hva som er skrevet i input-feltet
let selectedBar;

let chosenBorder;

let disabled = true;


// view
function show() {
    let svgInnerHtml = '';
    for (let i = 0; i < numbers.length; i++) {
        svgInnerHtml += createBar(numbers[i], i + 1, [i]);
    }
    contentDiv.innerHTML = `
            <svg id="chart" width="500" height="900" viewBox="0 0 100 60">
                ${svgInnerHtml}
            </svg><br/>
            Valgt stolpe: <i>${(!chosenBar ? 'ingen' : chosenBar)}</i>
            <br />
            Verdi:
            <input type="number" min="1" max="10" oninput="inputValue = this.value" value="${(chosenBar ? chosenBarValue : '0' ) }" />
            <button onclick="addBar()"  >Legg til stolpe</button>
            <button ${(disabled == true ? 'disabled' : '')} onclick="editBar()">Endre valgt stolpe</button>
            <button ${(disabled == true ? 'disabled' : '')} onclick="rmBar()">Fjerne valgt stolpe</button>
            <br><label>${errorMsg}</label>
        `;
}

function createBar(number, barNo, id) {
    const width = 8;
    const spacing = 2;
    let x = (barNo - 1) * (width + spacing);
    let height = number * 10;
    let y = 60 - height;
    let color = calcColor(1, 10, barNo);
    return `<rect  width="${width}" height="${height}"
                        x="${x}" y="${y}" fill="${color}" stroke="${id == chosenBar ? 'black' : ''}" onclick="selectBar('${id}');" ></rect>`;
}

function calcColor(min, max, val) {
    var minHue = 240, maxHue = 0;
    var curPercent = (val - min) / (max - min);
    var colString = "hsl(" + ((curPercent * (maxHue - minHue)) + minHue) + ",100%,50%)";
    return colString;
}

// controller
