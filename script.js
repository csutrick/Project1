async function OMDbData() {
    var searchPar = document.querySelector('#srch').value;
    console.log(search)
    var key = '93572ae7';
    //type = movie,series,episode
    //s = search parameter
    //y = year of release

    const response = await fetch("http://www.omdbapi.com/?" + 'apikey='+key+'&s='+searchPar);
    // response.searchParams.set()
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