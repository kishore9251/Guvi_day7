// d. Print the total population of countries using reduce function

var request = new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3.1/all");

request.send();

request.onload = function () {
    var countriesData = JSON.parse(request.response);
    var total = countriesData.reduce((acc,ele)=>{
        return acc+ele.population;
    },0);
    console.log(total);
}