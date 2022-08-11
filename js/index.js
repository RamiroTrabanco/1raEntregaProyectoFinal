let verdadero = true
let falso = false
let total = 0

const productos = []
const carrito = []

class Productos {
    constructor (nombre, valor, stock, id){
        this.nombre=nombre
        this.valor=valor
        this.stock=stock
        this.id=id
    }
}

productos.push(new Productos("3050Palit", 70000, 50, 1432))
productos.push(new Productos("3050Asus", 75000, 50, 1430))
productos.push(new Productos("3060Palit", 90000, 50, 1433))
productos.push(new Productos("3070tiGB", 150000, 50, 1600))
productos.push(new Productos("3070tiPalit", 170000, 50, 1601))


while (verdadero) {
    if(confirm("Desea agregar productos al carrito?")) {
        calcularTotal()
    } else {
        break;
    }
}

function calcularTotal() {
    let pedido = prompt("Que producto desea adquirir?")

    const busqueda = productos.find((el) => el.nombre === pedido)

    if (busqueda) {
        total += busqueda.valor
    }
    
    console.log("El total parcial a pagar es $", total)

    let confirmacion = confirm("Desea agregar más productos al carrito?")

    if (confirmacion) {
        calcularTotal()
    } else {
        console.log("El total a pagar es $", total)

    }
}

function buscador() {
    let buscar = prompt("Ingrese el producto que esta buscando:")
    const resultadoBusqueda = productos.filter(elemento => elemento.nombre.includes(buscar))
    console.log(resultadoBusqueda)
}