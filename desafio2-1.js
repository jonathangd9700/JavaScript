const USUADMIN = `Joni`;
const PWADMIN = `123JGD`;
let usuarioIngresado;
let pwIngresada;
let valorAdmin = false;
let productos = [];
let opcionElegida = "";
let productosEliminados = [];

function agregarProducto(){
    let productoIngresado = prompt(`Por favor ingrese un producto. Para finalizar ingrese "n"`);
    if(productoIngresado.toLowerCase()!="n"){
    productos.push(productoIngresado);
    alert(`Usted agregó ${productoIngresado}`)
}
    while(productoIngresado.toLowerCase()!="n"){
    productoIngresado = prompt(`Por favor ingrese un producto. Para finalizar ingrese "n"`);
    if(productoIngresado.toLowerCase()!="n"){
        productos.push(productoIngresado);
        alert(`Usted agregó ${productoIngresado}`) 
    }
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
            alert(productos);
            let productoElegido = prompt("Ingrese el producto a eliminar");
            let indiceProducto =  productos.indexOf(productoElegido);
            if(productos.indexOf(productoElegido)>-1){
            productosEliminados.push(productoElegido);
            productos.splice(indiceProducto,1);
            alert(productos)}
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
            console.log(productos);
            break;
        case "2":
            console.log(productosEliminados);
        default:
            break;
    }
}
while(opcionElegida.toLowerCase()!=`esc`){
if(valorAdmin==true){
    alert(`Bienvenido de nuevo "${USUADMIN}". Que deseas hacer hoy?`)
    opcionElegida = prompt(`1)Cargar productos\n2)Modificar productos\n3)Eliminar productos\n4)Ver lista de productos\nPara finalizar escriba "ESC"`)
    console.log(opcionElegida);
    switch (opcionElegida) {
        case "1":
        agregarProducto();
        console.log(productos);
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
}