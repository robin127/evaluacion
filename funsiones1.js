var x;
var s;
s= $(document);
x= $(document);
x.ready(inicializarEventos);
s.ready(color);
function inicializarEventos () {

	var X;
 x= $("#publicidad");
 x.click(presionPublicidad)
	
}

function presionPublicidad () {
	var x;
	x= $("#publicidad");
	x.css("background-color","#FFFFFF");
}

function  color() {
	var s;
	s= $("#encabezado");
	s.css("color","#FFFFFF");
}
	

