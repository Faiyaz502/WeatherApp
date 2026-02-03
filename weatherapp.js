
  const searchInput = document.getElementById("search");
  const locationEl = document.getElementById("location");
  const tempEl = document.getElementById("temperature");
 const description = document.getElementById("description");
 const minT = document.getElementById("min");
 const maxT = document.getElementById("max");
 const date = document.getElementById("date");
  const icon = document.querySelector(".icon");
  
   const btn = document.querySelector("#search-box button");

   const searchbox =document.getElementById("search-box");

      let cityName = "Dhaka"
                

                searchbox.addEventListener("submit",(e) => {
                    e.preventDefault() ;

                    let input = document.querySelector("#search-box input") ;

                    cityName = input.value ;

                    getWeather();

                    input.innerHTML = "";
                 

                })









const getWeather = async () => {


            try{
             
                
            

                const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=50019250366ae593ce5dd261cb5d5189`;

                const response = await fetch(weatherUrl);
                const data = await response.json();

                console.log(data);
                

               const {main,name,weather,wind,sys,dt} = data ;


            /// get the actual countryName
                const regionNamesInEnglish = new Intl.DisplayNames(["en"], { type: "region" });

                
            /// to get date and time
            
            let currDate = new Date(dt*1000);

            console.log(currDate);

           

            const option = {
                weekday : "long",
                year: "numeric",
                month : "long",  
                day : "numeric",
                hour: "numeric",
                minutes: "numeric",


            };


            const formatter = new Intl.DateTimeFormat("en-US",option);

            const formatterData = formatter.format(currDate);





         ///    
            
                


       ////assigning the values to HTML

             locationEl.innerHTML = `${name} , ${regionNamesInEnglish.of(sys.country)}`;

             date.innerHTML = formatterData ;


             tempEl.innerHTML = `${main.temp}&#176 F` ;

             minT.innerHTML = `MIN-${main.temp_min}&#176 F`;
             maxT.innerHTML = `MAX-${main.temp_max}&#176 F`;

             description.innerHTML = `${weather[0].main}`;

             icon.innerHTML = `<img src = "https://openweathermap.org/img/wn/${weather[0].icon}@4x.png" />`;




            }catch(err){

                console.log("fetching failed");
                
            }




}










   document.body.addEventListener("load",getWeather());


