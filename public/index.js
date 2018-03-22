// Client-Side XHR Script

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

var input = document.querySelector("#text-field"); 

input.addEventListener('keypress', function(event){
    var letter = event.key; 
    console.log(letter)
    var url = "/get-list" + "?" + letter; 
    makeRequest(url) 
})
