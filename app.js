// build activity object
var activities = {
    morning: [],
    afternoon: [],
    evening: []
}

// generate activities dynamically

/* 
function filterActivities() {

    var firstActivity =  document.querySelector('.activity-wrapper')
    
    firstActivity.classList.add('disable')

}

function getWeather(latitude, longitude){
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=a261b7b95b99fd00f34b9db594968905`)
        .then(response => {
            if (response.status !== 200) {
                console.log(`Status Code: ${response.status}`);
                return
            }

            response.json().then(data => {
                console.log(data);
                showWeather(data)
            });
        })
        .catch(error => {
            console.log(`Fetch Error: ${error}`);
        })
}

function showWeather(data) {
    //var city = document.createElement('h1')
    //city.innerText = `City: ${data.name}`;

    var temperature = document.createElement('label')
    temperature.innerText = `Temperature: ${data.main.temp}`

    //wrapper.appendChild(city)
    //wrapper.appendChild(temperature)

    document.getElementById('weather').appendChild(temperature)

}

function getUserLocation() {
    if (!navigator.geolocation) {
        console.log('Browser doesn\'t support location services.');
    }

    navigator.geolocation.getCurrentPosition(position => {
        //console.log(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`);

        getWeather(position.coords.latitude, position.coords.longitude);
    }, error => {
        if(error.PERMISSION_DENIED){
            console.log('User have denied the permission for location services.');
        } else {
            debugger
        }
    })
}

getUserLocation()
filterActivities() */