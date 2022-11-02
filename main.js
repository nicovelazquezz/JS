const productos =  [
    {nombre:'Samsung S22', precio:1000, origen: "celular"},
    {nombre:'iPhone 13 Pro Max', precio:1199, origen: "celular"},
    {nombre:'iPhone X', precio:600, origen: "celular"},
    {nombre:'Notebook Gamer AORUS', precio:3300, origen: "notebook"},
    {nombre:'Notebook Gamer Acer NITRO 5', precio:1990, origen: "notebook"},
    {nombre:'Notebook Gamer Asus TUF FX516', precio:2500, origen: "notebook"}
]

let categoriaProducto=prompt('Elegí el tipo del producto que querés comprar: \n1 - Celular \n2 - Notebook');


switch (categoriaProducto) {
    case "1":
        categoria = productos.filter(producto => producto.origen === "celular");
        categoria.forEach (productos => console.log(`El producto ${productos.nombre} tiene un precio de $${productos.precio}`));
        itemSelect=prompt(`Elegí un producto para calcular el IVA: \n1 - ${categoria[0].nombre} - $${categoria[0].precio} \n2 - ${categoria[1].nombre} - $${categoria[1].precio} \n3 - ${categoria[2].nombre} - $${categoria[2].precio}`);        
        switch (itemSelect) {
            case "1":
                alert("El precio con iva es $" + categoria[0].precio*1.21);                
                break;
            case "2":
                alert("El precio con iva es $" + categoria[1].precio*1.21);
                break;
            case "3":
                alert("El precio con iva es $" + categoria[2].precio*1.21);
                break;        
            default:
                alert ("No ingresaste una opción válida."); 
            };
    break;
    case "2":        
        categoria = productos.filter(producto => producto.origen === "notebook");
        categoria.forEach (productos => console.log(`El producto ${productos.nombre} tiene un precio de $${productos.precio}`));        
        itemSelect=prompt(`Elegí un producto para calcular el IVA: \n1 - ${categoria[0].nombre} - $${categoria[0].precio} \n2 - ${categoria[1].nombre} - $${categoria[1].precio} \n3 - ${categoria[2].nombre} - $${categoria[2].precio}`);        
        switch (itemSelect) {
            case "1":
                alert("El precio con iva es $" + categoria[0].precio*1.21);                
                break;
            case "2":
                alert("El precio con iva es $" + categoria[1].precio*1.21);
                break;
            case "3":
                alert("El precio con iva es $" + categoria[2].precio*1.21);
                break;    
            default:
                alert ("No ingresaste una opción válida.");     
            };
break;
default:
alert ("No ingresaste una opción válida."); 
}

