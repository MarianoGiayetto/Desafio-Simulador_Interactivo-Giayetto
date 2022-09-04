//Simulador de compra de 3 productos para limpieza de autos

//Declaro las variables
let precioProducto1 = 5000;
let precioProducto2 = 10000;
let precioProducto3 = 1000;
let nombreProducto1 = "Shampoo NXT";
let nombreProducto2 = "Cera California Gold";
let nombreProducto3 = "Microfibra Waffle";
let total = 0;
let cantidadProducto1= 0;
let cantidadProducto2= 0;
let cantidadProducto3= 0;

//Declaro función que va a sumar el precio del producto seleccionado al costo total
function sumaTotal(precioProducto,costoTotal){
   return precioProducto+costoTotal;
}

//Declaro función que va a restar el precio del producto seleccionado del costo total
function restaTotal(costoTotal,precioProducto){
    return costoTotal-precioProducto;
}

//Inicio selector de opciones
let seleccion = prompt("Bienvenidos a Detail Garage, elija el producto que desee comprar: \n 1 - Shampoo NXT - Precio: $5000 \n 2 - Cera California Gold - Precio: $10000 \n 3 - Microfibra Waffle - Precio: $1000 \n 4 - Finalizar compra");

//Bucle que no finaliza hasta que se elije la opción 4 de finalizar
while (seleccion != "4") {
    switch (seleccion){
        //Se selecciona el producto 1, se suma su costo al monto total y se incrementa la cantidad
        case "1":
            alert("Producto elegido: "+nombreProducto1+": $"+ precioProducto1 +"\n"+ "Total acumulado: " +"$"+ sumaTotal(precioProducto1,total))
            total += precioProducto1;
            cantidadProducto1++
            break;
        //Se selecciona el producto 2, se suma su costo al monto total y se incrementa la cantidad   
        case "2":
            alert("Producto elegido: "+nombreProducto2+": $"+ precioProducto2 +"\n"+ "Total acumulado: "+"$"+ sumaTotal(precioProducto2,total))
            total += precioProducto2;
            cantidadProducto2++;
            break;
        //Se selecciona el producto 3, se suma su costo al monto total y se incrementa la cantidad
        case "3":
            alert("Producto elegido: "+nombreProducto3+": $"+ precioProducto3 +"\n"+ "Total acumulado: " +"$"+ sumaTotal(precioProducto3,total))
            total += precioProducto3;
            cantidadProducto3++;
            break;
        //Selector para eliminar productos de la compra
        case "5":
            seleccion = prompt("¿Qué producto desea eliminar de su carro de compras? Seleccione: \n 6 - Shampoo NXT - Precio: $5000 \n 7 - Cera California Gold - Precio: $10000 \n 8 - Microfibra Waffle - Precio: $1000")
            switch(seleccion){
                case "6":
                    //Condicional que determina si se puede eliminar o no el producto1 del carrito
                    if (cantidadProducto1 <= 0) {
                        alert(`No existe en su carrito el producto: ${nombreProducto1}, no hay nada para eliminar`)
                    //Si alguna vez se ha elegido el producto1, se elimina su costo del precio total y se decrementa su cantidad  
                    }else{
                        alert("Producto eliminado: "+nombreProducto1+": $"+ precioProducto1 +"\n"+ "Total acumulado: " +"$"+ restaTotal(total,precioProducto1))
                        total -= precioProducto1;
                        cantidadProducto1--;
                        break;                        
                    }
                    break;
                case "7":
                    //Condicional que determina si se puede eliminar o no el producto3 del carrito
                    if (cantidadProducto2 <= 0) {
                        alert(`No existe en su carrito el producto: ${nombreProducto2}, no hay nada para eliminar`)
                    //Si alguna vez se ha elegido el producto2, se elimina su costo del precio total y se decrementa su cantidad   
                    }else{
                        alert("Producto eliminado: "+nombreProducto2+": $"+ precioProducto2 +"\n"+ "Total acumulado: " +"$"+ restaTotal(total,precioProducto2))
                        total -= precioProducto2;
                        cantidadProducto2--;
                        break;
                    }
                    break;
                case "8":
                    //Condicional que determina si se puede eliminar o no el producto3 del carrito
                    if (cantidadProducto3 <= 0) {
                        alert(`No existe en su carrito el producto: ${nombreProducto3}, no hay nada para eliminar`)
                    //Si alguna vez se ha elegido el producto3, se elimina su costo del precio total y se decrementa su cantidad      
                    }else{                    
                        alert("Producto eliminado: "+nombreProducto3+": $"+ precioProducto3 +"\n"+ "Total acumulado: " +"$"+ restaTotal(total,precioProducto3))
                        total -= precioProducto3;
                        cantidadProducto3--;
                        break;
                    }
                    break;
                default:
                    break;
        }
        default:
            break;
    }    
    seleccion = prompt("¿Qué otra acción desea realizar?, seleccione si quiere comprar: \n 1 - Shampoo NXT - Precio: $5000 \n 2 - Cera California Gold - Precio: $10000 \n 3 - Microfibra Waffle - Precio: $1000 \n 4 - Elija esta opción para finalizar compra \n 5 - Elija esta opción si quiere eliminar algún producto de su compra")
}
//Condicional que verifica si la compra es de monto total cero o no
if (total == 0){ 
   alert("Lo esperamos para su próxima compra. Muchas gracias.") 
} else{
    alert("Muchas gracias por su compra, el monto total de su compra es de: "+"$"+ total)
}