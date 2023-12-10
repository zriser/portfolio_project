import { useState, useEffect } from "react";
import axios from "axios";
import DkOdds from "./DkOdds";
import AwayMoneyLine from "./AwayMoneyLine";
import HomeMoneyLine from "./HomeMoneyLine";
import CeasarsOdds from "./MGMOdds";
import MGMHomeTeam from "./MGMHomeTeam";
import MGMAwayTeam from "./MGMAwayTeam";
import Weather from "./weather";

function WeeklyLineup({ weekNumber }) {
  const [matchups, setMatchups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const onDataFetched = (fetchedData) => {
    setData(fetchedData);
  };

  useEffect(() => {
    // Define the ESPN API endpoint URL
    const apiUrl = `https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard?dates=2023&seasontype=2&week=${weekNumber}`;

    async function fetchData() {
      try {
        const response = await axios.get(apiUrl);
        const data = response.data;

        // Check if the 'leagues' field is available and contains data
        if (data && data.events) {
          const matchupsList = data.events.reduce((names, events) => {
            if (events) {
              names.push(events);
            }
            return names;
          }, []);
          setMatchups(matchupsList);
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
  }, [weekNumber]); // The empty dependency array ensures this effect runs only once

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <tbody>
      {matchups.map((event) => (
        <tr key={event.id}>
          <td style={{ border: "1px solid #ddd", padding: "8px" }}>
            {event.name.split(" at ")[0]}
          </td>
          <td style={{ border: "1px solid #ddd", padding: "8px" }}>
            <tr>
              DK: <AwayMoneyLine eventId={event.id} />
            </tr>
            <tr>
              MGM: <MGMAwayTeam eventId={event.id} />
            </tr>
          </td>
          <td style={{ border: "1px solid #ddd", padding: "8px" }}>
            <Weather
              zipCode={
                event.weather && event.weather.link && event.weather.link.rel[0]
                  ? event.weather.link.rel[0]
                  : "Game Ended"
              }
            />
          </td>
          <td style={{ border: "1px solid #ddd", padding: "8px" }}>
            <tr>
              DK: <DkOdds eventId={event.id} />
            </tr>
            <tr>
              MGM: <CeasarsOdds eventId={event.id} />
            </tr>
          </td>
          <td style={{ border: "1px solid #ddd", padding: "8px" }}>
            {event.competitions[0].venue.indoor ? "Indoor" : "Outdoor"}
          </td>
          <td style={{ border: "1px solid #ddd", padding: "8px" }}>
            <tr>
              <tr>
                DK: <HomeMoneyLine eventId={event.id} />
              </tr>
              <tr>
                MGM: <MGMHomeTeam eventId={event.id} />
              </tr>
            </tr>
          </td>
          <td
            style={{
              border: "1px solid #ddd",
              padding: "8px",
            }}
          >
            {event.name.split(" at ")[1]}
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default WeeklyLineup;
