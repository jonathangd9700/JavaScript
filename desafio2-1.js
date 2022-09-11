/*
const USUADMIN = `Joni`;
const PWADMIN = `123JGD`;
let usuarioIngresado;
let pwIngresada;
let valorAdmin = false;
let productos = [];
let opcionElegida = "";
let productosEliminados = [];


function agregarProductos(){
    let cantidadProductos = parseInt(prompt(`Cuantos productos desea agregar?`));
    while(isNaN(cantidadProductos)===true){
        alert(`Ingrese un valor válido`);
        cantidadProductos = parseInt(prompt(`Cuantos productos desea agregar?`));
    }
    for(let i = 0; i<cantidadProductos;i++){
let nombreProducto = prompt(`Ingrese el nombre del producto`).toLowerCase();
while(isNaN(nombreProducto)===false){
    alert(`Ingrese un valor valido`);
    nombreProducto = prompt(`Ingrese el nombre del producto`).toLowerCase();
}
let precioProducto = parseFloat(prompt(`Ingrese el precio del producto`));
while(isNaN(precioProducto)===true){
    alert(`Ingrese un valor valido`);
    precioProducto = parseFloat(prompt(`Ingrese el precio del producto`));
}
let stockProducto = parseInt(prompt(`Ingrese el stock del producto`));
while(isNaN(stockProducto)===true){
    alert(`Ingrese un valor valido`);
    stockProducto = parseInt(prompt(`Ingrese el stock del producto`));
}
const ENCONTRADO = productos.find(el => {
    return el.nombre === nombreProducto;
})
console.log(ENCONTRADO);
if(ENCONTRADO === undefined){
productos.push({nombre:nombreProducto,precio:precioProducto,stock:stockProducto});
}
else{
    alert(`Este producto ya se encuentra cargado`);
}
}
console.log(productos);
}

function imprimirProductos(){
    for(let i = 0; i<productos.length;i++){
        console.log(productos[i].nombre);
    }
}

do{
    usuarioIngresado = prompt(`Ingrese su nombre de usuario\nPista: ${USUADMIN}`);
}while(usuarioIngresado != USUADMIN);

if(usuarioIngresado===USUADMIN){
    valorAdmin = true;
    console.log(valorAdmin);
}

function eliminarProducto() {

    let opcionEliminar = prompt("Ingrese que desea realizar:\n1)Eliminar ultimo producto ingresado\n2)Eliminar todos los productos\n3)Para eliminar un producto específico");
    switch (opcionEliminar) {
        case "1":
            let productoEliminado = productos.pop();
            productosEliminados.push(productoEliminado);
            break;
        case "2":
            let i = 0;
            while (i < productos.length) {
                productosEliminados.push(productos[i]);
                i++;
            }
            productos.length = 0;
        case "3":
            let productoElegido = prompt("Ingrese el producto a eliminar");
            let indiceProducto =  productos.map(elemento => elemento.nombre).indexOf(productoElegido);
            console.log(indiceProducto);
            if(productos.indexOf(productoElegido)>-1){
            productosEliminados.push(productoElegido);
            productos.splice(indiceProducto,1);
            imprimirProductos();
        }
            else{
                alert(`Ese producto no se encuentra`);
            }
            break;
        default:
            alert(`Ingrese una opción válida\n"1"  "2"  "3"`)
            break;
    }

}

function verLista(){
    let opciones = prompt(`Seleccione que lista desea ver:\n1)Productos\n2)Productos Eliminados`)
    switch (opciones) {
        case "1":
            imprimirProductos();
            break;
        case "2":
            console.log(productosEliminados);
        default:
            break;
    }
}
//-----------------------------------------------------------------------------------------------------------------------
//INTERACCION CON USUARIO
while(opcionElegida.toLowerCase()!=`esc`){
if(valorAdmin==true){
    alert(`Bienvenido de nuevo "${USUADMIN}". Que deseas hacer hoy?`)
    opcionElegida = prompt(`1)Cargar productos\n2)Modificar productos\n3)Eliminar productos\n4)Ver lista de productos\nPara finalizar escriba "ESC"`)
    console.log(opcionElegida);
    switch (opcionElegida) {
        case "1":
            agregarProductos();
            break;
        case "3":
            eliminarProducto();
            console.log(productos);
            break;
        case "4":
        verLista();
        default:
            break;
    }
}
}*/
const USUADMIN = `Joni`;
const PWADMIN = `123`;
const inputUsuario = document.getElementById(`usuario`);
const inputContrasena = document.getElementById(`contrasena`);
const inputNumeroFactura = document.getElementById(`facturaN`);
const inputNumeroComprobante = document.getElementById(`comprobanteN`);
const inputCuit = document.getElementById(`cuit`);
const inputEdificio = document.getElementById(`edificio`);
const inputAdministracion = document.getElementById(`administracion`);
const inputPrecio = document.getElementById(`precio`);
const inputDescripcion = document.getElementById(`descripcion`);
const inputFecha = document.getElementById(`fecha`);
let facturas = [];

function iniciarSesion()
{
    if(inputUsuario.value === USUADMIN && inputContrasena.value === PWADMIN){
        alert(`Iniciaste sesion correctamente ${USUADMIN}`)
        window.location.href = `./pages/facturas.html`;
    }
    else{
        alert(`Error`);
    }
}
function Facturacion(id,facturaN,comprobanteN,cuit,edificio,administracion,precio,descripcion,fecha)
{
    this.id = id;
    this.facturaN = facturaN
    this.comprobanteN = comprobanteN;
    this.cuit = cuit;
    this.edificio = edificio;
    this.administracion = administracion;
    this.precio = parseFloat(precio);
    this.descripcion = descripcion;
    this.fecha = fecha;
}

function agregarFactura()
{
    const nuevaFactura = new Facturacion(facturas.length,inputNumeroFactura.value,inputNumeroComprobante.value,inputCuit.value,inputEdificio.value,inputAdministracion.value,inputPrecio.value,inputDescripcion.value,inputFecha.value);
    console.log(facturas);
    return facturas.push(nuevaFactura);
}
function precioFacturas(){
    let suma = 0;
    let i=0;
    for(let i=0;i<facturas.length;i++){
        suma +=facturas[i].precio;
        console.log(suma);
    } 
    let totalSumaFacturas = document.getElementById(`totalFacturas`);

    totalSumaFacturas.innerHTML=`<p>$${suma}</p>`;   
    return (suma);
}

