let body = document.querySelector("body");
let input = document.querySelector("input");
let btn = document.querySelector(".search");

btn.addEventListener("click", (event) => {

    event.preventDefault();

    let city = input.value;
    let apiKey = "1081b14405c4bea5889cc74d8ee04473";
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    input.value = "";

    let h1 = document.querySelector(".city");
    h1.innerText = `Weather for ${city}`;

    call(url)
        .then((result) => {
            return result;
        })
        .then((data) => {
            tempFun(data.main);
            humidFun(data);
            windFun(data);
        });
});


function tempFun(data) {
    
    let temp = parseInt(data.temp);
    let bigTemp = document.querySelector("#bigTemp");
    bigTemp.innerHTML = `${temp - 273} <sup><sup>.</sup></sup>C`;

    let feel = parseInt(data.feels_like);
    let feelTemp = document.querySelector("#temp");
    feelTemp.innerHTML = `Feels like ${feel - 273}<sup><sup>.</sup></sup>C`;

    let minTemp = parseInt(data.temp_min);
    let min_temp = document.querySelector("#min-temp");
    min_temp.innerHTML = `Min. Temperature is ${minTemp - 273}<sup><sup>.</sup></sup>C`;


    let maxTemp = parseInt(data.temp_max);
    let max_temp = document.querySelector("#max-temp");
    max_temp.innerHTML = `Max. Temperature is ${maxTemp - 273}<sup><sup>.</sup></sup>C`;
}

function humidFun(data) {

    let humidity = data.main.humidity;
    let humid = document.querySelector("#humidity");
    humid.innerText = `${humidity}%`;

    let pressure = data.main.pressure;
    let _pressure = document.querySelector("#pressure");
    _pressure.innerText = `Pressure is ${pressure}`;

    let lat = data.coord.lat;
    let _lat = document.querySelector("#lat");
    _lat.innerText = `Lattitude is ${lat}`;

    
    let long = data.coord.lon;
    let _long = document.querySelector("#long");
    _long.innerText = `Longitude is ${long}`;
    
}

function windFun(data) {

    let windSpped = data.wind.speed;
    let wind_speed = document.querySelector("#speed");
    wind_speed.innerText = `${windSpped}Km/hr`;

    let degree = data.wind.deg;
    let _degree = document.querySelector("#deg");
    _degree.innerText = `Wind is along ${degree} degree`;

    let rise = data.sys.sunrise;
    let _rise = document.querySelector("#sunrise");
    _rise.innerText = `Sunrise Time is ${rise}`;

    
    let set = data.sys.sunset;
    let _set = document.querySelector("#sunset");
    _set.innerText = `Sunset Time is ${set}`;
    
}


async function call(url) {

    try {

        let res = await fetch(url);
        let ans = res.json();
        return ans;

    } catch(e) {

        console.log("error = ", e);

    }
}