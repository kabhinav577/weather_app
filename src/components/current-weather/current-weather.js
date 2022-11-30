import "./current-weather.css";

const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">Patna</p>
          <p className="weather-description">Sunny</p>
        </div>
        <img src="icons/01d.png" alt="weather" className="weather-icon" />
      </div>
      <div className="bottom">
        <p className="temperature">30&#8451;</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details : </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like </span>
            <span className="parameter-value">22&#8451;</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind </span>
            <span className="parameter-value">7 km/hr</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humididty </span>
            <span className="parameter-value">22%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure </span>
            <span className="parameter-value">1015 mbar</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
