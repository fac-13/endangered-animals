// Imports

// Server-Side API Request Function

// Function to Filter Species Name for Autocomplete
const filterSpecies = function(data, selector) {
  let species = [];

  data.forEach(function(entry) {
    species.push(entry.scientific_name.toLowerCase());
  });

  return (result = species.filter(function(element) {
    return selector ? element.startsWith(selector.toLowerCase()) : element;
  }));
};

// Function to Extract Data from API Call for Animal Details

// Exports

module.exports = { filterSpecies };
