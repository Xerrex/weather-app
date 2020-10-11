## Weather App
![license](https://img.shields.io/github/license/mashape/apistatus.svg)

* The app shows the weather of a location and the forecast of the next 7 days. 

### Tools used:

  * [React](https://reactjs.org/) with [Create React App](https://github.com/facebook/create-react-app).
  * [Open Weather API](https://openweathermap.org)

### How to setup/run the app
* Clone the repo & Navigagte to the folder.
* Run to install dependancies run
  ```
  npm install
  ```

* Project requires an `API ID` obtain one [here](https://openweathermap.org/).
* Create an `api_key.js` file in the `src/resources` folder.
* Add the following lines to the file
  ```javascript
  const API_ID = "Your-appid-here";

  export default API_ID;
  ```


* To run the app
  ```
  npm start
  ```

  Runs the app in the development mode.<br>
  Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

  The page will reload if you make edits.<br>
  You will also see any lint errors in the console.

### App Testing
* coming soon


### To move app to Production
* Run this command
  ```
  npm run build
  ```

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
