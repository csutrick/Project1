async function OMDbData() {
    const response = await fetch("http://www.omdbapi.com/?" + new URLSearchParams({apikey:'93572ae7', s: 'avatar' }));
    response.searchParams.set()
    const jsonData = await response.json();
    console.log(jsonData);
}