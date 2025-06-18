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
degreeLocal.innerHTML = `${resp_json.main.temp.toFixed(1)}<sup>°C</sup>`

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
// Tabela de direção do vento em graus
// Norte	  N	 337,5° – 22,5°  // Nordeste  NE 22,5° – 67,5° // Leste	  E	 67,5° – 112,5°
// Sudeste	  SE 112,5° – 157,5° // Sul	      S	 157,5° – 202,5° // Sudoeste  SW 202,5° – 247,5°
// Oeste	  W	 247,5° – 292,5° // Noroeste NW	 292,5° – 337,5°

const wind_N = resp_wind >= 337.6 && resp_wind <= 22.5;
const wind_NE = resp_wind >= 22.6 && resp_wind <= 67.5;
const wind_E = resp_wind >= 67.6 && resp_wind <= 112.5;
const wind_SE = resp_wind >= 112.6 && resp_wind <= 157.5;
const wind_S = resp_wind >= 157.6 && resp_wind <= 202.5;
const wind_SW = resp_wind >= 202.6 && resp_wind <= 247.5;
const wind_W = resp_wind >= 247.6 && resp_wind <= 292.5;
const wind_NW = resp_wind >= 292.6 && resp_wind <= 337.5;



if (wind_N) {
    temp_wind.innerHTML = 'Norte';
}

else if (wind_NE) {
    temp_wind.innerHTML = 'Nordeste';
}

else if (wind_E) {
    temp_wind.innerHTML = 'Leste';
}

else if (wind_SE) {
    temp_wind.innerHTML = 'Sudeste';
}

else if (wind_S) {
    temp_wind.innerHTML = 'Sul';
}

else if (wind_SW) {
    temp_wind.innerHTML = 'Sudoeste';
}

else if (wind_W) {
    temp_wind.innerHTML = 'Oeste';
}

else if (wind_NW) {
    temp_wind.innerHTML = 'Noroeste';
}


const wind_speed = document.querySelector('.speed-wind');
wind_speed.innerHTML = `${resp_json.wind.speed} Km/h`;

} 
chamarApi();

});






