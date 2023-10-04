var subtitle = document.querySelector(".subtitle");
var main = document.getElementById("mainContainer");
var gems = document.getElementById("gems");
var food = document.getElementById("food");
var local = document.getElementById("local");
var resetButton = document.getElementById("resetButton");
//created variables to use in resetbutton function
var initialGemsHTML = gems.innerHTML;
var initialFoodHTML = food.innerHTML;
var initialLocalHTML = local.innerHTML;
//grabbed the button variables and put them in a function
//grabbed eventlisteners and put them in a function
//therefor, when we click on the resetbutton, "setupeventlisteners" is called and helps perform the task.
function setUpEventListeners() {
  var gemsButton = document.getElementById("hiddenGems");
  var foodButton = document.getElementById("localRestaurants");
  var trucksButton = document.getElementById("foodTrucks");

  gemsButton.addEventListener("click", hiddenGems);
  trucksButton.addEventListener("click", trucks);
  foodButton.addEventListener("click", localRest);
}
//call function
setUpEventListeners();

resetButton.addEventListener("click", function () {
  gems.innerHTML = initialGemsHTML;
  food.innerHTML = initialFoodHTML;
  local.innerHTML = initialLocalHTML;

  setUpEventListeners();
});

//hidden Gems
function hiddenGems() {
  food.innerHTML = "";
  local.innerHTML = "";
}
// Food Trucks

function trucks() {
  gems.innerHTML = "";
  local.innerHTML = "";
}

//Local Restaurants

function localRest() {
  gems.innerHTML = "";
  food.innerHTML = "";
}
