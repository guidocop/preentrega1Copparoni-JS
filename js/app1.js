alert ('Bienvenidxs a la tienda, presione aceptar para continuar');

let menuOpciones;
const OPCIONUNO = 1;
const OPCIONDOS = 2;
const OPCIONTRES = 3;


let totalCarrito = 0;
let precio;
let cantidad;
let continuar;
let masItems;


function acumuladoCarrito (total, precio, cantidad) {
    return totalCarrito + (precio*cantidad);
}
function precioCompraItem(precio, cantidad) {
    return precio*cantidad;
}

function vaciarCarrito () {
    return 0;
}


do {menuOpciones = parseInt(prompt('Seleccione la opción deseada: ' + '\n' +
'1 - Agregar items al carrito de compras' + '\n' + 
'2 - Mostrar el total acumulado' + '\n' +
'3 - Vaciar el carrito'));

switch (menuOpciones){
    case OPCIONUNO:
        do {cantidad = parseInt(prompt('Seleccione la cantidad de items que desea incorporar al carrito'));
        while (cantidad <= 0) {
            cantidad = parseInt(prompt('Entrada inválida, por favor vuelva a ingresar un valor'));
        }
        precio = parseFloat(prompt('Seleccione el precio del item'));
        while (precio <= 0) {
            precio = parseFloat(prompt('Debe ingresar un precio válido'));
        }
        console.log('El precio por la cantidad de items igual a ' + cantidad + ' es de: ' + precioCompraItem(precio, cantidad) + ' pesos');
        totalCarrito = acumuladoCarrito(totalCarrito, precio, cantidad);
        masItems = prompt('Desea agregar más items al carrito? si/no');
        while ((masItems !== 'si') && (masItems !== 'no')) {
        masItems = prompt('Entrada inválida. Por favor ingrese "si" para agregar otro item, de lo contrario ingrese"no"');    
        }
        }while (masItems == 'si');
        break; 
    case OPCIONDOS:
        alert('El monto total acumulado en el carrito es de: ' + totalCarrito + ' pesos');
        break;
    case OPCIONTRES:
        totalCarrito = vaciarCarrito ();
        alert('El carrito contiene ahora ' + vaciarCarrito() + ' items');
        break;
        default: 
            alert('Debe seleccionar una opción dentro del menú');        
}
continuar = prompt('Desea volver al menu de opciones?' + '\n' +
'"si" para volver al menú' + '\n' + 
'"no" para abandonar la tienda');
while ((continuar !== 'no') && (continuar !== 'si')) {
    continuar = prompt('Entrada inválida. Por favor ingrese "si" para continuar o "no" para salir') ;
}
}while (continuar == 'si');