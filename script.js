$(document).ready(function() {
  $.ajax({
    url: "https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=9eec3e7f0ee03f9cde18f48c0452eef4&units=metric"
  }).done(function(data) {
    console.log(data)
    $(".cityname").html(data.name)
    $(".temp").html(data.main.temp)
    $(".temp_min").html(data.main.temp_min)
    $(".pressure").html(data.main.pressure)
    $(".visibility").html(data.visibility)
    $(".humidity").html(data.main.humidity)
    $(".deg").html(data.wind.deg)
    $(".tomorrow").html(data.main.feels_like)
    //$(this).addClass("done");
  });
})
