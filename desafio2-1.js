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
const btnAgregar = document.getElementById(`btnAgregar`);
const btnEliminar = document.getElementById(`btnEliminar`);
let card = document.createElement(`div`);
let listaFacturas= document.getElementById(`listaFacturas`);
let listaConsorcios = document.getElementById(`listaConsorcios`);
let totalFacturas = document.getElementById(`totalFacturas`);
let ENCONTRADO;

//Funcion para iniciar sesion y avanzar hacia el simulador
function iniciarSesion()
{
    if(inputUsuario.value === USUADMIN && inputContrasena.value === PWADMIN){
        Swal.fire({
            title: `Iniciaste sesion ${USUADMIN}`,
            icon: 'success',
            focusConfirm: true,
            confirmButtonText: `<i class="fa fa-thumbs-up"></i><strong>EXITO!</strong>`
        }
        
        )
        setTimeout(()=>{
            window.location.assign(`./pages/facturas.html`);
        }, 2000)
    }
    else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Usuario o contraseña incorrectos'
          })
    }
}
//funcion constructora de los objetos facturas
class Facturacion{
    constructor(facturaN,comprobanteN,cuit,edificio,administracion,precio,descripcion,fecha)
{
    this.facturaN = facturaN;
    this.comprobanteN = comprobanteN;
    this.cuit = cuit;
    this.edificio = edificio;
    this.administracion = administracion;
    this.precio = parseFloat(precio);
    this.descripcion = descripcion;
    this.fecha = fecha;
}
}

    const localStorageFacturas = JSON.parse(localStorage.getItem(USUADMIN));
    localStorageFacturas==null ? listaFacturas.innerHTML=`<h1>No hay facturas cargadas</h1>` : (verFacturas(localStorageFacturas), precioFacturas());

    //Funcion para AGREGAR la factura
function agregarFactura()
{
    card.innerHTML="";
    const Factura = new Facturacion(inputNumeroFactura.value,inputNumeroComprobante.value,inputCuit.value,inputEdificio.value,inputAdministracion.value,inputPrecio.value,inputDescripcion.value,inputFecha.value);
    const localStorageFacturas = JSON.parse(localStorage.getItem(USUADMIN));
    //Validaciones para permitir cargar la factura
    if(isNaN(inputNumeroFactura.value)===false && isNaN(inputNumeroComprobante.value) === false && isNaN(inputCuit.value) === false && inputCuit.value.length === 11 && isNaN(inputPrecio.value)===false){
        if(localStorageFacturas==null){
            localStorage.setItem(USUADMIN, JSON.stringify([Factura]));
            verFacturas([Factura]);

            
            Swal.fire({
                title: `Factura agregada`,
                icon: 'success',
                focusConfirm: true,
                confirmButtonText: `<i class="fa fa-thumbs-up"></i><strong>EXITO!</strong>`,
                timer: 1200
            }
            
            )

            precioFacturas();
        }
    
        else{
                //Que no se duplique el numero de factura
                ENCONTRADO = JSON.parse(localStorage.getItem(USUADMIN)).find(el => {
                    return el.facturaN === inputNumeroFactura.value;
                                    })  
            if(ENCONTRADO == undefined){
            console.log("funciona");
            card.innerHTML="";
            localStorageFacturas.push(Factura);
            localStorage.setItem(USUADMIN, JSON.stringify(localStorageFacturas));
            verFacturas(localStorageFacturas);
            Swal.fire({
                title: `Factura agregada`,
                icon: 'success',
                focusConfirm: true,
                confirmButtonText: `<i class="fa fa-thumbs-up"></i><strong>EXITO!</strong>`,
                timer: 1200
            }
            
            )
            precioFacturas();
        }
        else if (ENCONTRADO!==undefined){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `La factura n° ${inputNumeroFactura.value} ya fue cargada`
              })
        }
        else if(inputCuit.value.length <11){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `El CUIT debe tener 11 digitos`
              }) 
        }
        else if(isNaN(inputNumeroComprobante.value) !== false){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `Ingrese un valor válido`
              })
        }
    }
    }
    else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `Ingrese un valor válido`
              })
    }

}

btnAgregar.addEventListener(`click`,agregarFactura);

function precioFacturas(){
    const suma = JSON.parse(localStorage.getItem(USUADMIN)).reduce((acc,el)=> acc + el.precio,0)
    console.log(suma);
    let totalSumaFacturas = document.getElementById(`totalFacturas`);

    totalSumaFacturas.innerHTML=`<p>TOTAL: $${suma}</p>`;   
    return (suma);
}

// function eliminarFacturas()
// {
//     let indiceProducto =  JSON.parse(localStorage.getItem(USUADMIN)).map(elemento => elemento.facturaN).indexOf(inputNumeroFactura.value);
//     console.log(indiceProducto);
//     if(indiceProducto>-1){
//         JSON.parse(localStorage.getItem(USUADMIN)).splice(indiceProducto,1);
//     card.innerHTML="";
//     card.classList.add(`card`);
//     card.innerHTML = `<p>Factura eliminada con éxito</p>`;
//     document.body.append(card);
// }
// }

function eliminarFacturas(){
    Swal.fire({
        title: 'Estás seguro?',
        text: "No podrás deshacer los cambios",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si! Borrar'
      }).then((result) => {
        if (result.isConfirmed) {
            localStorage.clear();
          Swal.fire(
            'Facturas eliminadas!',
            'Las facturas han sido eliminadas',
            'Exito!'
          )
          listaFacturas.innerHTML=`<h1>No hay facturas cargadas</h1>`;
          totalFacturas.innerHTML = `<p>$0</p>`;
        }
      })
}

btnEliminar.addEventListener(`click`,()=>{
    eliminarFacturas();
})


function verFacturas(facturas){
    listaFacturas.innerHTML = "";
    facturas.forEach(factura => {
        let li = document.createElement(`li`);
        li.innerHTML = `<hr> Factura N°: ${factura.facturaN} - N° Comprobante: ${factura.comprobanteN} - CUIT: ${factura.cuit} - Dirección: ${factura.edificio} - Administración: ${factura.administracion} - Precio: $${factura.precio} - Descripción: ${factura.descripcion} - Fecha: ${factura.fecha}`;
        listaFacturas.appendChild(li);
    });
}

function verConsorcios(){
    listaConsorcios.innerHTML = "";
fetch('../data.json')
.then(info=>info.json())
.then(data=>data.forEach(consorcio =>{
    let li = document.createElement(`li`);
    li.innerHTML = `<tr><td>Dirección: ${consorcio.direccion}</td> - <td>CUIT: ${consorcio.CUIT}</td> - <td>Administración: ${consorcio.administracion}</td></tr>`;
    listaConsorcios.appendChild(li);
}));
}