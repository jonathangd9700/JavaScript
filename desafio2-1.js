let nombreUsuario;
let producto1 = "Pc Gamer";
let producto2 = "Smart TV Led 4K Curva 80\"";
let producto3 = "Lavarropas Samsung" ;
let producto4 = "IPAD última generación";
let precio1 = 120000;
let precio2 = 950000;
let precio3 = 45000;
let precio4 = 100000;

do {
    nombreUsuario = prompt("Ingrese su nombre por favor");
} while (nombreUsuario.indexOf("")!=-1 && isNaN(nombreUsuario) === false );
alert("Hola "+nombreUsuario);

const Productos = () =>{
    let seleccion;
    while(seleccion!=1 && seleccion!=2 && seleccion!=3 && seleccion!=4){
        seleccion = parseInt(prompt("Elegi un producto: \n1)"+producto1+" con un precio de $"+precio1+"\n2)"+producto2+" con un precio de $"+precio2+"\n3)"+producto3+" con un precio de $"+precio3+"\n4)"+producto4+" con un precio de $"+precio4+"\nPara seleccionar ingrese el numero."));
        if(seleccion!=1 && seleccion!=2 && seleccion!=3 && seleccion!=4){
            alert(nombreUsuario+" por favor ingresá un valor válido.");
        }
    }
    return seleccion;
} 
function Pago(){
    let formaPago;
    while(formaPago!=1 && formaPago!=2 && formaPago!=3 && formaPago!=4){
    formaPago = parseInt(prompt("De que forma desea pagar?\n1) Efectivo con 20% descuento\n2) Débito con 10% descuento\n3) 3 cuotas sin interés\n4) 6 cuotas con interés del 45%"));
    if(formaPago!=1 && formaPago!=2 && formaPago!=3 && formaPago!=4){
        alert(nombreUsuario+" por favor ingresá un valor válido.")
    }
    }
    return formaPago;
}
let productoSeleccionado = Productos();
let numeroAleatorio = (Math.round(Math.random()*10));
let seleccionPago = Pago();
const CalculoPago = (producto) =>{
    switch (producto) {
        case 1:
            switch (seleccionPago) {
                case 1:
                    alert(nombreUsuario+" deberás pagar $"+(precio1*0.8));
                    break;
                case 2:
                    alert(nombreUsuario+" deberás pagar $"+(precio1*0.9));
                    break;
                case 3:
                    alert(nombreUsuario+" deberás pagar 3 cuotas de: $"+(precio1/3));
                    break;
                case 4:
                    alert(nombreUsuario+" deberás pagar 6 cuotas de: $"+(precio1*1.45)/6);
                    break;
            }
            break;
        case 2:
            switch (seleccionPago) {
                case 1:
                    alert(nombreUsuario+" deberás pagar $"+(precio2*0.8));
                    break;
                case 2:
                    alert(nombreUsuario+" deberás pagar $"+(precio2*0.9));
                    break;
                case 3:
                    alert(nombreUsuario+" deberás pagar 3 cuotas de: $"+(precio2/3));
                    break;
                case 4:
                    alert(nombreUsuario+" deberás pagar 6 cuotas de: $"+(precio2*1.45)/6);
                    break;
            }
            break;
            case 3:
                switch (seleccionPago) {
                    case 1:
                        alert(nombreUsuario+" deberás pagar $"+(precio3*0.8));
                        break;
                    case 2:
                        alert(nombreUsuario+" deberás pagar $"+(precio3*0.9));
                        break;
                    case 3:
                        alert(nombreUsuario+" deberás pagar 3 cuotas de: $"+(precio3/3));
                        break;
                    case 4:
                        alert(nombreUsuario+" deberás pagar 6 cuotas de: $"+(precio3*1.45)/6);
                        break;
                }
                break;
                case 4:
                    switch (seleccionPago) {
                        case 1:
                            alert(nombreUsuario+" deberás pagar $"+(precio4*0.8));
                            break;
                        case 2:
                            alert(nombreUsuario+" deberás pagar $"+(precio4*0.9));
                            break;
                        case 3:
                            alert(nombreUsuario+" deberás pagar 3 cuotas de: $"+(precio4/3));
                            break;
                        case 4:
                            alert(nombreUsuario+" deberás pagar 6 cuotas de: $"+(precio4*1.45)/6);
                            break;
                    }
                    break;                
    }
}

const Sorteo = ()=>{
    let adivinaste;
    let numeroIngresado;
    for(let i = 3; i >=1; i--){
        numeroIngresado = parseInt(Math.round(prompt("Ingrese un numero del 0 al 10, capaz tenes suerte.\nTenés "+i+" intentos")));
        console.log(numeroAleatorio);
        if(numeroIngresado==numeroAleatorio){
            adivinaste = true;
            break;
        }
        else{
            adivinaste = false;
        }
        if(numeroIngresado<0 || numeroIngresado>10 || isNaN(numeroIngresado)==true){
            alert("Ingresa un valor valido. Perdiste un intento")
        }
    }

    return adivinaste;
}
let participar;
do{
    participar = prompt("Queres participar por el producto seleccionado?\n S para continuar - N para finalizar").toLowerCase();
    if (participar!="s" && participar!="n") {
        alert(nombreUsuario+" por favor ingresá un valor válido.")
    }
}while(participar!="s" && participar!="n");


if(participar==="s"){
    let adivinarSorteo = Sorteo();
switch (productoSeleccionado) {
    case 1:
        if(adivinarSorteo==true){
            alert("Felicidades te ganaste una "+producto1);
            break;
        }
        else{
            CalculoPago(productoSeleccionado);
            break;
        }
    case 2:
        if(adivinarSorteo==true){
            alert("Felicidades te ganaste una "+producto2);
            break;
        }
        else{
            CalculoPago(productoSeleccionado);
            break;
        }
    case 3:
        if(adivinarSorteo==true){
            alert("Felicidades te ganaste una "+producto3);
            break;
        }
        else{
            CalculoPago(productoSeleccionado);
            break;
        }
    case 4:
        if(adivinarSorteo==true){
            alert("Felicidades te ganaste una "+producto4);
            break;
        }
        else{
            CalculoPago(productoSeleccionado);
            break;
        }
}
}
else if(participar==="n"){
    alert("Perdiste tu oportunidad de llevartelo gratis. Ahora vas a tener que pagar.")
    CalculoPago(productoSeleccionado);
}