// Copyright Ko Chira 2007-2017
// Released into the public domain under Creative Commons CC0

// SMALL EDIT

window.scattercrow = '!#$%()*+,-./0123456789:;=?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]abcdefghijklmnopqrstuvwxyz{|}';

function uniToScattercrow(asc) {
	var abg = '';
	var i=0;
	asc = ''+asc;
	while(i<asc.length) {
		var c = asc[i];
		var a = asc.charCodeAt(i++);
		if(window.scattercrow.indexOf(c)>=0)
			abg += c; // straight through
		else if(c==' ') abg += '_';
		else if(c=="'") abg += '^';
		else if(c=='"') abg += '~';
		else { //convert to A-P code
			//if(a<20 || a>126) // alert(a); //not printable ascii
			var c = a.toString(16).toLowerCase();
			while(c.length<2)
				c = '0'+c;
			abg += '&';
			for (var j in c) {
				var d = String.fromCharCode( c[j].charCodeAt(0) + ( c[j]<='9' ? 17 : -22 ) );
				abg += (j==c.length-1 ? d.toLowerCase() : d );
			}
			//c[c.length-1] = c[c.length-1].toLowerCase();
		}
	}
	return abg;
}

function scattercrowToUni(abg) {
	var asc = '';
	var i=0;
	abg = ''+abg;
	while(i<abg.length) {
		var c = abg[i];
		var a = abg.charCodeAt(i++);
		if(window.scattercrow.indexOf(c)>=0)
			asc += c; // straight through
		else if(c=='_') asc += ' ';
		else if(c=="^") asc += "'";
		else if(c=='~') asc += '"';
		else if(c==' ') asc += ' '; // pass through spaces for convenience (although not part of scattercrow)
		else if(c=='&') { //convert from A-P code
			//i--;
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
