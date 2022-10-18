var searchButtonEl = document.querySelector("#search-button");
var heroNameInput = document.querySelector("#enter-character");
var heroName = ""

// This function is setting the search input in local storage to be used on the results script.
function onSearchSubmit(event) {

    heroName = heroNameInput.value

    localStorage.setItem("character-name",heroName )
    window.location.href = "./Assets/results.html"
} 

searchButtonEl.addEventListener('click', onSearchSubmit);



