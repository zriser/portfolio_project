import { useState, useEffect } from "react";
import axios from "axios";

function Test({ eventId }) {
  const [odds, setOdds] = useState({
    homeTeamOdds: null,
    awayTeamOdds: null,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define the ESPN API endpoint URL
    const apiUrl = `https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/events/${eventId}/competitions/${eventId}/odds/40?lang=en&region=us`;

    async function fetchData() {
      try {
        const response = await axios.get(apiUrl);
        const data = response.data;

        if (data && data.homeTeamOdds) {
          const overUnder = data.overUnder;
          const awayTeamOddsMoneyLine = data.awayTeamOdds.moneyLine;
          const homeTeamOddsMoneyLine = data.homeTeamOdds.moneyLine;
          setOdds({ overUnder, awayTeamOddsMoneyLine, homeTeamOddsMoneyLine });

          // Pass homeTeamOddsMoneyLine to the parent component
          setHomeTeamOdds(homeTeamOddsMoneyLine);
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
  }, [eventId, setHomeTeamOdds]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  console.log(odds);
  return null;
}

export default Test;
