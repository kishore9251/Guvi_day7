// a. Get all the countries from the Asia continent /region using the Filter function

var request = new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3.1/all");

request.send();

request.onload = function (){
    var countryData = JSON.parse(this.response);
    var countries = countryData.filter((element)=>{
        if(element.region == "Asia") return element.name;});
    for(let i=0; i<countries.length; i++){
        console.log(countries[i].name.common + " : " + countries[i].region);
    }
}