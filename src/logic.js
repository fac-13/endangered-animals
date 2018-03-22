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

// Function to Request Animal Details from API
const animalDetails = function(x) {
  return x;
}


// Exports

module.exports = { filterSpecies };
