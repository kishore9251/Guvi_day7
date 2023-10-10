// c. Print the following details name, capital, flag using forEach function

var request = new XMLHttpRequest;

request.open("GET","https://restcountries.com/v3.1/all");

request.send();

request.onload = function (){
    var countriesData = JSON.parse(request.response);
    countriesData.forEach(element => {
        console.log(element.name.common +" : "+ element.capital + " : "+ element.flag);
    });
}