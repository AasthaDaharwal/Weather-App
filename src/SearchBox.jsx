import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "a761f575a65aeeff45056a6b36a54716";

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();

            if (!jsonResponse.main) {
                throw new Error(jsonResponse.message || "City not found");
            }

            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };

            console.log(result);
            return result;
        } catch (err) {
            console.error("Error fetching weather data:", err.message);
            return null;
        }
    };

    let handleChange = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = async (event) => {
        event.preventDefault();
        console.log(city);
        setCity("");

        let newInfo = await getWeatherInfo();
        if (newInfo) {
            updateInfo(newInfo);
            setError(false);
        } else {
            setError(true);
        }
    };

    return (
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="Enter City"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                    className="text-field"
                />
                <Button variant="contained" type="submit" className="search-button">Search</Button>
            </form>
            {error && <p className="error-message">City not found. Please try again.</p>}
        </div>
    );
}

