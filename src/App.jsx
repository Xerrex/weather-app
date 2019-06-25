import React from 'react';
import "./sass/app.scss";
import TopSection from "./components/Top/topSection";
import BottomSection from "./components/Bottom/bottomSection"

class App extends React.Component {

  render(){
    return (
      <div className="app-container">
        <div className="main-container">
          <div className="top-section">
            <TopSection/>
          </div>
          <div className="bottom-section">
            <BottomSection/>
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
