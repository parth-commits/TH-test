
var qrcode = new QRCode(document.getElementById("code"), {
	width : 300,
	height : 300
});

function makeCode () {		
	var elText = '0463000019940553991231|3765C1D6E684E41C0D2D0176C6F90211|EF86591F640680FF44E5E482B1CB9421';
	
	qrcode.makeCode(elText);
}

makeCode();