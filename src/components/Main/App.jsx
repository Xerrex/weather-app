import React from 'react';
import axios from "axios";
import "./app.scss";
import TopSection from "../Top/topSection";
import BottomSection from "../Bottom/bottomSection";

const WEATHER_KEY = "dc06ed8decc9484897f151423192506";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cityName:"Doha",
      foreCastDays:5,
      isLoading:true
    };
  }

  componentDidMount(){
    const { cityName, foreCastDays} = this.state;
    const URL = `http://api.apixu.com/v1/forecast.json?key= ${WEATHER_KEY} &q=${cityName}&days=${foreCastDays}`;
    axios.get(URL)
    .then((res)=>{
      return res.data;
    })
    .then((data)=> {
      this.setState({
        isLoading:false,
        temp_c: data.current.temp_c,
        isDay: data.current.is_day,
        text: data.current.condition.text,
        iconURL: data.current.condition.icon
      });
    })
    .catch((error)=>{
      console.error("Cannot fetch weather data from API", error);
    })
  }

  render(){
    const  { isLoading, cityName, temp_c, isDay, text, iconURL}= this.state;
    return (
      <div className="app-container">
        <div className="main-container">
          {isLoading && <h3>Loading Weather ...</h3>}
          {!isLoading &&
          <div className="top-section">
            <TopSection
              location={cityName}
              temp_c={temp_c}
              isDay={isDay}
              text= {text}
              iconURL={iconURL}
            />
          </div>}
          
          <div className="bottom-section">
            <BottomSection/>
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
