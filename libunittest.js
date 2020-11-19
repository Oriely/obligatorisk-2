
// hjelpevariable for både view og controller
var contentDiv = document.getElementById('content');
let errorMsg = '';
// model
let numbers;
let chosenBar; // Variabel for hvilken stolpe som er valgt

let inputValue; // Variabel for hva som er skrevet i input-feltet


let disabled = 'disabled';


// view
function show() {

}

// controller
function selectBar(bar, id) {
    if(chosenBar == id) {
       chosenBar = '';
       bar.style.stroke = '';
       disabled = 'disabled'
       show();
    } else {
        chosenBar = id;
        chosenBarValue = numbers[id];
        bar.style.stroke = 'black';
        disabled = '';
        show();
    }
}

function rmBar() {
    return (chosenBar ? numbers.splice(chosenBar, 1) :  errorMsg = 'Vennligst velg en bar') && show(); 
}

function editBar() {
    return (chosenBar ? (inputValue <= 10 ? (numbers[chosenBar] = inputValue) : errorMsg = 'Velg et tall mellom 1 og 10') : errorMsg = 'Vennligst velg en bar') && show();
} 

function addBar(){
    return (inputValue !== undefined ? (inputValue <= 10 ? numbers.push(inputValue) : errorMsg = 'Velg et tall mellom 1 og 10') : errorMsg = 'Vennligst velg et tall') && show();
}
// ;


QUnit.module('beep', function() {
    QUnit.test('fjerne stolpe', function(assert) {
        numbers = [7, 3, 1, 5, 8]
        chosenBar = 2;
        rmBar();
        assert.deepEqual(numbers, [7, 3, 5, 8]);
    });
    QUnit.test('endre en stolpe', function(assert) {
        numbers = [7, 3, 1, 5, 8];
        chosenBar = 2; // Variabel for hvilken stolpe som er valgt
        inputValue = 6; // Variabel for hva som er skrevet i input-feltet
        editBar()

        assert.deepEqual(numbers, [7, 3, 6, 5, 8]);
    });
    QUnit.test('legge til en stolpe', function(assert) {
        numbers = [7, 3, 1, 5, 8];
        inputValue = 6; // Variabel for hva som er skrevet i input-feltet
        addBar()
        assert.deepEqual(numbers, [7, 3, 1, 5, 8, 6]);
    });
    QUnit.test('should add two numbers', function(assert) {
        

        assert.equal();
    });
    QUnit.test('should add two numbers', function(assert) {
        assert.equal();
    });
    QUnit.test('should add two numbers', function(assert) {
        assert.equal();
    });
    QUnit.test('should add two numbers', function(assert) {
        assert.equal();
    });

});
