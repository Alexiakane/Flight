let url = "https://opensky-network.org/api/flights/departure?airport=LFPG&begin=";

let date = new Date();

let currentTime = Math.floor(date.getTime()/1000)-86400;
let endTime = Math.floor(date.getTime()/1000)-80400;

url += currentTime + "&end=" + endTime;

fetch(url)
.then((response) => {
 return response.json();
})
.then((data) => {
    let arrival = data[46].estArrivalAirport;
    console.log(arrival);
    console.log(data);
    console.log(data[100]);
    let url2 = "https://airportdb.io/api/v1/airport/"
    url2 += arrival.toString() + "?apiToken=65eacd634d3a962e1f14193e000540024c2fd4818d02b281a09cd5000d7c02f1a857bfabf62e595f1ba161b99a7f4059"
    console.log(url2);
    fetch(url2)
    .then((response) => {
        console.log("bonjour");
        return response.json();
    })
    .then((data2) => {
        let name = data2.country.name;
        console.log(name);
    })
})
.catch(function(){

});


