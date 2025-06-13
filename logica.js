document.querySelector('.divForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const cidade = document.getElementById('campoInput').value;


async function chamarApi() {

const apiKey = 'd5c6809eaeb8e012b3b935ab6f1be1d7';
const urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cidade)}&appid=${apiKey}&units=metric&lang=pt_br`;


    const resp = await fetch(urlApi);

    const resp_json = await resp.json();

    console.log(resp_json);

    if (resp_json.cod !== 200) {

        alert(`Não foi possivel localizar a previsão do tempo!`);
    }

 const cityLocal = document.getElementById('city');
 cityLocal.innerHTML = `${resp_json.name} , ${resp_json.sys.country}`;

const degreeLocal = document.getElementById('degree');
degreeLocal.innerHTML = `${resp_json.main.temp}<sup>°C</sup>`

const icon =  `https://openweathermap.org/img/wn/${resp_json.weather[0].icon}@2x.png`;

const imageClima = document.querySelector('.campoImg');
imageClima.src = icon;

const descricaoTempo = document.querySelector('.descriçãoTempo');
descricaoTempo.innerHTML = resp_json.weather[0].description;

const temp_min = document.querySelector('.min-temp');
temp_min.innerHTML = `${resp_json.main.temp_min}<sup>°C</sup>`;

const temp_max = document.querySelector('.max-temp');
temp_max.innerHTML = `${resp_json.main.temp_max}<sup>°C</sup>`;

const temp_feels = document.querySelector('.feels-temp');
temp_feels.innerHTML = `${resp_json.main.feels_like}<sup>°C</sup>`;

const temp_humidity = document.querySelector('.humidity-temp');
temp_humidity.innerHTML = `${resp_json.main.humidity}%`;

const temp_pressure = document.querySelector('.pressure-temp');
temp_pressure.innerHTML = resp_json.main.pressure

const temp_wind = document.querySelector('.wind-temp');

const resp_wind = resp_json.wind.deg;
const wind = resp_json;
const value_wind = '';

console.log(resp_wind);

if (resp_wind >= 202.5 && resp_wind <= 247.5) {
    temp_wind.innerHTML = 'SW';
}

const wind_speed = document.querySelector('.speed-wind');
wind_speed.innerHTML = `${resp_json.wind.speed} Km/h`;

} 
chamarApi();

});


// const btnPesquisar = document.querySelector('.buttonPesquisar');



// btnPesquisar.addEventListener('click', async => {
//   const campoInput = document.getElementById('campoInput').value;

// if (!campoInput) {
// alert('Digite uma cidade!');
// };






// });





// document.querySelector('.buttonPesquisar').addEventListener('click', () => {
//     const cidade = document.getElementById('campoInput').value;
//     const url = `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(cidade)}&appid=API_KEY&units=metric&lang=pt_br`;
//     fetch(url)
//       .then(response => response.json())
//       .then(data => {
//         // Processar os dados recebidos da API
//       });
// });



