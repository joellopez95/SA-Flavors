// var resetButton = document.getElementById("resetButton");

// resetButton.addEventListener("click", function () {
//   gems.innerHTML = initialGemsHTML;
//   food.innerHTML = initialFoodHTML;
//   local.innerHTML = initialLocalHTML;

//   setUpEventListeners();
// });

// // Hidden Gems
// var gemsButton = document.getElementById("hiddenGems");
// var subtitle = document.querySelector(".subtitle")
// var main = document.getElementById("mainContainer")
// var gems = document.getElementById("gems")
// var food = document.getElementById("food")
// var local = document.getElementById("local")

// gemsButton.addEventListener("click", hiddenGems)
//     function hiddenGems(){

//         food.innerHTML = ""
//         local.innerHTML = ""
//     }






// // Food Trucks
// var trucksButton = document.getElementById("foodTrucks");

// trucksButton.addEventListener("click", trucks)
//     function trucks(){

//         gems.innerHTML = ""
//         local.innerHTML = ""
//     }









// //Local Restaurants
// var foodButton = document.getElementById("localRestaurants");

// foodButton.addEventListener("click", localRest)
//     function localRest(){

//         gems.innerHTML = ""
//         food.innerHTML = ""
  
//         // var option1 = document.getElementById("option1")
// // var option2 = document.getElementById("option2")
// // var option3 = document.getElementById("option3")
// // var hiddenGems = [{
// //          option1.innerHTML = "Family Friendly"
// // }
//     }

//server side API
//tried google maps, blocked by CORS
/*var apiKey = 'AIzaSyDUJ6rFl2TKfn2JOTYQFnTv7uj1XUF3k9Q';
var query = 'restaurants in San Antonio'; 

var apiUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&key=${apiKey}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Process the data here
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });*/

//nutrition API Key
  var query = '1lb of lean beef'
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/nutrition?query=' + query,
    headers: { 'X-Api-Key': 'hIMS2Z0KH5Jqeiuugextrw==x2YQ5ZZOi7KaZqO1'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});

//Historical API Key
var text = 'the alamo'
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/historicalevents?text=' + text,
    headers: { 'X-Api-Key': 'hIMS2Z0KH5Jqeiuugextrw==x2YQ5ZZOi7KaZqO1'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});

//Coctails
var name = 'bloody mary'
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/cocktail?name=' + name,
    headers: { 'X-Api-Key': 'YOUR_API_KEY'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});