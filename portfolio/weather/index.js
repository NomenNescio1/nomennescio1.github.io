/*$(document).ready(function(){   
if(navigator.geolocation){
  navigator.geolocation.getCurrentPosition(function(position){
      $.ajax({
    url: 'https://fcc-weather-api.glitch.me/api/current?',
    type:'GET', 
    success: function(value){  
      lat = position.coords.latitude;
      lon = position.coords.longitude;
      we = value.weather
      $("#weather").html("latitude:" + position.coords.latitude + "<br>longitude: " +position.coords.longitude);
    }
    
  });
  });
};  
});*/

var we = '';
var lat =0;
var lon=0;

$(document).ready(function(){
  
  if(navigator.geolocation){
     navigator.geolocation.getCurrentPosition(function(position){
      lat = position.coords.latitude;
      lon = position.coords.longitude;
      getW(lat + ',' + lon);   
       
     });
  }
});
function getW(location, woeid){
  $.simpleWeather({
    location:location,
    woeid:woeid,
    unit: 'f',
    success: function(value){
    $("#icono").addClass("icon-"+value.code);   
    $("#temp").text(value.temp+" "+value.units.temp + " | " + value.city + " | " + value.currently);
    //$("city").text(value.city);
   // $("#actual").text(value.currently); 
      
    $("#change").on("click", function(){
 var clicks = $(this).data('clicks');
  if (clicks) {
      $("#temp").text(value.temp+" "+value.units.temp + " | " + value.city + " | " + value.currently);
    
  } else {
     $("#temp").html(value.alt.temp+" &deg;C"  + " | " + value.city + " | " + value.currently);    
    
  }
  $(this).data("clicks", !clicks);
  });
    }
  });
}

  
    
    
