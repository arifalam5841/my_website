function updateMap() {
  fetch('https://raw.githubusercontent.com/bence-toth/covid-data/main/data/countries.json')
    .then(response => response.json())
    .then(result => {
      console.log(result.countriesAndProvinces)
      result.countriesAndProvinces.forEach(element => {
        latitude = element.latitude
        longitude = element.longitude
        population = element.population
        if(population >5000000){
          color = "red"
        }
      
        else{
          color = `rgb(${population-545}, ${population - 5522185},${population +55})`

        }

      
        // marking  on map
        new mapboxgl.Marker({
          draggable: false,
          color: color
        })
          .setLngLat([longitude, latitude])
          .addTo(map);
      });
    })
}

updateMap()