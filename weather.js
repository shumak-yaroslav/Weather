let website = "https://api.openweathermap.org/data/2.5/weather";
let cityName = "Minsk";
let id = "625144"
let appid = "f46d79c27b583ccb65a25ba89f055e8c";

var request = new XMLHttpRequest();
request.open('GET', `${website}?q=${cityName}&appid=${appid}`, true);

request.onload = function() {
	if (request.status >= 200 && request.status < 400) {
		var data = JSON.parse(request.responseText);
		let out = document.querySelector("#weather");
/*		out.innerHTML = 'City: <b>'+data.name+'</b><br>';
		out.innerHTML = 'Weather: <b>'+data.weather[0].main+'</b><br>';*/
		out.innerHTML = 'Temperature: <b>'+Math.round(data.main.temp-273)+'&#176;C</b><br>';

	}
};

request.send();