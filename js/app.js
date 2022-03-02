const apiKey = `ab347755041ad62b6e35bcdd65b5ae88`;
const grtInput = () => {
    const inputValue = document.getElementById('city-input').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => steWeater(data))
}

const steWeater = (info) => {
    document.getElementById('city').innerText = `${info.name}`;
    document.getElementById('temp').innerText = `${info.main.temp}`;
    document.getElementById('weather').innerText = `${info.weather[0].main}`;
    const url = `http://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`;
    document.getElementById('temp-img').setAttribute('src', url);
}