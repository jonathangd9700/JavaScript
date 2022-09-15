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
let card = document.createElement(`div`);
let facturas = [];

//Funcion para iniciar sesion y avanzar hacia el simulador
function iniciarSesion()
{
    if(inputUsuario.value === USUADMIN && inputContrasena.value === PWADMIN){
        card.classList.add(`card`);
        card.innerHTML = `<p>Iniciaste sesion correctamente ${USUADMIN}</p>`;
        document.body.append(card);
        window.location.href = `./pages/facturas.html`;
    }
    else{
        card.innerHTML="";
        card.classList.add(`card`);
        card.innerHTML = `<p>Usuario o contraseña incorrectos</p>`;
        document.body.append(card);
    }
}
//funcion constructora de los objetos facturas
function Facturacion(id,facturaN,comprobanteN,cuit,edificio,administracion,precio,descripcion,fecha)
{
    this.id = id;
    this.facturaN = facturaN;
    this.comprobanteN = comprobanteN;
    this.cuit = cuit;
    this.edificio = edificio;
    this.administracion = administracion;
    this.precio = parseFloat(precio);
    this.descripcion = descripcion;
    this.fecha = fecha;
}



    //Funcion para cargar la factura
function agregarFactura()
{
    card.innerHTML="";
    const nuevaFactura = new Facturacion(facturas.length,inputNumeroFactura.value,inputNumeroComprobante.value,inputCuit.value,inputEdificio.value,inputAdministracion.value,inputPrecio.value,inputDescripcion.value,inputFecha.value);
    console.log(facturas);
        //Que no se duplique el numero de factura
        const ENCONTRADO = facturas.find(el => {
            return el.facturaN === inputNumeroFactura.value;
        })
    //Validaciones para permitir cargar la factura
    if(isNaN(inputNumeroFactura.value)===false && isNaN(inputNumeroComprobante.value) === false && isNaN(inputCuit.value) === false && inputCuit.value.length === 11 && isNaN(inputPrecio.value)===false && ENCONTRADO === undefined){
        console.log(ENCONTRADO);
        card.classList.add(`card`);
        card.innerHTML = `<p>Factura agregada</p>`;
        document.body.append(card);
        return facturas.push(nuevaFactura);
    }

        else if(ENCONTRADO!==undefined){
            card.innerHTML="";
            card.classList.add(`card`);
            card.innerHTML = `<p>La factura n° <strong>${inputNumeroFactura.value}</strong> ya fue cargada</p>`;
            document.body.append(card);
        }
        else if(inputCuit.value.length <11){
            card.innerHTML="";
            card.classList.add(`card`);
            card.innerHTML = `<p>El cuit debe tener 11 digitos </p>`;
            document.body.append(card);
        }
        else{
            card.innerHTML="";
            card.classList.add(`card`);
            card.innerHTML = `<p>Ingrese un valor válido</p>`;
            document.body.append(card);
        }
}
function precioFacturas(){
    const suma = facturas.reduce((acc,el)=> acc + el.precio,0)
    console.log(suma);
    let totalSumaFacturas = document.getElementById(`totalFacturas`);

    totalSumaFacturas.innerHTML=`<p>$${suma}</p>`;   
    return (suma);
}

function eliminarFacturas()
{
    let indiceProducto =  facturas.map(elemento => elemento.facturaN).indexOf(inputNumeroFactura.value);
    console.log(indiceProducto);
    if(indiceProducto>-1){
    facturas.splice(indiceProducto,1);
    card.innerHTML="";
    card.classList.add(`card`);
    card.innerHTML = `<p>Factura eliminada con éxito</p>`;
    document.body.append(card);
}
}
