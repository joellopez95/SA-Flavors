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

var apiKey = '4DyyH4AnFqorWqgOpI8_NaayTK7d7o1NlMhRb5AUUQ3Z5wuZVfncigadK_s4w9PYDXCdFuJXXPUKHtvdnRyh-4g6IdwiwibwGMviF0RV45E17MwI7dDqnrd6rVkfZXYx';
var apiUrl = 'https://api.yelp.com/v3/businesses/search?sort_by=best_match&limit=20';

var options = {method: 'GET', headers: {accept: 'application/json'}};

fetch(apiUrl, options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

