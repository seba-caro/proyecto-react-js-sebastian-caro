const products = [
    {
        id:'1',
        name:'Turron Aleman',
        price: 1000,
        img:'https://i.ytimg.com/vi/zqMjtvim_60/maxresdefault.jpg ',
        stock: 30,
        description: ' El turrón es una receta típica de la pastelería tradicional que data del año 1.700. En su comienzo, este alimento estuvo hecho con miel, nueces tostadas (aunque también pueden ser almendras, pistachos, avellanas) y frutas secas. Sin embargo, fue mutando, hasta convertirse en un turrón estilo alemán con galletitas.',
        category: 'postres'
    },
    {
        id:'2',
        name:'Foccacia',
        price: 1000,
        img:'https://media.a24.com/p/1e734d9a5b41e13eaf25e1fc0603f2cf/adjuntos/296/imagenes/009/144/0009144564/1200x675/smart/imagepng.png',
        stock: 10,
        category: 'pan',
        description: 'Se trata de un plato tradicional de la cocina italiana muy relacionado con la popular pizza. La focaccia es un producto horneado elaborado con una masa simple de harina, aceite y agua. En Italia, la focaccia se usa como una deliciosa alternativa al pan y se puede comer a cualquier hora del día o de la noche, con las combinaciones más extravagantes.'
    },
    {
        id:'3',
        name:'Croissant',
        price: 500,
        img:'https://static.vecteezy.com/system/resources/previews/017/340/374/original/fresh-cooked-yellow-croissant-png.png',
        category: 'pan',
        stock: 30,
        description: ' Croissant es un bollo dulce con forma de media luna, elaborado con masa de pan o pasta de hojaldre. En un primer paso se mezclan el azúcar, harina, aditivo y sal. Una vez mezclado en la fase de pesaje y dosificación se añade el agua y la levadura. La siguiente fase es la de laminado de los ingredientes donde se va añadiendo en cada capa la margarina. Tras esto se pasa a la fase de troquelado y formación para después congelar. Luego se envasa el producto y se traslada a las cámaras de producto finalizado y de ahí se distribuyen a los puntos de venta donde una vez descongelado se pasara a hornear para finalizar el proceso. '
    },
    {
        id:'4',
        name:'Medialunas x12',
        price: 2500,
        img:'https://platosargentinos.com/wp-content/uploads/2022/09/Receta-de-medialunas-caseras-de-manteca-argentinas.png',
        category: 'pan',
        stock: 15,
        description: ' Las medialunas son ampliamente conocidas ya que son el desayuno o merienda ideal del día a día en Argentina. Son pequeños triángulos de harina y manteca cubiertos de almíbar que pueden comerse solas o acompañadas con café. '
    },
    {
        id:'5',
        name:' Pan de Molde',
        price: 1000,
        img:'https://platosargentinos.com/wp-content/uploads/2021/01/Pan-de-molde.png',
        category: 'pan',
        stock: 10,
        description: ' El pan de molde (o pan sandwich) es aquel pan cuya masa se enriquece con mantequilla o leche y se hornea dentro de un molde o lata. Gracias a esto, el pan resultante tiene una corteza blanda y dorada, y una miga suave y esponjosa. Se suele vender rebanado, y se utiliza para elaborar sándwiches principalmente '
    },
    {
        id:'6',
        name:'Pan de Campo',
        price: 800,
        img:'http://www.sanbrandan.com/fotos/catalogo/detalle/20150518_193244_maiz-m.png',
        category: 'pan',
        stock: 15,
        description: ' El pan rústico o de campo es aquel pan que sigue procedimientos artesanales tanto en el cultivo de trigo como en la preparación del pan, por lo que se considera que tiene unas propiedades organolépticas excepcionales. Los panes rústicos suelen ser hogazas redondas de gran tamaño, corteza gruesa y tostada, y miga esponjosa y alveolada. '
    },
    {
        id:'7',
        name:'Prepizza Tomate',
        price: 500,
        img:'https://panificadosmana.com.ar/wp-content/uploads/2021/07/Degustando-PrePizza-1.png',
        category: 'pan',
        stock: 30,
        description: ' Masa plana ligeramente cocida, cubierta generalmente de tomate, que se usa como base para preparar una pizza. '
    },
    {
        id:'8',
        name:'Prepizza Cebolla',
        price: 500,
        img:'https://d22fxaf9t8d39k.cloudfront.net/034c3a8037ef890055ca49435d66aa2039640130d02b43a6406ccd4b9155caf0111915.png',
        category: 'pan',
        stock: 30,
        description: ' Masa plana ligeramente cocida, cubierta de cebolla, que se usa como base para preparar una pizza con sabor a cebolla. '
    },
    {
        id:'9',
        name:'Harina 0000',
        price: 5000,
        img:'https://www.pngall.com/wp-content/uploads/8/Flour-PNG-Clipart.png',
        category: 'otrosproductos',
        stock: 20,
        description: ' Bolsa de harina x 50K. '
    },
    {
        id:'10',
        name:'Oreo',
        price: 1000,
        img:'https://d3ugyf2ht6aenh.cloudfront.net/stores/593/476/products/postre-oreo1-baebe795d818cd332016267243846221-640-0.png',
        category: 'postres',
        stock: 15,
        description: ' Postre elaborado con una crema suave y consistente después del refrigerado. Sabor oreo '
    },
    {
        id:'11',
        name:'Torta Helada',
        price: 5000,
        img:'https://www.heladeriacyrano.com.ar/images/products/tortas-heladas/frutos-rojos.png',
        category: 'postres',
        stock: 1,
        description: ' Tortas Heladas realizadas a pedido. Sabores que puede tener: Frutilla, Chocolate, Dulce de Leche y Vainilla.  '
    },
    {
        id:'12',
        name:'Bolsa Pan Rallado',
        price: 4000,
        img:'https://res.cloudinary.com/estebandiaz/image/upload/f_auto/cocinario-beta-foods/5f22b5606eb30acead5eb6c6.png',
        category: 'otrosproductos',
        stock: 15,
        description: ' Bolsa de Pan rallado x 30K.  '
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

export const getProductsByCategory = (categoryId) =>{ 
    return new Promise ((resolve) => { 
        setTimeout (() => { 
            const filteredProducts = products.filter ((product) => product.category === categoryId); 
            resolve(filteredProducts); 
        }, 500); 
    }) 
} 