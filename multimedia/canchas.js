//variables
const canchas = [{
        id: 1,
        name: "La Cueva",
        img: 'multimedia/img/lacueva.jpg'
    },
    {
        id: 2,
        name: "Estación Norte",
        img: 'multimedia/img/estacionnorte.jpg'
    },
    {
        id: 3,
        name: "El Parral",
        img: 'multimedia/img/elparral.jpg'
    },
    {
        id: 4,
        name: "Berisso Padel",
        img: 'multimedia/img/berissopadel.jpg'
    },
    {
        id: 5,
        name: "Viví Padel",
        img: 'multimedia/img/vivipadel.jpg'
    },
    {
        id: 6,
        name: "El Dique",
        img: 'multimedia/img/eldique.jpg'
    },
    {
        id: 7,
        name: "El Dragón Padel",
        img: 'https://http2.mlstatic.com/D_NQ_NP_951287-MLA45337018085_032021-V.jpg'
    },
    {
        id: 8,
        name: "El Bloque",
        img: 'https://www.quepasaweb.com.ar/wp-content/uploads/2017/12/cancha-padel.jpg'
    },
    {
        id: 9,
        name: "Nito Brea",
        img: 'https://lh3.googleusercontent.com/proxy/x1sYqlXtOGLnlKYrwFuzicmJwOCks1L09wVsTEB2mHhd6EB-v4NQzdXyZtS8Myh9bLuRKkAii8ESG-ZtnTVuTmOG7pLnTTSC9NIfbjb6Okvw'
    },
];

let canchasFavoritas = [];

const canchasContainer = document.querySelector('.canchasContainer');
const favoritasContainer = document.querySelector('.containerFavoritas');



/* document.addEventListener('DOMContentLoaded', () => {
    mostrarCanchas();
})  */

//Reemplazo la llamada de js vaniilla por jquery
$(document).ready(function () {
    mostrarCanchas();
})

function mostrarCanchas() {
    canchas.forEach((cancha) => {

        const div = document.createElement('div'); /* 1- declaro la variable de lo que voy a crear */
        div.classList.add('card'); /* 2- le agrego una clase */

        const imagen = document.createElement('img'); /* 1 */
        imagen.classList.add('imagen-cancha'); /* 2 */
        imagen.src = cancha.img /* 3- le digo que el source va a ser la direccion de las imagenes que cargue en el array */

        const titulo = document.createElement('h3'); /* 1 */
        titulo.classList.add('titulo-card'); /* 2 */
        titulo.textContent = cancha.name; /* 3 */

        const boton = document.createElement('button'); /* 1 */
        boton.classList.add('btnCanchas'); /* 2 */
        boton.textContent = "Me interesa" /* 3 */
        boton.onclick = () => {
            agregarAFavorito(cancha.id);
        };


        div.appendChild(imagen); // le indico al div que quiero que dentro lleve lo que declaré en "imagen"
        div.appendChild(titulo);
        div.appendChild(boton);

        // le indico al contenedor padre que reciba al hijo "div"
        canchasContainer.appendChild(div);


    })
};

function agregarAFavorito(id) {
    const canchaFavorita = canchas.find(cancha => {
        return cancha.id === id;
    })
    canchasFavoritas.push(canchaFavorita);

    mostrarCanchasFavoritas(canchasFavoritas);
    localStorage.setItem("Cancha FAV", JSON.stringify(canchasFavoritas)); //LOCAL STORAGE Y JSON
}

function mostrarCanchasFavoritas(arrayVacio) {

    limpiarHTML();
    arrayVacio.forEach(cancha => {
        favoritasContainer.innerHTML += `
        <div class="bg-dark d-block">
            <h4 class="miCanchaFavorita p-4">Mi cancha elegida es:</h4>
            <img src="${cancha.img}" class="imagen-cancha2">
            <h5 class="h5-fav mb-0 mt-2">${cancha.name}</h5>
            <button class="btnReserva mb-5 mt-1">QUIERO RESERVAR</button>
        </div>
            <div class="div-container w-100 bg-light">
                <div class="row justify-content-center m-0 p-0">
                    <div class="col-md-12 text-center mt-5">
                        <h5><a href="#" class="ds-footer1">juegapadel.com</a></h5>
                            <div class="mt-3 mb-3">
                                <a class="links-footer1" href="#">BAJATE NUESTRA APP PARA TU MÓVIL</a>
                            </div>
                        <p class="">
                            <a class="links-footer1 pe-3" href="../index.html">Inicio</a>
                            <a class="links-footer1 pe-3" href="../sobrenosotros.html">Sobre Nosotros</a>
                            <a class="links-footer1 pe-3" href="../contacto.html">Contacto</a>
                        </p>
                    </div>
                </div>
                <div class="row mt-3 m-0 p-0">
                    <div class="col-md-12 text-center m-0 copyrightFooter">
                        <p class="copyright">Copyright 2021 | Todos los derechos reservados | La Plata, Buenos Aires,
                            Argentina.
                        </p>
                    </div>
                </div>
            </div>
        `

    })
}

function limpiarHTML() {
    favoritasContainer.innerHTML = "";
}

/* ----------------------------------------------------------------------- */