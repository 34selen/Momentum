const API_KEY="dda78a424124c3d1e0e32fe0473545ee"
function onGeoOk(position){
    const lat=position.coords.latitude;
    const lon=position.coords.longitude;
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&unit=metrix`
    console.log(lat,lon)
    console.log(url)
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
        const weather=document.querySelector("#weather span:first-child")
        const city=document.querySelector("#weather span:last-child")
        city.innerText=data.name;
        weather.innerText=data.weather[0].main; 
    })
};
function onGeoError(){
    alert("Can't find you. no weather for you.")
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);