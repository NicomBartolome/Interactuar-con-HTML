
let datos = document.getElementById("datos")
let datos1 = datos.getElementsByTagName('input')
let cantidadInput = datos1.length

let datoCte = document.getElementsByClassName('cte');
let datoPrecio = document.getElementsByClassName('precio');

const servicios = [];

class abonos{
    constructor(clientes,precio){
        this.clientes = parseInt(clientes);
        this.precio = precio;
    }
}

function AbonoPromedio (Abono4,precio4,Abono6,precio6,Abono8,precio8,Abono10,precio10,Abono20,precio20){

    Abono = parseInt(Math.max(Abono4,Abono6,Abono8,Abono10,Abono20))
    
    TotalCteIngresado = Abono4 + Abono6 + Abono8 + Abono10 + Abono20
    
    IngresoPromedio = ((precio4*Abono4)+(precio6*Abono6)+(precio8*Abono8)+(precio10*Abono10)+(precio20*Abono20))/5

    TotalFacturado = ((precio4*Abono4)+(precio6*Abono6)+(precio8*Abono8)+(precio10*Abono10)+(precio20*Abono20))
    
    switch(Abono){
        case Abono4:
            console.log("El abono mas vendido es el de 4 Mb");
            break;
        case Abono6:
            console.log("El abono mas vendido es el de 6 Mb");
            break;
        case Abono8:
            console.log("El abono mas vendido es el de 8 Mb");
            break;
        case Abono10:
            console.log("El abono mas vendido es el de 10 Mb");
            break;
        case Abono20:
            console.log("El abono mas vendido es el de 20 Mb");
            break;
        default:
            console.log("No se pudo determinar cual es el abono mas vendido");
            break;          
    }
}

function ejecutarPrograma(){

for(let i = 0; i < cantidadInput; i++){
    console.log(datos1[i].value);
    cte = datos1[i].value;
    i++;
    precio = datos1[i].value;
    console.log(datos1[i].value);
    console.log(i);
    servicios.push(new abonos(cte,precio));
    
} 

let cte4 = servicios[0].clientes;
let precio4 = servicios[0].precio;

let cte6 = servicios[1].clientes;
let precio6 = servicios[1].precio;

let cte8 = servicios[2].clientes;
let precio8 = servicios[2].precio;

let cte10 = servicios[3].clientes;
let precio10 = servicios[3].precio;

let cte20 = servicios[4].clientes;
let precio20 = servicios[4].precio;

AbonoPromedio(cte4,precio4,cte6,precio6,cte8,precio8,cte10,precio10,cte20,precio20)

let CtesIngresados = document.createElement('p');
CtesIngresados.innerHTML = "La cantidad de clientes ingresados es de " + TotalCteIngresado;
document.body.append(CtesIngresados);

let TFac = document.createElement('p');
TFac.innerHTML = "El total facturado es de $" + TotalFacturado + ".-";
document.body.append(TFac);

let Iprom = document.createElement('p');
Iprom.innerHTML = "El ingreso por cliente promedio es de $" + IngresoPromedio;
document.body.append(Iprom);

}


let boton = document.getElementById('ejecutar');
boton.addEventListener('click',ejecutarPrograma);