// SALUDO Y MODIFICACION DEL H1 -------------------------------------------------------------------------------------------------------
/* let nombre = prompt("¡Bienvenido! ¿Cuál es tu nombre?").toUpperCase();
document.querySelector('#tituloH1').innerHTML = `HOLA ${nombre}, RESERVAR TU CANCHA AHORA ES MÁS FACIL`;
localStorage.setItem("nombre", nombre); //LOCAL STORAGE */


//---------------DIAS DE LA SEMANA-----------------------------------------------------------------------------------------------------
const days = ['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo'];

const title = document.getElementById('title');
const daysList = document.getElementById('daysList');
const selectDays = document.getElementById('daysSelect');

const fragment = document.createDocumentFragment();

for (const day of days) {
    const selectItem = document.createElement('OPTION');
    selectItem.setAttribute('value', day.toLowerCase());
    selectItem.textContent = day;
    fragment.appendChild(selectItem);
}

selectDays.appendChild(fragment);

//--------------CIUDAD-----------------------------------------------------------------------------------------------------------------
const cities = ['La Plata','Berisso','Ensenada'];

const selectPlaces = document.getElementById('placesSelect');

const fragment1 = document.createDocumentFragment();

for (const city of cities) {
    const selectItem1 = document.createElement('OPTION');
    selectItem1.setAttribute('value', city.toLowerCase());
    selectItem1.textContent = city;
    fragment1.appendChild(selectItem1);
}

selectPlaces.appendChild(fragment1);

//------------HORAS--------------------------------------------------------------------------------------------------------------------
const hours = [15,16,17,18,19,20,21,22,23];

const selectHours = document.getElementById('hoursSelect');

const fragment2 = document.createDocumentFragment();

for (const hour of hours) {
    const selectItem2 = document.createElement('OPTION');
    selectItem2.setAttribute('value', hour);
    selectItem2.textContent = hour;
    fragment2.appendChild(selectItem2);
}

selectHours.appendChild(fragment2);

//----------MINUTOS--------------------------------------------------------------------------------------------------------------------
const minutes = [00,30];

const selectMinutes = document.getElementById('minutesSelect');

const fragment3 = document.createDocumentFragment();

for (const minute of minutes) {
    const selectItem3 = document.createElement('OPTION');
    selectItem3.setAttribute('value', minute);
    selectItem3.textContent = minute;
    fragment3.appendChild(selectItem3);
}

selectMinutes.appendChild(fragment3);

//----------TIEMPOS--------------------------------------------------------------------------------------------------------------------
const times = ["1 h","1.30 hs","2 hs"];

const selectTimes = document.getElementById('timesSelect');

const fragment4 = document.createDocumentFragment();

for (const time of times) {
    const selectItem4 = document.createElement('OPTION');
    selectItem4.setAttribute('value', time);
    selectItem4.textContent = time;
    fragment4.appendChild(selectItem4);
}

selectTimes.appendChild(fragment4);