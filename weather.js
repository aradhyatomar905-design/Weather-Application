let searchBtn = document.querySelector("#search-btn");
let result = document.querySelector("#result");

const getWeatherData  = async ()=> {
    try {
        let cityName = document.querySelector("#city-name").value.trim();
         if(!cityName){
            result.innerHTML=`<p class="text-red-700 text-center mt-4 font-semibold">Please Enter a cityname..... </p>`;
         }
    } catch (error) {
        console.log(error,"Error in Fetching weather details");
        
    }
    
}
searchBtn.addEventListener("click",getWeatherData);