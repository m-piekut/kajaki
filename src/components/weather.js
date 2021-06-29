// api.openweathermap.org/data/2.5/forecast/daily?q={city name}&cnt={cnt}&appid={API key}

import { useEffect, useState } from "react"



const Weather = () => {
    const [dailyData, setDailyData] = useState('')
    const [localDailyData, setLocalDailyData] = useState('')
    
    
    const APIKey = '7e0ebe73694a3dc34d6b0b2bad8ac6f1'
    
    let city= 'harasiuki'
    const lat = 50.474561145972025
    const lon = 22.472851132598038
    let part = 'dayily'
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${part}&units=metric&appid=${APIKey}`
    // const date = new Date(1624874400*1000)

    // console.log(date.getUTCDate(), date.getMonth()+1, date.getFullYear())

    useEffect(()=>{
        if(localDailyData){
            setDailyData(localDailyData)
        }else{

            fetch(url)
            .then(res => res.json())
            .then(data => {
                setDailyData(data.daily)
                sessionStorage.setItem("localDailyData", JSON.stringify(data.daily))
            })
        }
        
        return()=>{
            setDailyData('')
        }
    },[localDailyData])
    useEffect(()=>{
        setLocalDailyData(JSON.parse(sessionStorage.getItem('localDailyData')))
        console.log(JSON.parse(sessionStorage.getItem('localDailyData')))
        return()=>{
            setLocalDailyData('')
        }
    },[])

    return ( 
        <div className="weather">
            <p>Pogoda</p>
            <div className="weather__header">
                <p>Data:</p>
                <p>Temperatura:</p>
                <p>Wilgotność:</p>
            </div>
                

                {dailyData && dailyData.map((day)=>{
                    const date = new Date(day.dt * 1000)
                    const day2 = date.getUTCDate() < 10 ? `0${date.getUTCDate()}` : date.getUTCDate() 
                    const month = date.getMonth() < 9 ? `0${date.getMonth()+1}` : date.getMonth()+1 
                    const displayDate = `${day2}-${month}-${date.getFullYear().toString().slice(2,4)}`
                    return(
                            <div className="weather__item" key={day.dt}>
                            <p>{displayDate}</p>
                            <p>{day.temp.day.toFixed()}°C</p>
                            <p>{day.humidity}%</p>
                    </div>

                        )
})}
                </div>
        
     );
}
 
export default Weather;