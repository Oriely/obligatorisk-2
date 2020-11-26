function selectBar(id) {
    return (id == chosenBar ? (chosenBar = '', disabled = true ) && show() : (chosenBar = id, disabled = false, chosenBarValue = numbers[id])) && show();
}

function rmBar() {
    return (chosenBar ? numbers.splice(chosenBar, 1) :  errorMsg = 'Vennligst velg en bar') && show(); 
} 

function editBar() {
    return (chosenBar ? (inputValue <= 10 && inputValue >= 1 ? (numbers[chosenBar] = inputValue) : errorMsg = 'Velg et tall mellom 1 og 10') : errorMsg = 'Vennligst velg en bar') && show();
} 

function addBar(){
    return (inputValue !== undefined ? (inputValue <= 10 && inputValue >= 1 ? numbers.push(inputValue) : errorMsg = 'Velg et tall mellom 1 og 10') : errorMsg = 'Vennligst velg et tall') && show();
}
