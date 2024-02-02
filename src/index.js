function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");

  let temperature = response.data.temperature.current;
  cityElement = document.querySelector("#city");

  cityElement.innerHTML = response.data.city;

  temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  let apiKey = "382o0ac2c14btd9435906fb13df381eb";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let SearchInput = document.querySelector("#search-form-input");

  searchCity(SearchInput.value);
}

let SearchFormElement = document.querySelector("#search-form");
SearchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Paris");
