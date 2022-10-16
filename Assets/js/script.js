var searchButtonEl = document.querySelector("#search-button");
var heroNameInput = document.querySelector("#enter-character");
var heroName = ""
//Marvel API request


function onSearchSubmit(event) {

    heroName = heroNameInput.value

    localStorage.setItem("character-name",heroName )
    window.location.href = "./Assets/results.html"
} 

searchButtonEl.addEventListener('click', onSearchSubmit);



