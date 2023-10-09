var myButton = document.getElementById("searchBtn");
var queryInput = document.getElementById("foodSearch");
var nutrition = document.getElementById("nutrition");

myButton.addEventListener("click", function () {
  search();
renderLastNutrition();
  
});

function search() {
  var query = queryInput.value;
  $.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/nutrition?query=' + query,
    headers: { 'X-Api-Key': 'u+4h51GAe7l7Bv3AmACSaQ==ERvGRsarbvzIFnGJ' },
    contentType: 'application/json',
    success: function (result) {
      try {
        console.log(result); 
          var foodData = result[0];
          if (foodData.name) {
            var foodName = foodData.name;
            var calories = foodData.calories;
            var protein = foodData.protein_g;
            var sugar = foodData.sugar_g;
            nutrition.innerHTML = `Name: ${foodName}<br> Calories: ${calories}<br>Protein: ${protein}g<br>Sugar: ${sugar}g`;
          } 
localStorage.setItem('foodData', JSON.stringify(foodData));
      } catch (error) {
        nutrition.innerHTML = "Error";
        console.error('Error parsing JSON: ', error);
      }
    },
    error: function ajaxError(jqXHR) {
      console.error('Error: ', jqXHR.responseText);
    }
  });
}

var weather = {
  apiKey:"f8e7222d3f62239de2cbfc102913bc69",
  fetchWeather: function (city) {
      fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
      + city
      + "&units=imperial&appid=" 
      + this.apiKey)
      .then(response => response.json())
      .then(data =>{   
          console.log(data);
 
      var {name} = data;
      var {icon, description} = data.weather [0];
      var {temp, humidity} = data.main;
      var {speed} = data.wind;
      console.log(name,icon,description,temp,humidity,speed);
      document.querySelector(".city").innerText = name;
      document.querySelector(".weather-icon").src = "https://openweathermap.org/img/wn/"+ icon + "@2x.png";
      document.querySelector(".tempretaure").innerText = "Temp " + temp.toFixed(0) + "°F";
      document.querySelector(".description").innerText = description;
      document.querySelector(".humidity").innerText = humidity + "% humidity";
      document.querySelector(".wind").innerText ="Wind " + speed + " mph";
     //changed string to savedCity
     //stores info for future reference 
      localStorage.setItem("savedCity", city);
      }
      )},

  search: function(){
    //got handle on city input
    var city = document.querySelector("#cityInput").value
    //call fetchweather
    this.fetchWeather(city); 
  },

  //created function to load the last searched city from local storage
  loadLastCity: function () {

    //obtain string value from local storage
    var savedCity = localStorage.getItem("savedCity");
    //this will fetch and display weather data if there is a saved city in local storage
    if (savedCity) {
      this.fetchWeather(savedCity);
    }
  },
};

var myButton = document.getElementById("searchBtn");
myButton.addEventListener("click",function(){  
  weather.search();


 });

 window.addEventListener("load", function () {
  weather.loadLastCity();
});


function renderLastNutrition() {
  // Use JSON.parse() to convert text to JavaScript object
  var lastFood = JSON.parse(localStorage.getItem('foodData'));
  // Check if data is returned, if not exit out of the function
  if (lastFood !== null) {
    document.getElementById('foodName').innerHTML = lastFood.name;
    document.getElementById('calories').innerHTML = lastFood.calories;
    document.getElementById('protein').innerHTML = lastFood.protein_g;
    document.getElementById('sugar').innerHTML = lastFood.sugar_g;
  }
}

// The init() function fires when the page is loaded
function init() {
  // When the init function is executed, the code inside renderLastNutrition function will also execute
  renderLastNutrition();
}
init();


 

