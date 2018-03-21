// Imports



// Funtion to Filter Species Name for Autocomplete
  const filterSpecies = function(input) {
    
    return result = input.map(function(entry) {
      return entry.scientific_name;
    });
    
  }

  


// Function to Extract Data from API Call for Animal Details



// Exports

 module.exports = { filterSpecies };
