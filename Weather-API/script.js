function convert(t){
    var f = ((t * 1.8) + 32),
        c = (t),
        k = (t + 273.15),
        display = document.getElementById("temp_display"),
        tIdF = document.getElementById("temp_F"),
        tIdC = document.getElementById("temp_C"),
        tIdK = document.getElementById("temp_K");
    
      if(tIdF.checked == true){
        display.innerHTML = Math.round(f) + " ?";
      }else if(tIdC.checked == true){
        display.innerHTML = c.toPrecision(3) + " ?";
      }else if(tIdK.checked == true){
        display.innerHTML = k.toPrecision(6) + " K";
      }
  }
  
  function pageSetup(data) {
    var weather = JSON.parse(data),
        // How will we set up a unit conversion function?
        description = document.getElementById("description"),
        location = document.getElementById("location"),
        icon = document.createElement("img"),
        tIdF = document.getElementById("temp_F"),
        tIdC = document.getElementById("temp_C"),
        tIdK = document.getElementById("temp_K");
    
    ////////////////Set Default Temperature//////////////////
      if(weather.sys.country == "US"){
        tIdF.checked = true;
      }else {
        tIdC.checked = true;
      }
    convert(weather.main.temp);
   /////////////////////////////////////////////////////////
    tIdF.addEventListener("click", function(){convert(weather.main.temp)});
    tIdC.addEventListener("click", function(){convert(weather.main.temp)});
    tIdK.addEventListener("click", function(){convert(weather.main.temp)});
   /////////////////////////////////////////////////////////
    document.getElementById("icon").appendChild(icon);
    icon.src = weather.weather[0].icon;
    
    description.innerHTML = weather.weather[0].description;
    location.innerHTML = weather.name + ", " + weather.sys.country;
    
    //console.log(weather);
  }
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getWeather);
    }
  }
  
  function getWeather(position) {
    var weatherAPI = "https://fcc-weather-api.glitch.me/api/current?",
      latitude = "lat=" + position.coords.latitude,
      longitude = "&lon=" + position.coords.longitude,
      request = weatherAPI + latitude + longitude,
      xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        pageSetup(xhttp.responseText);
      }
    };
    xhttp.open("GET", request, true);
    xhttp.send();
  }
  
  getLocation();