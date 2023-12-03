import { useState, useEffect } from "react";
import axios from "axios";

function Weather({ zipCode }) {
  const [weather, setWeather] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define the ESPN API endpoint URL
    const apiUrl = `http://127.0.0.1:5000/weather?zipcode=${zipCode}`;

    async function fetchData() {
      try {
        const response = await axios.get(apiUrl);
        const data = response.data;

        if (data) {
          setWeather(data);
        } else {
          throw new Error("No data available");
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []); // The empty dependency array ensures this effect runs only once

  if (zipCode == "Game Ended") {
    return "Game Ended - No Weather";
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return weather.main + " - " + weather.temperature + "℉";
}
export default Weather;
