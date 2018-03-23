// Imports

// Server-Side API Request Function
function makeRequest(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.addEventListener('load', function () {
    if (xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      var data = callback(response);
    } else {
      console.log(`Status code ${xhr.status}`)
    }
  })
  xhr.open('GET', url)
  xhr.send();
}

// Function to Extract List of Species from API Response Array of Objects
const extractSpecies = function (dataList) {
  // Declare inner array
  let species = [];
  // Iterate input data and push only scientific names strings to inner array
  dataList.forEach(function (entry) {
    species.push(entry.scientific_name.toLowerCase());
  });
  // Return inner array of species names strings
  return species;
};

// Function to Filter Species Name for Autocomplete
const filterSpecies = function (dataList, userSelector) {
  // Extract list of scientific names from objects returned by API
  const speciesNames = extractSpecies(dataList);
  console.log(speciesNames); 
  // Return list of scientific names filtered by matching user input string
  // If no user input string, just return all (required only for testing)
  var result = speciesNames.filter(function (entry) {
    return entry.startsWith(userSelector.toLowerCase());
  });

  //only return 20 species when the full list is greater than 20 animals long 
  let maxSpecies = [];
  let maxNum = result.length;

  if (maxNum > 20) {
    for (let i = 0; i < 20; i++) {
      let randomNum = Math.floor(Math.random() * (maxNum - 0 + 1)) + 0;
      maxSpecies.push(result[randomNum])
    }
    return maxSpecies;
  } else {
    return result;
  }
}

  // Function to Request Animal Details from API
  
 //   const url = 'http://apiv3.iucnredlist.org/api/v3/species/'
  //   const key = 'token=444e7498e588245bc367e4351fdc31f0f34b970d7672300176d3c3c2b5510011'
  //   const animalQuery = input.split(' ').join('%20');
  //   const request = `${url}${animalQuery}?${key}`;




module.exports = { filterSpecies } 
