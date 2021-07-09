const submitBtn = document.getElementById('submit');

submitBtn.addEventListener('click', function () {

    const input = document.getElementById('input').value;

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input + '&appid=617b6bd3e69101a57d658f5e610e7208').then(response => response.json()).then(data => {
        
        const cityName = data.name;
        const tem = data.main.temp;
        const temp = tem - 273.15;
        const description = data.weather[0].description;

        document.getElementById('city').innerText = cityName;
        document.getElementById('temp').innerText = temp.toFixed(2);
        document.getElementById('des').innerText = description;
    });
});