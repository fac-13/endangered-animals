// Client-Side XHR Script

function makeRequest(url, callback){
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', function(){
        if(xhr.status === 200) {
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

input.addEventListener('keyup', function(event){
    event.preventDefault();
    resetList(); 
    var url = "/get-list" + "?" + input.value;
    makeRequest(url,createList);

})

function resetList(){
//delete all list options to prevent duplication
var animalList = document.querySelector('#animals'); 
while(animalList.hasChildNodes()) {
    animalList.removeChild(animalList.lastChild);
  }
}


function createList(animals) {
    // console.log("before",animals)
    var animals = animals.replace(/["[\]]/g, '')
    // console.log("after",animals)
    animals = animals.split(',');
    // console.log("after split",animals)
    // var newAnimals = animals.split(",");
    var datalistOptions = document.querySelector('#animals');

    //adds new list items
    animals.forEach(function(animalName){
      var option = document.createElement('option');
      option.setAttribute('value',animalName);
      datalistOptions.appendChild(option);
    })
}


 // dataBack.forEach(function(item) {
  //   result.push(`<option value="${item}">`);
  // });
