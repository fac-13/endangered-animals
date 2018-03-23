// Client-Side XHR Script

function makeRequest(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', function () {
        if (xhr.status === 200) {
            var response = xhr.responseText;
            callback(response);
        } else {
            console.log(`Status code ${xhr.status}`)
        }
    })
    xhr.open('GET', url)
    xhr.send();

}


var input = document.querySelector("#text-field");

input.addEventListener('keyup', function (event) {
    var url = "/get-list" + "?" + input.value;
    makeRequest(url, createList);

})

function createList(animals) {
    // console.log("before",animals)
    var animals = animals.replace(/["[\]]/g, '')
    // console.log("after",animals)
    animals = animals.split(',');
    // console.log("after split",animals)
    // var newAnimals = animals.split(",");
    var datalistOptions = document.querySelector('#animals');

    //delete all list options to prevent duplication
    while (datalistOptions.hasChildNodes()) {
        datalistOptions.removeChild(datalistOptions.lastChild);
    }

    //adds new list items
    animals.forEach(function (animalName) {
        var option = document.createElement('option');
        option.setAttribute('value', animalName);
        datalistOptions.appendChild(option);
    })
}


// Enable animal information functionality 
document.querySelector('button').addEventListener('click', function (event) {
    event.preventDefault();
    var url = "/animal-detail" + "?" + input.value;
    makeRequest(url, createAnimalProfile);
})

function createAnimalProfile(animal) {
    var profile = document.querySelector('#animal-profile');

    //Remove previous animal profile
    while (profile.hasChildNodes()) {
        profile.removeChild(profile.lastChild);
    }

    //The data is returned in string format so put it back into an object
    animal = JSON.parse(animal);
    console.log('animal put back to object: ', animal);

    // Display the data on the page 
    // innerHTML is used to strip the HTML tags that are returned with the API response
    var div = document.createElement('div');

    //Name of animal
    var animalName = document.createElement('h3');
    animalName.innerHTML = 'Name: ' + animal.name
    div.appendChild(animalName);

    //Animal habitat
    var animalHabitat = document.createElement('p');
    animalHabitat.innerHTML = '<strong>Habitat:</strong> ' + animal.habitat;
    div.appendChild(animalHabitat);

    //Animal threats
    animalThreats = document.createElement('p');
    animalThreats.innerHTML = '<strong>Threats:</strong> ' + animal.threats;
    div.appendChild(animalThreats);

    //Animal Conservation
    var animalConservation = document.createElement('p');
    animalConservation.innerHTML = '<strong>Conservation:</strong> ' + animal.conservation
    div.appendChild(animalConservation);

    profile.appendChild(div);
}

