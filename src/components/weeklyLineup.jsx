import React, { useState, useEffect } from "react";
import axios from "axios";

function ESPNShortNames() {
  const [shortNames, setShortNames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define the ESPN API endpoint URL
    const apiUrl =
      "https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard?dates=2023&seasontype=2&week=8";

    async function fetchData() {
      try {
        const response = await axios.get(apiUrl);
        const data = response.data;

        // Check if the 'leagues' field is available and contains data
        if (data && data.events) {
          const shortNamesList = data.events.reduce((names, events) => {
            if (events) {
              names.push(events);
            }
            return names;
          }, []);
          setShortNames(shortNamesList);
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Away</th>
            <th>Weather</th>
            <th>Over/Under</th>
            <th>Venue</th>
            <th>Home</th>
          </tr>
        </thead>
        <tbody>
          {shortNames.map((name, index) => (
            <tr key={name.id}>
              <td>{name.name.split(" at ")[0]}</td>
              <td></td>
              <td></td>
              <td></td>
              <td>{name.name.split(" at ")[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ESPNShortNames;
