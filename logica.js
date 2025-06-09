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



