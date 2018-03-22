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

    var url = "/get-list" + "?" + input.value;
    // console.log(url); 
    makeRequest(url, function(x) {
        console.log('front end list cb: ', x);
    }); 

})


 // dataBack.forEach(function(item) {
  //   result.push(`<option value="${item}">`);
  // });
