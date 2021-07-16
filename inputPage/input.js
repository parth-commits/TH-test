let theCodeText = '';
function saveAndExit() {
    localStorage.setItem("cardNumber", theCodeText);
    window.history.back();
}

// max 32 chars
function myInput(){
    let y = outputText(document.getElementById('input-box').value);
    document.getElementById('output-text').innerHTML = y;
    theCodeText = y;
}

function outputText(inputText) {
    for (let i = 0; i < inputText.length; i++) {
        temp = inputText.charCodeAt(i);
        if (!(temp > 47 && temp < 58) && // numeric (0-9)
            !(temp > 64 && temp < 91) && // upper alpha (A-Z)
            !(temp > 96 && temp < 123)) { // lower alpha (a-z)
            inputText = inputText.replaceAt(i, "|");
        }
    }
    console.log(inputText);
    return inputText;
}

// personal replace function
String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}