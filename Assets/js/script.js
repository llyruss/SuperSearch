


var requestUrl = "https://gateway.marvel.com/v1/public/characters?name=thor&limit=10&apikey=c44516421d70a8db4bf8fede1fc59165"

fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
       console.log(data)
    });








