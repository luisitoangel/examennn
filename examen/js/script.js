function guardar() {
    function Hotel(ubicacion,cliente,dni,tipo,cantidad,fecha) {
        this.ubicacion=ubicacion;
        this.cliente=cliente;
        this.dni=dni;
        this.tipo=tipo;
        this.cantidad=cantidad;
        this.fecha=fecha;
   }
   var nuevaubicacion = document.getElementById("ubicacion").value;
   var nuevacliente = document.getElementById("cliente").value;
   var nuevodni = document.getElementById("dni").value;
   var nuevotipo = document.getElementById("tipo").value;
   var nuevacantidad = document.getElementById("cantper").value;
   var nuevafecha = new Date(fecha.getDate() + "/" + (fecha.getMonth() +1) + "/" + fecha.getFullYear());
   nuevoHotel = new Hotel(nuevaubicacion,nuevacliente,nuevodni,nuevotipo,nuevacantidad,nuevafecha);
   basedatos.push(nuevoHotel);
   agregartabla1();
   agregartabla2();
}
var basedatos=[];
function agregartabla1(params) {
    var contenido = '';
    for (let i = 0; i < basedatos.length; i++) {
        const element = basedatos[i];
        contenido+= '<tr><td>' + (i+1) + '<tr><td>' + element.cliente + '<tr><td>'+ element.dni + '<tr><td>' + fecha + '<tr><td>'+ ubicacion + '</td></tr>';
    }
    document.getElementsByTagName('tbody')[0].innerHTML = contenido;
   
}
function agregartabla2(params) {
    
}