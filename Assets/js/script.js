//Marvel API request
let characterName = document.getElementById("entercharecter");
let characterSearch = "thor";
let marvelAPIKey = "c44516421d70a8db4bf8fede1fc59165";

/*fetchButton.addEventListener("click", function () {
  characterSearch = characterName.value;
  console.log(characterSearch);
});*/

let bioRequestUrl =
  "https://gateway.marvel.com/v1/public/characters?name=" +
  characterSearch +
  "&limit=10&apikey=" +
  marvelAPIKey;

//fetch bio

fetch(bioRequestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (characterData) {
    console.log("expected", characterData);

    let characterBio = characterData.data.results[0].description;
    console.log(characterBio);

    //    let bioArea = document.getElementById("characterBio")
    //     bioArea.textContent=characterBio

    let characterID = characterData.data.results[0].id;
    console.log(characterID);

    //fetch 3 most recent issues

    let comicsRequestUrl =
      "https://gateway.marvel.com:443/v1/public/characters/" +
      characterID +
      "/comics?format=comic&formatType=comic&orderBy=-focDate&limit=3&apikey=" +
      marvelAPIKey;

    fetch(comicsRequestUrl)
      .then(function (response2) {
        return response2.json();
      })
      .then(function (comicData) {
        console.log(comicData);

        let comic1 = comicData.data.results[0].title;
        let comic2 = comicData.data.results[1].title;
        let comic3 = comicData.data.results[2].title;

        let comicImgUrl1 = comicData.data.results[0].images[0].path;
        let comicImgUrl2 = comicData.data.results[1].images[0].path;
        let comicImgUrl3 = comicData.data.results[2].images[0].path;

        let comicOne = document.getElementById("comic1");
        let comicUrl1 = comicImgUrl1 + ".jpg";
        comicOne.setAttribute("src", comicUrl1);

        let comicTwo = document.getElementById("comic2");
        let comicUrl2 = comicImgUrl2 + ".jpg";
        comicTwo.setAttribute("src", comicUrl2);

        let comicThree = document.getElementById("comic3");
        let comicUrl3 = comicImgUrl3 + ".jpg";
        comicThree.setAttribute("src", comicUrl3);
      });
  });

var searchParams = "&title_type=feature,tv_series&keywords=superhero";
var requestUrl =
  "https://imdb-api.com/API/AdvancedSearch/k_zzx14p64?title=" +
  characterSearch +
  searchParams;

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (movieData) {
    console.log(movieData);

    let movie0 = movieData.results[0].title;
    let movie1 = movieData.results[1].title;
    let movie2 = movieData.results[2].title;

    let poster0 = movieData.results[0].image;
    let poster1 = movieData.results[1].image;
    let poster2 = movieData.results[2].image;

    console.log("expected-movie-title-0", movie0);
    console.log("expected-poster-0", poster0);

    let currentSelector = document.querySelector("#title-0");
    currentSelector.textContent = movie0;
    currentSelector = document.querySelector("#poster-0");
    currentSelector.src = poster0;
    currentSelector = document.querySelector("#title-1");
    currentSelector.textContent = movie1;
    currentSelector = document.querySelector("#poster-1");
    currentSelector.src = poster1;
    currentSelector = document.querySelector("#title-2");
    currentSelector.textContent = movie2;
    currentSelector = document.querySelector("#poster-2");
    currentSelector.src = poster2;
  });
