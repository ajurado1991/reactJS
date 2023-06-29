const misProductos = [
    {id:"1", nombre: "Silla Cleotilde", precio: 15000, img: "../public/images/shop1.png", idCat: "2"},
    {id:"2", nombre: "Poltrona Paris", precio: 23000, img: "../public/images/shop2.png", idCat: "3"},
    {id:"3", nombre: "Poltrona Denver", precio: 25350, img: "../public/images/shop3.png", idCat: "3"},
    {id:"4", nombre: "Silla Royale", precio: 19000, img: "../public/images/shop4.png", idCat: "2"},
    {id:"5", nombre: "Mesa de centro Daro", precio: 29000, img: "../public/images/shop5.png", idCat: "4"},
    {id:"6", nombre: "Mesa de centro Ovali", precio: 25500, img: "../public/images/shop6.png", idCat: "4"},
    {id:"7", nombre: "Mesa lateral Ivy", precio: 9000, img: "../public/images/shop7.png", idCat: "4"},
    {id:"8", nombre: "Lampara Hermenegilda", precio: 7250, img: "../public/images/shop8.png", idCat: "5"},
    {id:"9", nombre: "Poltrona California", precio: 30000, img: "../public/images/shop9.png", idCat: "3"}
]

export const getProductos = () => {
    return new Promise ((res) => {
        setTimeout( () => {
            res (misProductos)
        }, 100)
    })
}

export const getUnProducto = (id) => {
    return new Promise ( resolve => {
        setTimeout( () => {
            const producto = misProductos.find(prod => prod.id === id);
            resolve(producto);
        })
    }, 100)
}

export const getProductosPorCategoria = (idCategoria) => {

    return new Promise (resolve => {
        setTimeout( () => {
            const productosCategoria = misProductos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100)

    })

}