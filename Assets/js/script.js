
//Marvel API request

let characterSearch = "thor"
let marvelAPIKey = "c44516421d70a8db4bf8fede1fc59165"


var requestUrl = "https://gateway.marvel.com/v1/public/characters?name="+characterSearch+"&limit=10&apikey="+marvelAPIKey

fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (characterData) {
       console.log(characterData)

       let characterBio = characterData.data.results[0].description
       console.log(characterBio)

    });

//var searchButton = document.querySelector("search-button")

//function getApi() {

   // var userSearch = document.querySelector("#hero-name").value
//console.log(userSearch)
    
   // var searchParams = "&title_type=feature,tv_series&keywords=superhero"
    //var requestUrl = "https://imdb-api.com/API/AdvancedSearch/k_zzx14p64?title="+userSearch+searchParams;
    var featContainer = document.getElementById('hero-feature');
var requestUrl = "https://imdb-api.com/API/AdvancedSearch/k_zzx14p64?title=black panther&title_type=feature,tv_series&keywords=superhero"

    fetch(requestUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

        var movieTitle = document.createElement('h3');
        var moviePoster = document.createElement('figure');

        movieTitle.textContent = data.results[0].title;
        moviePoster.appendChild(document.createElement('img'));
        moviePoster.src = data.results[0].image;
        
        featContainer.append(movieTitle);
        featContainer.append(moviePoster);

      
    })






