function selectBar(bar, id) {
    if(chosenBar == id) {
       chosenBar = '';
       disabled = 'disabled'
       show();
    } else {
        chosenBar = id;
        chosenBarValue = numbers[id];
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