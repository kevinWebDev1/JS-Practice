const key = "b0bcba4bb45834381e2b4595d4d7bfe5";

const backgroundImages = {
  Clear: "linear-gradient(45deg, oklch(84.8% 0.174 86.1), oklch(68% 0.21 33.7), oklch(52.6% 0.211 18), oklch(42.4% 0.163 6.85))",
  Clouds: "linear-gradient(45deg, oklch(97.5% 0.013 244), oklch(97.8% 0.032 197), oklch(95.8% 0.063 196), oklch(94.1% 0.09 196), oklch(92.8% 0.113 195))",
  Rain: "linear-gradient(45deg, oklab(65.8% -0.062 -0.02), oklab(77.7% -0.069 -0.031), oklab(88.8% -0.038 -0.053), oklab(97.5% -0.006 -0.011))",
  Snow: "linear-gradient(45deg, oklch(98% 0.005 260), oklch(96% 0.01 250), oklch(93% 0.015 240), oklch(90% 0.02 230))",
  Haze: "linear-gradient(45deg, oklch(90% 0.05 180), oklch(85% 0.045 190), oklch(80% 0.04 200), oklch(75% 0.035 210))",
  Mist: "linear-gradient(45deg, oklch(85% 0.04 185), oklch(80% 0.035 195), oklch(75% 0.03 205), oklch(70% 0.025 215))",
};


// Query Selctors
const getWeatherBtn = document.getElementById("get-weather");

document.getElementById("search").addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    getWeatherBtn.click();
    console.log("enter clicked");
  }
});
getWeatherBtn.addEventListener("click", () => {
  const loader = document.querySelector(".loader");
  const errorContainer = document.querySelector(".error-container");
  const weatherContainer = document.querySelector(".w-container");

  loader.classList.remove("hidden");
  weatherContainer.classList.add("hidden");
  errorContainer.classList.add("hidden");

  const citySearch = document.getElementById("search").value;
  const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=${key}&units=metric`;
  const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${citySearch}&appid=${key}&units=metric`;

  fetch(weatherURL)
    .then((res) => res.json())
    .then((weatherAPI) => {
      const cityName = weatherAPI.name;
      const liveWeather = weatherAPI.weather[0].main;
      const liveTemp = weatherAPI.main.temp.toFixed(1);
      const date = formatUnixToDate(weatherAPI.dt, "long");
      const liveHumidity = weatherAPI.main.humidity;
      const liveWind = weatherAPI.wind.speed;

      loader.classList.add("hidden");
      weatherContainer.classList.remove("hidden");

      document.querySelector(".city-name").textContent = cityName;
      document.querySelector(".w-condition").textContent = liveWeather;
      document.querySelector(".w-temp").textContent = liveTemp + "°  ";
      document.querySelector(".live-date").textContent = date;
      document.querySelector(".humidity").textContent = liveHumidity + "%";
      document.querySelector(".wind-speed").textContent = liveWind + "Km/h";

      const body = document.querySelector("body");
      body.style.background = backgroundImages[liveWeather];

      const weatherImage = document.querySelector(".live-w-img");
      weatherImage.src = `assets/images/${liveWeather}.png`;

      // another fetch ____________________________________________>
      fetch(forecastURL)
        .then((res) => res.json())
        .then((forecastAPI) => {
          const forecastList = forecastAPI.list.filter((forecast) => {
            if(forecast.dt_txt.includes("12:00:00") && !forecast.dt_txt.includes(today())) {
              console.log("date: ",forecast.dt_txt)              
              return forecast;
            }

          }
);

          const forecastContainer = document.querySelector(
            ".forecast-container"
          );

          forecastContainer.innerHTML = forecastList
            .map((f) => {
              const forecastDate = formatUnixToDate(f.dt, "short");
              const forecastWeather = f.weather[0].main;
              const forecastTemp = f.main.temp.toFixed(1);

              return `<div class="forecast-details">
                    <p class="f-date">${forecastDate}</p>
                    <div class="f-img-box">
                        <img src="assets/forecast-images/${forecastWeather}.png" class="f-img">
                    </div>
                    <div class="f-temp">${forecastTemp}°</div>
                </div>`;
            })
            .join("");
        })
        .catch((err) => {
          console.log((err) => err);
        });
    })
    .catch((err) => {
      loader.classList.add("hidden");
      errorContainer.classList.remove("hidden");
      console.log((err) => err);
    });
});

function formatUnixToDate(timestamp, format) {
  // Fri, 07 Jul
  const weekNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",
  ];

  Date.prototype.weatherDate = function () {
    return (
      weekNames[this.getDay()] +
      ", " +
      (this.getDate() < 10 ? "0" : "") +
      this.getDate() +
      " " +
      monthNames[this.getMonth()]
    );
  };
  Date.prototype.ShortWeatherDate = function () {
    return (
      (this.getDate() < 10 ? "0" : "") +
      this.getDate() +
      " " +
      monthNames[this.getMonth()]
    );
  };

  const date = new Date(timestamp * 1000);
  return format === "long" ? date.weatherDate() : date.ShortWeatherDate();
}

function today() {
  // "2025-07-06"
  Date.prototype.today = function () {
    return (
      this.getFullYear() +
      "-" +
      (this.getMonth() + 1 < 10 ? "0" : "") +
      (this.getMonth() + 1) +
      "-" +
      (this.getDate() < 10 ? "0" : "") +
      this.getDate()
    );
  };
  const date = new Date();
  return date.today();
}
