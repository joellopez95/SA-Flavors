var myButton = document.getElementById("searchBtn");
var queryInput = document.getElementById("foodSearch");
var nutrition = document.getElementById("nutrition");

myButton.addEventListener("click", function () {
  search();
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
