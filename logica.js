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
// N  348.76° → 11.25° / NNE  11.26° → 33.75° / NE  33.76° → 56.25°
// ENE	56.26° → 78.75° / E	78.76° → 101.25° / ESE	101.26° → 123.75°
// SE	123.76° → 146.25° / SSE	146.26° → 168.75° / S 168.76° → 191.25°
// SSW	191.26° → 213.75° / SW	213.76° → 236.25° / WSW	236.26° → 258.75°
// W 258.76° → 281.25° / WNW 281.26° → 303.75° / NW  303.76° → 326.25°
// NNW	326.26° → 348.75°

const wind_N = resp_wind >= 348.76 && resp_wind <= 11.25;
const wind_N_NE = resp_wind >= 11.26 && resp_wind <= 33.75;
const wind_NE = resp_wind >= 33.76 && resp_wind <= 56.25;
const wind_E_NE = resp_wind >= 56.26 && resp_wind <= 78.75;
const wind_E = resp_wind >= 78.76 && resp_wind <= 101.25;
const wind_E_SE = resp_wind >= 101.26 && resp_wind <= 123.75;
const wind_SE = resp_wind >= 123.76 && resp_wind <= 146.25;
const wind_S_SE = resp_wind >= 146.26 && resp_wind <= 168.75;
const wind_S = resp_wind >= 168.76 && resp_wind <= 191.25;
const wind_S_SW = resp_wind >= 191.26 && resp_wind <= 213.75;
const wind_SW = resp_wind >= 213.76 && resp_wind <= 236.25;
const wind_W_SW = resp_wind >= 236.26 && resp_wind <= 258.75;
const wind_W = resp_wind >= 258.76 && resp_wind <= 281.25;
const wind_W_NW = resp_wind >= 281.26 && resp_wind <= 303.75;
const wind_NW = resp_wind >= 303.76 && resp_wind <= 326.25;
const wind_N_NW = resp_wind >= 326.26 && resp_wind <= 348.75;


if (wind_N) {
    temp_wind.innerHTML = 'Norte';
}

else if (wind_N_NE) {
    temp_wind.innerHTML = 'Norte a Nordeste';
}

else if (wind_NE) {
    temp_wind.innerHTML = 'Nordeste';
}

else if (wind_E_NE) {
    temp_wind.innerHTML = 'Leste a Nordeste';
}

else if (wind_E) {
    temp_wind.innerHTML = 'Leste';
}

else if (wind_E_SE) {
    temp_wind.innerHTML = 'Leste a Sudeste';
}

else if (wind_SE) {
    temp_wind.innerHTML = 'Sudeste';
}

else if (wind_S_SE) {
    temp_wind.innerHTML = 'Sul a Sudeste';
}

else if (wind_S) {
    temp_wind.innerHTML = 'Sul';
}

else if (wind_S_SW) {
    temp_wind.innerHTML = 'Sul a Sudoeste';
}

else if (wind_SW) {
    temp_wind.innerHTML = 'Sudoeste';
}

else if (wind_W_SW) {
    temp_wind.innerHTML = 'Oeste a Sudoeste';
}

else if (wind_W) {
    temp_wind.innerHTML = 'Oeste';
}

else if (wind_W_NW) {
    temp_wind.innerHTML = 'Oeste a Noroeste';
}

else if (wind_NW) {
    temp_wind.innerHTML = 'Noroeste';
}

else if (wind_N_NW) {
    temp_wind.innerHTML = 'Norte a Noroeste';
}


const wind_speed = document.querySelector('.speed-wind');
wind_speed.innerHTML = `${resp_json.wind.speed} Km/h`;

} 
chamarApi();

});






