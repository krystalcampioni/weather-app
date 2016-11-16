import styles from './index.scss';
import React from 'react';
import axios from 'axios';

export default class App extends React.Component {
  componentWillMount() {
  navigator.geolocation.getCurrentPosition(function(location) {
    console.log(location.coords.latitude);
    console.log(location.coords.longitude);
    console.log(location.coords.accuracy);
  });

  axios.get('http://api.openweathermap.org/data/2.5/weather?q=sao_paulo&units=metric&APPID=0ecce192500d1a71eb05d1ef815147cc')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  render() {
    return (
      <div>
        <h1>It Works!</h1>
        <p>This React project just works including <span className={styles.redBg}>module</span> local styles.</p>
        <p><a href="/" className="btn btn-primary btn-lg">Enjoy!</a></p>
      </div>
    )
  }
}
