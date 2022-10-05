function totalProductos (valorProducto1, valorProducto2, valorProducto3, valorProducto4, valorProducto5)
{
    const totalProductos = valorProducto1 + valorProducto2 + valorProducto3 + valorProducto4 + valorProducto5;
    alert('El valor total de los Productos es de $' + totalProductos);
}

let numero1 = Number (prompt ('Ingresar el valor del primer producto') );
let numero2 = Number (prompt ('Ingresar el valor del segundo producto') );
let numero3 = Number (prompt ('Ingresar el valor del tercer producto') );
let numero4 = Number (prompt ('Ingresar el valor del cuarto producto') );
let numero5 = Number (prompt ('Ingresar el valor del quinto producto') );

totalProductos (numero1, numero2, numero3, numero4, numero5);