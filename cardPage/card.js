
function toInfo() {
    document.location.href = "../helpPage/help.html";
}
let cardNumber = '';

function addQRCode() {
    // will automatically take the smallest size that can fit the data
    var typeNumber = 0;
    // lowest error correction level since we dont need error correction since its a watch app.
    var errorCorrectionLevel = 'L';
    var qr = qrcode(typeNumber, errorCorrectionLevel);
    qr.addData(cardNumber);
    qr.make();

    // ( eachDotSize=6, marginSize=4)
    document.getElementById('code').innerHTML = qr.createSvgTag(6, 4);

    // makes it fit entire screen
    document.getElementById('code').childNodes[0].setAttribute("width", "230px");
    document.getElementById('code').childNodes[0].setAttribute("height", "230px");

    // turns everything else off
    let cardHolder = document.getElementById("qrcode-holder");
    cardHolder.style.backgroundColor = "white";
    myRemove(document.getElementById("no-code"));
    myRemove(document.getElementById("help-button"));
    
}

function myRemove(elem) {
    elem.parentNode.removeChild(elem);
}

// this needs to happen before the function call below
if (!localStorage.getItem("cardNumber")) {
    localStorage.setItem("cardNumber", "");
} else {
    cardNumber = localStorage.getItem('cardNumber');
    // if it isnt empty
    if (cardNumber !== '') {
        addQRCode();
    }
}