let apiKey = "5dcbc4f76fff06d1dbfaeb2c40af1083";

function showTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  temperature = Math.round(response.data.main.temp);
  temperatureElement.innerHTML = `${temperature}`;
  document.querySelector("#speed").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#humidity").innerHTML = Math.round(
    response.data.main.humidity
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].description;
  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);
}

function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[dayIndex];

  return `${day} ${hours}:${minutes}`;
}
function search(city) {
  document.querySelector("#city").innerHTML = city;
  let apiKey = "06f730764c0a59622baaa70613467bb1";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(showTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  document.querySelector("#city").innerHTML = city;
  search(city);
}

let dateElement = document.querySelector("#date");
let currentTime = new Date();

dateElement.innerHTML = formatDate(currentTime);

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);
//

function showTemperatureNow(response) {
  let temperature = Math.round(response.data.main.temp);
  let city = response.data.name;
  alert(
    `Your city is ${city} .The temperature in your city now is ${temperature}°C`
  );
  let temperatureElement = document.querySelector("#temperature");
  let tempa = Math.round(response.data.main.temp);
  temperatureElement.innerHTML = `${tempa}`;
  let cityElement = document.querySelector("#city");
  let cityNow = response.data.name;
  cityElement.innerHTML = `${cityNow}`;
  document.querySelector("#speed").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#humidity").innerHTML = Math.round(
    response.data.main.humidity
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].description;
}

function showPosition(position) {
  let apiKey = "06f730764c0a59622baaa70613467bb1";

  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemperatureNow);
}

let pos = document.querySelector("#current");
pos.addEventListener("click", getPos);

function getPos(event) {
  navigator.geolocation.getCurrentPosition(showPosition);
  showPosition;
}
search("Stockholm");
//

function displayFahrenheitTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");

  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
  let fahrenheiTemperature = (temperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(fahrenheiTemperature);
}

function displayCelsiusTemperature(event) {
  event.preventDefault();
  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(temperature);
}
let temperature = null;

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemperature);

function displayForecast() {
  let forecastElement = document.querySelector("#forecastan");
  let forecastHTML = `<div class="row forecast border">`;
  let days = ["Thu", "Fri", "Sat", "Sun", "Mon"];
  days.forEach(function (day) {
    forecastHTML =
      forecastHTML +
      `
        <div class="col first-day">
       <div class="days">${day}</div>
   
    <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="" class="frc">
       <p>22°C<span class="grey-degree"> 23°C</span></p>
                
              </div>`;
  });

  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}
displayForecast();

//function changeColor(){
//let color = document.getElementById("hed");
//  if()
//  ;
//    color.style.backgroundColor = "blue";}
//function background(){
//if(morning) background: linear-gradient(90deg, rgb(252, 115, 156) 0%, rgb(139, 102, 241) 100%);
//else if(day) background: linear-gradient(90deg, rgb(252, 209, 115) 0%, rgb(241, 154, 102) 100%);
//else if(evening) background: linear-gradient(90deg, rgb(195, 12, 12) 0%, rgb(102, 102, 241) 100%);else (night)
//background: linear-gradient(90deg, rgb(56, 7, 7) 0%, rgb(39, 18, 139) 100%);}
