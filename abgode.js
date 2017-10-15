// Copyright Ko Chira 2007-2017
// Released into the public domain under Creative Commons CC0
// SMALL CHANGE

function uniToAbgode(asc) {
	var abg = ''; // value to be returned
	var i=0; // index for processing
	asc = ''+asc; // ensure the input is a string
	while(i<asc.length) {
		var a = asc.charCodeAt(i++);
		if((a>=97 && a<=122) || (a>=48 && a<=57))
			abg += String.fromCharCode(a); // a-z0-9 is straight through
		else if(a>=39 && a<=47)
			abg += String.fromCharCode(a+43); // '-/ is converted to R-Z
		else if(a==32)
			abg += String.fromCharCode(81); // space becomes Q
		else { //convert to A-P (hexadecimal) code
			//if(a<20 || a>126) // alert(a); //not printable ascii
			var c = a.toString(16).toLowerCase(); // convert character to hexadecimal "8" -> "08" -> "Ag"
			while(c.length<2)
				c = '0'+c; // left-pad to ensure minimum length of 2
			for(j=0; j<c.length; j++) {
				// convert 0123456789abcdef to ABCDEFGHIJKLMNOP
				// by adding 17 to numbers, and subtracting 22 from letters
				var d = String.fromCharCode( c[j].charCodeAt(0) + ( c[j]<='9' ? 17 : -22 ) );
				// convert the last 'digit' of A-P code to lowercase to indicate the end
				abg += (j==c.length-1 ? d.toLowerCase() : d );
			}
			//c[c.length-1] = c[c.length-1].toLowerCase();
		}
	}
	return abg;
}
function abgToUnicode(abg) {
	var asc = '';
	var i=0;
	abg = ''+abg;
	while(i<abg.length) {
		var a = abg.charCodeAt(i++);
		if((a>=97 && a<=122) || (a>=48 && a<=57))
			asc += String.fromCharCode(a); // a-z0-9 is straight through
		else if(a>=82 && a<=90)
			asc += String.fromCharCode(a-43); // R-Z is converted to '-/
		else if(a==81)
			asc += String.fromCharCode(32); // Q becomes space
		else if(a>=65 && a<=80) { //convert from A-P code
			i--;
			var c='';
			do {
				a = abg.charCodeAt(i++);
				var b =  a>90 ? a-32 : a; //convert to lowercase if needed
				c += String.fromCharCode( b + ( b<=74 ? -17 : 22 ) );
			} while(a>=65 && a<=80);
			asc += String.fromCharCode( parseInt(c.toLowerCase(),16) );
		}
		else; //oops, something is wrong!
	}
	return asc;
}
