const products = [
    {
        id: '1',
        name:'Turron Aleman',
        price: 1000,
        img:'https://i.ytimg.com/vi/zqMjtvim_60/maxresdefault.jpg ',
        stock: 70,
        description: ' El turrón es una receta típica de la pastelería tradicional que data del año 1.700. En su comienzo, este alimento estuvo hecho con miel, nueces tostadas (aunque también pueden ser almendras, pistachos, avellanas) y frutas secas. Sin embargo, fue mutando, hasta convertirse en un turrón estilo alemán con galletitas.'
    },
    {
        id: '2',
        name:'Foccacia',
        price: 1500,
        img:'https://w7.pngwing.com/pngs/318/957/png-transparent-sicilian-pizza-focaccia-panificio-pasticceria-tossini-tart-pizza-baked-goods-food-cheese.png',
        stock: 10,
        description: 'Se trata de un plato tradicional de la cocina italiana muy relacionado con la popular pizza. La focaccia es un producto horneado elaborado con una masa simple de harina, aceite y agua. En Italia, la focaccia se usa como una deliciosa alternativa al pan y se puede comer a cualquier hora del día o de la noche, con las combinaciones más extravagantes.'
    },
    {
        id: '3',
        name:'Croissant',
        price: 500,
        img:'https://static.vecteezy.com/system/resources/previews/017/340/374/original/fresh-cooked-yellow-croissant-png.png',
        stock: 30,
        description: ' Croissant es un bollo dulce con forma de media luna, elaborado con masa de pan o pasta de hojaldre. En un primer paso se mezclan el azúcar, harina, aditivo y sal. Una vez mezclado en la fase de pesaje y dosificación se añade el agua y la levadura. La siguiente fase es la de laminado de los ingredientes donde se va añadiendo en cada capa la margarina. Tras esto se pasa a la fase de troquelado y formación para después congelar. Luego se envasa el producto y se traslada a las cámaras de producto finalizado y de ahí se distribuyen a los puntos de venta donde una vez descongelado se pasara a hornear para finalizar el proceso. '
    }

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(products)
        }, 500 )
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() =>{
            resolve(products.find (prod => prod.id === productId))
        }, 500 )
    })
}