const cityName = document.querySelector('#cityName');
    const humidity = document.querySelector('#humidity');
    const temp = document.querySelector('#temp');
    const wind_speed = document.querySelector('#wind_speed');
    const submit = document.querySelector("#submit");

    const getWeather = async (city) => {
      cityName.innerHTML = city;
      const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "152e043915mshc3c699f22c8695bp11e77ajsna3f3013df295",
          "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        console.log(result);

        humidity.innerHTML = result.humidity;
        temp.innerHTML = result.temp;
        wind_speed.innerHTML = result.wind_speed;
        feels_like.innerHTML = result.feels_like;
        wind_degrees.innerHTML = result.wind_degrees;
        cloud_pct.innerHTML = result.cloud_pct;
      } catch (error) {
        console.error("Error fetching the weather data:", error);
      }
    };

    submit.addEventListener("click", (e) => {
		e.preventDefault();
      const city = document.querySelector("#city").value;
      getWeather(city);
    });

    
    getWeather("Delhi");