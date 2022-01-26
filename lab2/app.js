const input = document.querySelector("#input");
const city = document.querySelector("#city");

const cityName = document.querySelector("#cityName");
const Temp = document.querySelector("#temp");
const main = document.querySelector("#main");
const discription = document.querySelector("#discription");
const image = document.querySelector("#image");

var element = document.getElementById('cLoc');
element.addEventListener('onclick',setLoc() ,false);

wUpdate('Miami');

input.onsubmit = (x) => {
        x.preventDefault();
        wUpdate(city.value);
        city.value = "";
   
};

function setLoc() {
    var pos = navigator.geolocation;
    if (pos){         
        pos.getCurrentPosition(success);
    }else{
        alert("Geolocation is not supported by this browser.");
    }
};

function success(data) {
    var lat = data.coords.latitude;
    var long = data.coords.longitude;
    wUpdateLL(lat,long);
    lat="";
    long="";
    
};
wUpdateLL = (lat,long) => {
    const req = new XMLHttpRequest();
    req.open(
        "GET",
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=28687ce76cd005c8814bf6ba0415f62e`);
    req.send();
    req.onload = () => {
        if (req.status === 404) {
            alert("Place not found");
          } else {
            var data = JSON.parse(req.response);
            cityName.innerHTML = data.name;
            Temp.innerHTML = `${Math.round(data.main.temp- 273.15)}°C`;
            main.innerHTML = data.weather[0].main;
            discription.innerHTML = data.weather[0].description;
            image.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
          }
    };
};

wUpdate = (city) => {
    const req = new XMLHttpRequest();
    req.open(
        "GET",
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=28687ce76cd005c8814bf6ba0415f62e`);
    req.send();
    req.onload = () => {
        if (req.status === 404) {
            alert("Place not found");
          } else {
            var data = JSON.parse(req.response);
            cityName.innerHTML = data.name;
            Temp.innerHTML = `${Math.round(data.main.temp- 273.15)}°C`;
            main.innerHTML = data.weather[0].main;
            discription.innerHTML = data.weather[0].description;
            image.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
          }
    };
};


