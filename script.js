let url = "https://opensky-network.org/api/flights/arrival?airport=LFPG&begin=";

let date = new Date();
    console.log(date);
    console.log(date.getTime());

let currentTime = Math.floor(date.getTime()/1000)-18000;
let endTime = Math.floor(date.getTime()/1000) + 18000;
console.log(endTime);
console.log(currentTime);


url += currentTime + "&end=" + endTime;
console.log(url);


fetch(url)
.then((response) => {
 return response.json();
})
.then((data) => {
    let callsign = data[0].callsign;
    console.log(callsign);
    console.log(data);
    console.log(data[0]);
    
})
.catch(function(){

});


