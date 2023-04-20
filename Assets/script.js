var option;
async function OMDbData() {
    var searchPar = document.querySelector('#srch').value;
    console.log(searchPar)
    var key = '93572ae7';
    //type = movie,series,episode
    //s = search parameter
    //y = year of release
    // var movie = document.querySelector(‘#movie’).checked;
    // var series = document.querySelector(‘#movie’).checked;
    // var episodes = document.querySelector(‘#movie’).checked;
    // if(movie == true){m = ‘movie’}
    // if(series == true){s = ‘series’}
    getOption()
    console.log(option)
    const response = await fetch("http://www.omdbapi.com/?" + 'apikey='+key+'&s='+searchPar+'&type='+option);
    const jsonData = await response.json();
    console.log(jsonData)
    var results = jsonData.Search[0].Title;
    var results1 = jsonData.Search[1].Title;
    var results2 = jsonData.Search[2].Title;
    var results3 = jsonData.Search[3].Title;
    var results4 = jsonData.Search[4].Title;
    var results5 = jsonData.Search[5].Title;
    document.getElementById("result").innerHTML = results;
    document.getElementById("result1").innerHTML = results1;
    document.getElementById("result2").innerHTML = results2;
    document.getElementById("result3").innerHTML = results3;
    document.getElementById("result4").innerHTML = results4;
    document.getElementById("result5").innerHTML = results5;
}
    function getOption() {
        selectElement = document.querySelector('#select1');
        option = selectElement.value;
        return option;
    }

    async function redditData() {
        var searchPar = document.querySelector('#srch').value;
        console.log(searchPar)
        // getOption()
        // console.log(option)
        const response = await fetch("https://www.reddit.com/search.json?" + 'q='+searchPar+'&sort=top'+'&limit=5');
        const jsonData = await response.json();
        console.log(jsonData)
        var results = jsonData.Search[0].Title;
        var results1 = jsonData.Search[1].Title;
        var results2 = jsonData.Search[2].Title;
        var results3 = jsonData.Search[3].Title;
        var results4 = jsonData.Search[4].Title;
        var results5 = jsonData.Search[5].Title;
        document.getElementById("result").innerHTML = results;
        document.getElementById("result1").innerHTML = results1;
        document.getElementById("result2").innerHTML = results2;
        document.getElementById("result3").innerHTML = results3;
        document.getElementById("result4").innerHTML = results4;
        document.getElementById("result5").innerHTML = results5;
    }

// Landing page search bar elements
const buttonSearchLanding = document.getElementById('butSearchLanding');
const landingInput = document.getElementById('userInputLanding');
// Results page elements
const buttonSearchResult = document.getElementById('butSearchResults');
const resultInput = document.getElementById('userInputResults');

// Controls whats visable and whats hidden
// Landing Page El
const landingPageEl = document.getElementById('containerLanding');
// Results Page El
const resultPageEl = document.getElementById('containerResults');



// When user first loads page, firstSearch function gets
// user input and stores into searchText
function firstSearch() {
    const searchText = landingInput.value;
    console.log(searchText);
    // Hides the landing div
    landingPageEl.classList.add('is-hidden');
    // Shows results div
    resultPageEl.classList.remove('is-hidden');
    // Changes result page search bar text
    resultInput.value = searchText;
};

// Waits for the search button to be pressed
buttonSearchLanding.addEventListener('click', function() {
    firstSearch();
});

