var canvas = document.getElementById("area_dibujo");
var papel = canvas.getContext("2d");
var rect=canvas.getBoundingClientRect();
var grosor = document.getElementById("grosorD")
var color = document.getElementById('colorD');
var ancho = canvas.width;
var x = 0;
var y = 0;
var dibujando=false;
//lineas iniciales del car("black", 0,0,0,ancho,papel);
dibujar("black", x,y,0,ancho);
dibujar("black", 0,0,ancho,0,papel);
dibujar("black", ancho,0,ancho,ancho,papel);
// llamada a el evento de mousedown
canvas.addEventListener("mousedown",function(e){
    var xa = e.clientX - rect.left;
    var ya = e.clientY - rect.top;
    x = xa;
    y = ya;
    dibujando=true;
});
// llamada evento mousemove
canvas.addEventListener("mousemove",function(e){
    if(dibujando===true){
        dibujar(x , y, e.clientX - rect.left, e.clientY - rect.top);
        x = e.clientX - rect.left;
        y = e.clientY - rect.top;
    }
});
// llamada evento mouseup
canvas.addEventListener("mouseup",function(e){
    if(dibujando===true){
        dibujar(x,y, e.clientX - rect.left, e.clientY - rect.top);
        x=0;
        y=0;
        dibujando=false;
    }
});
// funcion que dibuja las lineas
function dibujar(xi, yi, xf, yf,){
    papel.beginPath();
    papel.strokeStyle = color.value;
    papel.lineWidth = grosor.value;
    papel.moveTo(xi, yi);
    papel.lineTo(xf, yf);
    papel.stroke();
    papel.closePath();
}
// para mas adelante crear un efecto con un boton
/*canvas.addEventListener("mousemove",function(e){
    if(dibujando===true){
        dibujar(x , y, e.clientX - rect.left, e.clientY - rect.top);
        x = xa;
        y = ya;
    }
}); */