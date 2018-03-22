// Imports

// Server-Side API Request Function
function makeRequest(url, callback){
  var xhr = new XMLHttpRequest();
  xhr.addEventListener('load', function(){
      if(xhr.status === 200) {
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
const extractSpecies = function(dataList) {
  // Declare inner array
  let species = [];
  // Iterate input data and push only scientific names strings to inner array
  dataList.forEach(function(entry) {
    species.push(entry.scientific_name.toLowerCase());
  });
  // Return inner array of species names strings
  return species;
};

// Function to Filter Species Name for Autocomplete
const filterSpecies = function(dataList, userSelector) {
  // Extract list of scientific names from objects returned by API
  const speciesNames = extractSpecies(dataList);
  // Return list of scientific names filtered by matching user input string
  // If no user input string, just return all (required only for testing)
  return (result = speciesNames.filter(function(entry) {
    return userSelector ? entry.startsWith(userSelector.toLowerCase()) : entry;
  }));
};


// acrocephalus%20agricola?token=9bb4facb6d23f48efbf424bb05c0c1ef1cf6f468393bc745d42179ac4aca5fee

// Function to Request Animal Details from API
// const animalDetails = function(input) {
//   const url = 'http://apiv3.iucnredlist.org/api/v3/species/'
//   const key = 'token=444e7498e588245bc367e4351fdc31f0f34b970d7672300176d3c3c2b5510011'
//   const animalQuery = input.split(' ').join('%20');
//   const request = `${url}${animalQuery}?${key}`;

//   let output = [];
// }


// Exports

module.exports = { filterSpecies };
