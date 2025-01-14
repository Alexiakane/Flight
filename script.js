// const divListVols = document.createElement("select");
const divListeVols = document.createElement("div");
const container = document.createElement("div");
const body = document.querySelector("body");
const countryVol = document.createElement("div");
const airportInfo = document.createElement("div");

divListeVols.className = "listeVols";
countryVol.className = "country";
container.className = "container";
let flags = "https://flagcdn.com/en/codes.json";
let url =
  "https://opensky-network.org/api/flights/departure?airport=LFPG&begin=";

let date = new Date();

let currentTime = Math.floor(date.getTime() / 1000) - 86400;
let endTime = Math.floor(date.getTime() / 1000) - 80400;

url += currentTime + "&end=" + endTime;
// Liste de departs de Paris CDG
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // console.log(data);

    // pour chaque vol on rfécupere les ICAO  des aéroports d'arrivée
    data.forEach((vol, index) => {
      let arrival = vol.estArrivalAirport;
      // console.log(index);
      // console.log(data);

      let url2 = "https://airportdb.io/api/v1/airport/";
      url2 += arrival.toString() + "?apiToken=65eacd634d3a962e1f14193e000540024c2fd4818d02b281a09cd5000d7c02f1a857bfabf62e595f1ba161b99a7f4059";
      // console.log(url2);
      fetch(url2)
        .then((response) => {
          return response.json();
        })
        .then((data2) => {
          let name = data2.name;
          let country = data2.country.name;

          console.log(name);
          // const volElement = document.createElement("option");
          const volElement = document.createElement("div");
          volElement.className = "volCarte";

          // volElement.innerText = name;
          volElement.innerHTML = name;
          volElement.addEventListener("click", function () {
            countryVol.innerHTML = "";
            const para1 = document.createElement("p");
            const para2 = document.createElement("p");
            const para3 = document.createElement("p");
            const para4 = document.createElement("a");
            const imgFlag = document.createElement("img");
            para1.className = "elemCountry";
            para1.innerText = country;
            countryVol.append(para1);
            
            let flag = data2.iso_country;
            imgFlag.src = "https://flagcdn.com/80x60/"+ flag.toLowerCase() +".png";
            countryVol.append(imgFlag);

            para2.className = "elemMunicipality";
            para2.innerText = "Localisation : " + data2.municipality;
            countryVol.append(para2);

            para3.className = "elemMunicipality";
            para3.innerText = "Region : " + data2.region.name;
            countryVol.append(para3);

            para4.className = "elemMunicipality";
            para4.innerText = "lien : " + data2.home_link;
            para4.href = data2.home_link;
            countryVol.append(para4);

            divListeVols.append(countryVol);
            container.append(countryVol);
          });
          divListeVols.append(volElement);
        });
    });
  })
  .catch(function () { });

container.append(divListeVols);
body.append(container);
