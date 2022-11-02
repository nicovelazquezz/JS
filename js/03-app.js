let opcion = prompt("Elegí la temperatura a convertir: \n1- Celsius \n2 - Farenheit \n3 - Kelvin");
let Celsius = 0;
let Farenheit = 32;
let Kelvin = 273.15;

switch (opcion) {
    case "1":
        alert ("Elegiste grados Celsius.")
        break;
    case "2":
        alert ("Elegiste grados Farenheit.")
        break;
    case "3":
        alert ("Elegiste grados Kelvin.")
        break;
    default:
        alert ("No ingresaste una opción válida.")  
}

let aConvertir=parseInt(prompt("Elegí la temperatura a la que querés llegar: \n1- Celsius \n2 - Farenheit \n3 - Kelvin"));

switch (aConvertir) {
    case 1:
        alert ("Elegiste grados Celsius.")
        break;
    case 2:
        alert ("Elegiste grados Farenheit.")
        break;
    case 3:
        alert ("Elegiste grados Kelvin.")
        break;
    default:
        alert ("No ingresaste una opción válida.")  
}

let grados= parseInt(prompt ("Ingresá los grados a convertir"));

if (opcion==1 && aConvertir==2) {
    alert("La temperatura de grados Celsius a Farenheit es de " + (((grados*9)/5)+Farenheit))
}
else if (opcion==1 && aConvertir==3) {
    alert("La temperatura en grados Celsius a Kelvin es de " + (grados+Kelvin))
}
else if (opcion==2 && aConvertir==1) {
    alert("La temperatura en grados Farenheit a Celsius es de " +(((grados-32)*5)/9))    
}
else if (opcion==2 && aConvertir==3) {
    alert("La temperatura en grados Kelvin a Farenheit es de " + (((grados-32)*(5/9)+273.15)))
}
else if (opcion==3 && aConvertir==1) {
    alert("La temperatura en grados Kelvin es de " + (grados-Kelvin))
}
else if (opcion==3 && aConvertir==2) {
    alert("La temperatura en grados Kelvin es de " + ((((grados-Kelvin)*9)/5)+32))
} 
else {alert("Error, no elegiste ni 1, 2 o 3")};


