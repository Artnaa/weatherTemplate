

let weather = {
  apiKey: '29a8ed43ad9a5e6b08bc55dad8de04e4',

  fetchWeather: function (city) {
    fetch('https://api.openweathermap.org/data/2.5/weather?units=metric&q='
      + city + '&appid='
      + this.apiKey

    )
      .then((resp) => resp.json())
      .then((data => this.displayWeather(data)))

      .catch(function checkinput() {
        var element = document.getElementById('catchText');
        element.classList.add('active');

        var elementWeather = document.querySelector('.weather')
        elementWeather.classList.add('aactive');
        console.log(elementWeather);
      })

  },



  displayWeather: function (data) {
    const { name } = data
    const { icon, description } = data.weather[0]
    const { temp, humidity } = data.main
    const { speed } = data.wind
    console.log(name, icon, description, temp, humidity, speed);
    document.querySelector('.city').innerHTML = 'Weather in ' + name;
    document.querySelector('.icon').src = 'http://openweathermap.org/img/wn/' + icon + '@2x.png';
    document.querySelector('.temp').innerText = Math.round(data.main.temp) + '°c';
    document.querySelector('.humidity').innerHTML = 'Humidity' + '' + humidity + '%';
    document.querySelector('.wind').innerHTML = 'Wind speed' + '   ' + speed + ' ' + 'км/ч';
    document.body.style.backgroundImage = "url('https://source.unsplash.com/random/1600×900/?" + name + "')";
    var element = document.getElementById('catchText');
    element.classList.remove('active')
    var elementWeather = document.querySelector('.weather')
    elementWeather.classList.remove('aactive');
  },



  search: function () {
    this.fetchWeather(document.querySelector('.search_bar').value)
  },
}

let x = document.querySelector('.search button')

x.addEventListener('click', function () {
  weather.search()
  document.querySelector('.search_bar').value = '';
})

document.querySelector('.search_bar').addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    weather.search();
    document.querySelector('.search_bar').value = '';

  }
});

