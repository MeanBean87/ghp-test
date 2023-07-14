titleEl = document.querySelector(".title");
itemOneEl = document.querySelector(".item-1");
itemTwoEl = document.querySelector(".item-2");
itemThreeEl = document.querySelector(".item-3");
itemFourEl = document.querySelector(".item-4");
itemFiveEl = document.querySelector(".item-5");
itemSixEl = document.querySelector(".item-6");
submitBtn = document.querySelector(".submit-btn");
textInputEl = document.querySelector(".text-input");

var converter = new showdown.Converter();

let textData = "";

const YOUR_API_KEY = "aPOBA91RAEupAPbEjV0ibQ==1WKhc49resmT47Kr"

function getCalorieNinjas(query) {
  var apiKey = 'aPOBA91RAEupAPbEjV0ibQ==1WKhc49resmT47Kr'; // Replace with your actual API key

  var apiUrl = 'https://api.calorieninjas.com/v1/nutrition?query=' + encodeURIComponent(query);

  fetch(apiUrl, {
    method: 'GET',
    headers: {
      'X-Api-Key': apiKey,
      'Content-Type': 'application/json'
    }
  })
  .then(function(response) {
    if (!response.ok) {
      throw new Error('Error: ' + response.statusText);
    }

    console.log(response.json)
    return response.json();
  })
  .then(function(result) {
    console.log(result);
    // Handle the result or perform additional operations here
  })
  .catch(function(error) {
    console.error('Error:', error);
    // Handle the error or display an error message here
  });
}



const fetchMealDB = async () => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`);
  const data = await response.json();
  return data;
};

textInputEl.addEventListener("change", (e) => {
  textData = e.target.value.toLowerCase();
});

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  updateContent(textData);
});

function getMealDb() {

  var apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`;

  fetch(apiUrl)
  .then(function(response) {
    if (!response.ok) {
      throw new Error('Error: ' + response.statusText);
    }

    console.log(response.json)
    return response.json();
  })
  .then(function(result) {
    console.log(result);
    // Handle the result or perform additional operations here
  })
  .catch(function(error) {
    console.error('Error:', error);
    // Handle the error or display an error message here
  });
}



async function updateContent(textData) {
  const npmData = await fetchDataNpm(textData);
  titleEl.textContent = npmData.name;
  itemOneEl.textContent = npmData.description;
  itemTwoEl.textContent = npmData.version;
  itemThreeEl.textContent = npmData.license;
  itemFourEl.textContent = npmData.homepage;
  itemFiveEl.textContent = npmData.keywords;
  const markdown = npmData.readme;
  itemSixEl.innerHTML = converter.makeHtml(markdown);
}
getCalorieNinjas("1 large apple");
getMealDb();