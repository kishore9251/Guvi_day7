// b. Get all the countries with a population of less than 2 lakhs using Filter function

var request = new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3.1/all");

request.send();

request.onload = function (){
    var restCountries = JSON.parse(request.response);
    var countries = restCountries.filter((ele)=>{
        return ele.population < 200000;  });
    for(let i=0; i<countries.length; i++){
        console.log(countries[i].name.common + " : " + countries[i].population);
    }
}
