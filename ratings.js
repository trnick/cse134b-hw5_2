$(function() {
    $.ajax({
        url: 'https://api.weather.gov/gridpoints/SGX/57,14/forecast/hourly'
    }).done(function(res) {
        document.getElementById('temperature').innerHTML = res.properties.periods[0].shortForecast + ' ' + res.properties.periods[0].temperature + '\u00B0F';
        const icon = document.getElementById('icon');
        if (res.properties.periods[0].shortForecast == 'Clear') {
            icon.src = "images/sunny.png";
        }        
        else if (res.properties.periods[0].shortForecast == 'Mostly Clear') {
            icon.src = "images/mostly.png";
        }
        else if (res.properties.periods[0].shortForecast == 'Cloudy' || res.properties.periods[0].shortForecast == 'Mostly Cloudy') {
            icon.src = "images/cloudy.png";
        }
        else {
            icon.src = "images/rainy.png";
        }
    });
});