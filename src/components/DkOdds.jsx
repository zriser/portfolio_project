import { useState, useEffect } from "react";
import axios from "axios";

function DkOdds({ eventId }) {
  const [odds, setOdds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define the ESPN API endpoint URL
    const apiUrl = `https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/events/${eventId}/competitions/${eventId}/odds/40?lang=en%C2%AEion=us`;

    async function fetchData() {
      try {
        const response = await axios.get(apiUrl);
        const data = response.data;

        if (data && data.overUnder) {
          const overUnder = data.overUnder;
          // const awayTeamOdds = data.awayTeamOdds.moneyLine;
          // const homeTeamOdds = data.homeTeamOdds.moneyLine;
          setOdds(overUnder);
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

  // console.log(odds);

  return odds;
}
export default DkOdds;
