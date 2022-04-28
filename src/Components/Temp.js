import React,{useState,useEffect} from 'react'
import WeatherCard from './WeatherCard';


const Temp = () => {
    const [searchValue, setSearchValue] = useState("Pune");
    // console.log(searchValue);
    const [tempInfo, setTempInfo] = useState({});
    let getWeatherInfo = ()=>{
        console.log("fn called");
        let url =`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=80ece7b44358d437564aacffb1662444`
        fetch(url).then((responce)=>{
            // console.log("hiii");
            return responce.json();
        }).then((data)=>{
            console.log(data);
            let {temp,humidity,pressure} = data.main;
            console.log(temp);
            let {main:weatherMood} = data.weather[0];
            let {country,sunset} = data.sys;
            let {name} = data;
            let {speed} = data.wind;
            let myNewWeatherInfo ={
                temp,
                humidity,
                pressure,
                weatherMood,
                country,
                sunset,
                name,
                speed,
            };
            setTempInfo(myNewWeatherInfo);
        })
        // let res = await fetch(url);
        // let data =  await res.json();
        // console.log(data);
        
       
        
    }
   
    useEffect(()=>{
        console.log("useeffect");
        getWeatherInfo();
    },[]);
    // console.log("render");
  return (
    <>
      <div className="searchContainer">
          <div className="search">
              <input type="search" placeholder='search...' id = 'search' value={searchValue} onChange={(e)=>setSearchValue(e.target.value)}/>
              <button id='button' onClick={getWeatherInfo}>Submit</button>
          </div>
      </div>

        {/* weather card  */}
        <WeatherCard tempInfo = {tempInfo} />
       
    </>
  )
}

export default Temp