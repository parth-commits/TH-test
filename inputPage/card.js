
function toInfo() {
    document.location.href = "../helpPage/help.html";
}
let cardNumber = '';
// let codeText = '0463000019940553991231|3765C1D6E684E41C0D2D0176C6F90211|EF86591F640680FF44E5E482B1CB9421';

function addQRCode() {
    let qrcode = new QRCode(document.getElementById("code"), {
        width : 230,
        height : 230
    });
    
    function makeCode () {
        qrcode.makeCode(cardNumber);
    }
    let cardHolder = document.getElementById("qrcode-holder");
    cardHolder.style.backgroundColor = "white";
    myRemove(document.getElementById("no-code"));
    myRemove(document.getElementById("help-button"));
    
    makeCode();
}
//addQRCode();

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