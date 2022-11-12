let weather = {
  apikey: "e50bc1c0ae8e4f7f0e96649d158ec167",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=" +
        this.apikey +
        "&units=metric&lang=es"
    )
      .then((Response) => Response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city").innerHTML = "El clima en " + name;
    document.querySelector(".icon").src =
      "http://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerHTML = description;
    document.querySelector(".temp").innerHTML = temp + "°C";
    document.querySelector(".humidity").innerHTML =
      "Humedad: " + humidity + "%";
    document.querySelector(".wind").innerHTML = "Viento: " + speed + "Km/h";
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

//Se agregar un event listener para el boton de buscar
document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

//Se agregar un event listener para la tecla "enter"
document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });
