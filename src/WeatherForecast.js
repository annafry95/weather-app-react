import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "fbeo6b3af9d08bb94a5d7e475ct03604";
  let city = props.cityName;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div> icon{" "}
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-max">19°</span>{" "}
            <span className="WeatherForecast-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
