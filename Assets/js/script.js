
//Marvel API request

let characterSearch = "thor"
let marvelAPIKey = "c44516421d70a8db4bf8fede1fc59165"


let bioRequestUrl = "https://gateway.marvel.com/v1/public/characters?name="+characterSearch+"&limit=10&apikey="+marvelAPIKey

//fetch bio

fetch(bioRequestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (characterData) {
       console.log("expected",characterData)

       let characterBio = characterData.data.results[0].description
       console.log(characterBio)

        //    let bioArea = document.getElementById("characterBio")
        //     bioArea.textContent=characterBio

       let characterID=characterData.data.results[0].id 
       console.log(characterID)

     //fetch 3 most recent issues
        
        let comicsRequestUrl= "https://gateway.marvel.com:443/v1/public/characters/"+characterID+"/comics?format=comic&formatType=comic&orderBy=-focDate&limit=3&apikey="+marvelAPIKey

        fetch(comicsRequestUrl)
        .then (function(response2){
         return response2.json()
        })
            .then (function(comicData){
            console.log(comicData)

           let comic1 = comicData.data.results[0].title
           let comic2 = comicData.data.results[1].title
           let comic3 = comicData.data.results[2].title

           let comicImgUrl1 = comicData.data.results[0].images[0].path
           let comicImgUrl2 = comicData.data.results[1].images[0].path
           let comicImgUrl3 = comicData.data.results[2].images[0].path

           let extention = ".jpg"
        })

    });

//var searchButton = document.querySelector("search-button")



  

    // var userSearch = "thor"
    // var searchParams = "&title_type=feature,tv_series&keywords=superhero"
    // var requestUrl = "https://imdb-api.com/API/AdvancedSearch/k_zzx14p64?title="+userSearch+searchParams;


    // var featContainer = document.getElementById('hero-feature');


    // fetch(requestUrl)
    // .then(function (response) {
    //      return response.json();
    //  })
    //  .then(function (data) {
    //      console.log(data);
    //  })
     
     
    
   

      
     






