const qunit = document.getElementById('qunit');

// hjelpevariable for både view og controller
var contentDiv = document.getElementById('content');

// model
let numbers = [7, 3, 1, 5, 8];
let chosenBar; // Variabel for hvilken stolpe som er valgt

let inputValue; // Variabel for hva som er skrevet i input-feltet
let selectedBar;

let chosenBorder;

let disabled = 'disabled';


// view
function show() {
    let svgInnerHtml = '';
    for (let i = 0; i < numbers.length; i++) {
        svgInnerHtml += createBar(numbers[i], i + 1, 'bar' + [i]);
    }
    contentDiv.innerHTML = `
        <svg id="chart" width="500" viewBox="0 0 80 60">
            ${svgInnerHtml}
        </svg><br/>
        Valgt stolpe: <i>${(!chosenBar ? 'ingen' : chosenBar)}</i>
        <br />
        Verdi:
        <input type="number" min="1" max="10" oninput="inputValue = this.value" ${disabled}/>
        <button ${disabled}>Legg til stolpe</button>
        <button ${disabled} onclick="editBar();">Endre valgt stolpe</button><br />
        <button ${disabled}>Fjerne valgt stolpe</button>
        `;
}

function createBar(number, barNo, id) {
    const width = 8;
    const spacing = 2;
    let x = (barNo - 1) * (width + spacing);
    let height = number * 10;
    let y = 60 - height;
    let color = calcColor(1, 10, barNo);
    return `<rect id="${id}" width="${width}" height="${height}"
                        x="${x}" y="${y}" fill="${color}" onclick="selectBar(this);" ></rect>`;
}

function calcColor(min, max, val) {
    var minHue = 240, maxHue = 0;
    var curPercent = (val - min) / (max - min);
    var colString = "hsl(" + ((curPercent * (maxHue - minHue)) + minHue) + ",100%,50%)";
    return colString;
}

// controller (ingenting her ennå)

function selectBar(bar) {
    if(chosenBar == bar.id) {
       chosenBar = '';
       bar.style.stroke = '';
       disabled = 'disabled'
       show();
    } else {
        chosenBar = bar.id;
        bar.style.stroke = 'black';
        disabled = '';
        show();
    }
}

function editBar() {


}

function addBar(){

}

if(qunit === null) {console.error('ff');


} else {
    const add = (a, b) => a + b;
    QUnit.module('add', function() {
      QUnit.test('should add two numbers', function(assert) {
        assert.equal(add(1, 1), 2, '1 + 1 = 2');
      });
    });

}