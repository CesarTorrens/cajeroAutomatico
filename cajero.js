"use strict"
class Billete
{
    constructor(v, c)
    {
        this.valor =  v;
        this.cantidad = c;
    }
}

function entregarDinero()
{
    let d = document.getElementById("Dinero");
    dinero = parseInt(d.value)


    for(let bi of caja)
    {
        if(dinero > 0)
        {
            div = Math.floor(dinero / bi.valor);
            console.log(div);
            if(div > bi.cantidad)
            {
                papeles = bi.cantidad;
            }
            else
            {
                papeles = div;
            }
            entregado.push(new Billete(bi.valor, papeles));
            dinero = dinero - (bi.valor * papeles);
        }   
    }

    if(dinero > 0)
    {
        r.innerHTML = "soy un cajero pobre!";
    }
    else
    {
        for(let e of entregado)
        {
            if(e.cantidad > 0)
            {
                r.innerHTML = r.innerHTML + e.cantidad + " billetes de $" + e.valor + "<br  />";
            }
        }
    }

    

}


let caja = [];
let entregado = [];

caja.push(new Billete(50, 10));
caja.push(new Billete(20, 30));
caja.push(new Billete(10, 10));

let dinero = 0;
let div = 0;
let papeles = 0;

const r = document.getElementById("resultado");
const b = document.getElementById("button");
b.addEventListener("click", entregarDinero);
