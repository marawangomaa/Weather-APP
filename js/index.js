getWeather("cairo");


let search = document.getElementById("search")

search.addEventListener('input',()=>{
        // console.log(search.value);
        getWeather(search.value)
})





async function getWeather(name) {
        let api = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7b04d284fbfe4d2191940020242506&q=${name}&days=3`);
        let response = await api.json();
        // console.log(response);
        displayWeather(response);
      }
      
      function displayWeather(data) {
        let weatherBox = `
          <div class="item col-md-4 bg-sec-color m-0 rounded-4 bg-item1">
            <div class="d-flex justify-content-between py-2 px-3 bg-header-color text-light rounded-start" id="today-data">
              <p id="today_data_day_name" class="my-auto">${new Date(data.forecast.forecastday[0].date).toLocaleDateString("en-US", { weekday: "long" })}</p>
              <span>
                <span id="today_data_day_number">${new Date(data.forecast.forecastday[0].date).getDate()}</span>
                <span id="today_data_day_month">${new Date(data.forecast.forecastday[0].date).toLocaleDateString("en-US", { month: "long" })}</span>
              </span>
            </div>
            <div class="item-contant text-start mb-2 px-3 py-3 pt-5" id="todey">
              <p id="today_location" class="fs-5">${data.location.name}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="fs-1 fw-bolder text-light w-100 d-block">
                  <span id="today_temp">${data.current.temp_c}</span>
                  <span><sup>O</sup>C</span>
                </div>
              </div>
              <div class="time">
                <img src="${data.current.condition.icon}" alt="icon">
              </div>
              <span class="weather-set text-info">${data.current.condition.text}</span>
              <div class="vis-read d-flex justify-content-between">
                <div class="humidity">
                  <i class="fa-solid fa-umbrella"></i> ${data.current.humidity}%
                </div>
                <div class="air">
                  <i class="fa-solid fa-wind"></i> ${data.current.wind_kph}KM/h
                </div>
                <div class="deraction">
                  <i class="fa-regular fa-compass"></i> ${data.current.wind_dir}
                </div>
              </div>
            </div>
          </div>
          <div class="item col-md-4 bg-sec-color m-0 rounded-4 bg-main-color">
            <div class="d-flex justify-content-between py-2 px-3 bg-header-color text-light rounded-start" id="today-data">
              <p id="today_data_day_name" class="m-auto">${new Date(data.forecast.forecastday[1].date).toLocaleDateString("en-US", { weekday: "long" })}</p>
            </div>
            <div class="time w-100 m-auto d-flex justify-content-center align-items-center pt-4">
              <img src="${data.forecast.forecastday[1].day.condition.icon}" alt="icon">
            </div>
            <div class="item-contant text-center mb-2 px-3 py-3 pt-5" id="todey">
              <div class="d-flex justify-content-between align-items-center">
                <div class="fs-1 fw-bolder text-light w-100 d-block">
                  <span id="today_temp">${data.forecast.forecastday[1].day.maxtemp_c}</span>
                  <span><sup>O</sup>C</span>
                </div> 
              </div>
              <div class="small-deg mb-4">
                <span class="fs-6">${data.forecast.forecastday[1].day.mintemp_c}<sub>o</sub></span>
              </div>
              <span class="weather-set text-info">${data.forecast.forecastday[1].day.condition.text}</span>
            </div>
          </div>
          <div class="item col-md-4 bg-sec-color m-0 rounded-4 bg-item1">
            <div class="d-flex justify-content-between py-2 px-3 bg-header-color text-light rounded-start" id="today-data">
              <p id="today_data_day_name" class="m-auto">${new Date(data.forecast.forecastday[2].date).toLocaleDateString("en-US", { weekday: "long" })}</p>
            </div>
            <div class="time w-100 m-auto d-flex justify-content-center align-items-center pt-4">
              <img src="${data.forecast.forecastday[2].day.condition.icon}" alt="icon">
            </div>
            <div class="item-contant text-center mb-2 px-3 py-3 pt-5" id="todey">
              <div class="d-flex justify-content-between align-items-center">
                <div class="fs-1 fw-bolder text-light w-100 d-block">
                  <span id="today_temp">${data.forecast.forecastday[2].day.maxtemp_c}</span>
                  <span><sup>O</sup>C</span>
                </div> 
              </div>
              <div class="small-deg mb-4">
                <span class="fs-6">${data.forecast.forecastday[2].day.mintemp_c}<sub>o</sub></span>
              </div>
              <span class="weather-set text-info">${data.forecast.forecastday[2].day.condition.text}</span>
            </div>
          </div>
        `;
        document.getElementById('row').innerHTML = weatherBox;
      }
      
      