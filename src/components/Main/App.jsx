import React from 'react';
import axios from "axios";
import "./app.scss";
import TopSection from "../Top/topSection";
import BottomSection from "../Bottom/bottomSection";
import API_ID from '../../resources/api_key'

const appID = API_ID;

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cityName:"Doha",
      units:"metric",
      isLoading:true

    };
    //this.getLocationWeather.bind(this);
    //this.getDateFromTimestamp.bind(this);
    //this.isDayCheck.bind(this)
  }

  getLocationWeather(){
    const { cityName, units} = this.state;
    const base_api_url ="https://api.openweathermap.org/data/2.5/weather?";
    const params = `q=${cityName}&appid=${appID}&units=${units}`
    const URL = `${base_api_url}${params}`;

    const base_iconURL = "http://openweathermap.org/img/wn/";
    const icon_size = "@2x.png";
    axios.get(URL)
    .then((res)=>{
      return res.data;
    })
    .then((data)=> {
      const todays_date =this.getDateFromTimestamp(data.dt);
      const iconURL = `${base_iconURL}${data.weather[0].icon}${icon_size}`;
      const isDay = this.isDayCheck(data.dt, data.sys.sunrise);
      this.getLocationWeatherForecast(data.coord)

      this.setState({
        isLoading:false,
        todays_date: todays_date,
        temp_c: data.main.temp,
        isDay: isDay,
        text: data.weather[0].description,
        iconURL: iconURL
      });
    })
    .catch((error)=>{
      if(error) console.error("Cannot fetch weather data from API", error);
    });
  }

  getLocationWeatherForecast(coord){
    const {lat, lon} = coord
    //https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
    const base_api_url = "https://api.openweathermap.org/data/2.5/onecall?"
    let coords = `lat=${lat}&lon=${lon}`
    let exclude = "&exclude=minutely,hourly,current,alerts"
    let units = "&units=metric"
    let appid = `&appid=${appID}`

    let url = `${base_api_url}${coords}${exclude}${units}${appid}`

    axios.get(url)
    .then((res)=>{
      return res.data
    }).then((data)=>{
      //here is where the works happen
      this.setState({
        daysForecast: data.daily
      })
      
    }).catch((error)=>{
      if(error) console.error("There was a problem fetching forecast data", error);
    }); //end axios

  }

  getDateFromTimestamp(UNIX_timestamp){
    let a = new Date(UNIX_timestamp * 1000);
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const year = a.getFullYear();
    const month = months[a.getMonth()];
    const date = a.getDate();
    const hour = a.getHours();
    const min = a.getMinutes();
    const sec = a.getSeconds();
    const full_time = `${date} ${month} ${year} ${hour}:${min}:${sec}`;
    return full_time;
  }

  isDayCheck(current_time, sunrise_time){
    if (current_time < sunrise_time){
        return false;
    }
    else{
      return true;
    }
  }

  componentDidMount(){
    const { eventEmitter } = this.props;

    this.getLocationWeather();
    eventEmitter.on("updateWeather", (data)=>{
      this.setState({cityName: data}, ()=>this.getLocationWeather());
      console.log("locationName", data);
    });
  }

  render(){
    const  { isLoading, todays_date, cityName, temp_c, isDay, text, iconURL, daysForecast}= this.state;

    return (
      <div className="app-container">
        <div className="main-container">
          {isLoading && <h3>Loading Weather ...</h3>}
          {!isLoading &&
          <div className="top-section">
            <TopSection
              todays_date={todays_date}
              location={cityName}
              temp_c={temp_c}
              isDay={isDay}
              text= {text}
              iconURL={iconURL}
              eventEmitter={this.props.eventEmitter}
            />
          </div>}
          
          <div className="bottom-section">
            <BottomSection daysForecast={daysForecast}/>
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
