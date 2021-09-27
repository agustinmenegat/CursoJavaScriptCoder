// ------------------------------------Aplico FUNCTION - SALUDAR-----------------------------------------------------------------------
let nombre = prompt("Coloque su nombre o apodo aquí").toUpperCase();

function saludar(nombre){
    return document.write(`Hola <b>${nombre}</b>, ¡Bienvenido a nuestro sitio! <br>`);
}
saludar(nombre);




//-------------------------------------- Aplico FOR y ARRAY ---------------------------------------------------------------------------
const precioCanchaPorHoraLP = [500,450,600]; 
let precioLaPlataPromedio = 0;
for(let i=0; i < precioCanchaPorHoraLP.length;i++){precioLaPlataPromedio = precioLaPlataPromedio + precioCanchaPorHoraLP[i];}
console.log(`El precio promedio de alquiler de cancha en La Plata es de $${precioLaPlataPromedio / precioCanchaPorHoraLP.length}`);

const precioCanchaPorHoraBerisso = [400,350]; 
let precioBerissoPromedio = 0;
for(let i=0; i < precioCanchaPorHoraBerisso.length;i++){precioBerissoPromedio = precioBerissoPromedio + precioCanchaPorHoraBerisso[i];}
console.log(`El precio promedio de alquiler de cancha en Berisso es de $${precioBerissoPromedio / precioCanchaPorHoraBerisso.length}`);

const precioCanchaPorHoraEnsenada = [500,450]; 
let precioEnsenadaPromedio = 0;
for(let i=0; i < precioCanchaPorHoraEnsenada.length;i++){precioEnsenadaPromedio = precioEnsenadaPromedio + precioCanchaPorHoraEnsenada[i];}
console.log(`El precio promedio de alquiler de cancha en Ensenada es de $${precioEnsenadaPromedio / precioCanchaPorHoraEnsenada.length}`);




// -------------------------------------Aplico IF, ELSE y ELSE IF - PARA SABER EN QUE LOCALIDAD QUIERE ALQUILAR------------------------
let localidad = prompt("¿En qué localidad querés reservar tu cancha?").toLocaleLowerCase();

if (localidad === "la plata"){
    document.write(`En La Plata, estas son las canchas más cercanas: La Cueva, Estacion Norte, El Parral <br>`);
    document.write(`El precio promedio de alquiler de cancha en La Plata es de $${precioLaPlataPromedio / precioCanchaPorHoraLP.length}`);
} else if (localidad === "berisso"){
    document.write(`En Berisso, estas son las canchas más cercanas: Berisso Padel, Viví Padel <br>`);
    document.write(`El precio promedio de alquiler de cancha en Berisso de $${precioBerissoPromedio / precioCanchaPorHoraBerisso.length}`);
}else if (localidad === "ensenada"){
    document.write(`En Ensenada, estas son las canchas más cercanas: El Dique, La U Padel <br>`);
    document.write(`El precio promedio de alquiler de cancha en Ensenada es de $${precioEnsenadaPromedio / precioCanchaPorHoraEnsenada.length}`);
}else{
    document.write(`Lo sentimos, no abarcamos dicha zona`);
}




//------------------------------------- Aplico FOR - Cantidad de reservas -------------------------------------------------------------
let i;
for (i = 0; i <= 5; i++){
    console.log(`Reserva n° ${i}`);
    if ( i == 5 ){
        console.log(`Felicitaciones! Tienes un turno gratis por haber reservado 5 veces en esta web!`);
    }else{
        console.log(`Tienes ${i} reservas. A la 5ta tendrás una gratis`);
    }
}




// ------------------------------Aplico Arrays - SUPERFICIES DISPONIBLES EN LA PAGINA -------------------------------------------------
let superficies = ["dura","alfombra","cesped","carpeta"]; console.log(superficies.length); console.log(superficies);
let primeraSuperficie = superficies[0]; console.log(primeraSuperficie);
superficies[3] = "cemento"; console.log(superficies);
superficies.push("vidriada"); console.log(superficies);



// -----------------------Ordenamos un Array de Objetos - Canchas ordenadas por precio, de menor a mayor  -----------------------------
 const canchasDePadel = [
    {cancha: "La Cueva", precioPorHora: "$500"},
    {cancha: "Estacion Norte", precioPorHora: "$450"},
    {cancha: "El Parral", precioPorHora: "$600"},
    {cancha: "Berisso Padel", precioPorHora: "$400"},
    {cancha: "Viví Padel", precioPorHora: "$350"},
    {cancha: "El Dique", precioPorHora: "$500"},
    {cancha: "La U Padel", precioPorHora: "$450"},
];

canchasDePadel.sort((a, b) => {

    if (a.precioPorHora < b.precioPorHora) {
        return -1;
    }
    else if (a.canprecioPorHoracha > b.precioPorHora) {
        return 1;
    }
    else {
        return 0;
    }
});

console.log(canchasDePadel);