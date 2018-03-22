// Imports

// Server-Side API Request Function

// Function to Extract List of Species from API Response Array of Objects
const extractSpecies = function(dataList) {
  let species = [];

  dataList.forEach(function(entry) {
    species.push(entry.scientific_name.toLowerCase());
  });

  return species;
};

// Function to Filter Species Name for Autocomplete
const filterSpecies = function(dataList, userSelector) {
  
  const speciesNames = extractSpecies(dataList);

  return (result = speciesNames.filter(function(entry) {
    return userSelector ? entry.startsWith(userSelector.toLowerCase()) : entry;
  }));

};

// Function to Extract Data from API Call for Animal Details

// Exports

module.exports = { filterSpecies };
