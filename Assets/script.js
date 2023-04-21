var option;
var searchText;
async function OMDbData() {
    var key = '93572ae7';
    var option = '';
    var searchVal;
    var movie = document.querySelector('#movies').checked;
    var series = document.querySelector('#shows').checked;
    if(landingInput.value !== ''){searchVal = landingInput.value};
    console.log(landingInput.value)
    if(resultInput.value !== ''){searchVal = resultInput.value};
    console.log(resultInput.value)
    if(movie == true){option = 'movie'};
    if(series == true){option = 'series'};
    console.log(searchVal);
    // console.log(landingInput.value)
    const response = await fetch("http://www.omdbapi.com/?" + 'apikey='+key+'&s='+searchVal+'&type='+option);
    const jsonData = await response.json();
    // searchVal = '';
    // console.log(searchVal);
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
    // function getOption() {
    //     selectElement = document.querySelector('#movies');
    //     option = selectElement.value;
    //     return option;
    // }

    async function redditData() {
        var searchVal;
        if(landingInput.value !== ''){searchVal = landingInput.value};
        console.log(landingInput.value)
        if(resultInput.value !== ''){searchVal = resultInput.value};
        const response = await fetch("https://www.reddit.com/search.json?" + 'q='+searchVal+'&sort=top'+'&limit=5');
        const jsonData = await response.json();
        console.log(jsonData)
        var results6 = jsonData.data.children[0].data.title;
        var results7 = jsonData.data.children[1].data.title;
        var results8 = jsonData.data.children[2].data.title;
        var results9 = jsonData.data.children[3].data.title;
        var results10 = jsonData.data.children[4].data.title;
        // var results11 = jsonData.data.children[5].data.title;
        document.getElementById("result6").innerHTML = results6;
        document.getElementById("result7").innerHTML = results7;
        document.getElementById("result8").innerHTML = results8;
        document.getElementById("result9").innerHTML = results9;
        document.getElementById("result10").innerHTML = results10;
        // document.getElementById("result11").innerHTML = results11;
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
    return searchText;
};

// Waits for the search button to be pressed
buttonSearchLanding.addEventListener('click', function() {
    firstSearch();
    OMDbData();
    redditData();

});

function secondSearch() {
    const searchText = resultInput.value;
    console.log(searchText);
    // Hides the landing div
    landingPageEl.classList.add('is-hidden');
    // Shows results div
    resultPageEl.classList.remove('is-hidden');
    // Changes result page search bar text
    resultInput.value = searchText;
    
    OMDbData();
    redditData();
};

