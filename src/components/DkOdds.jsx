import React, { useState, useEffect } from "react";
import axios from "axios";

function DkOdds({ eventId }) {
  const [odds, setOdds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect((eventId) => {
    // Define the ESPN API endpoint URL
    let oddsApi = `https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/events/${eventId}/competitions/${eventId}/odds/40?lang=en%C2%AEion=us`;

    async function fetchData() {
      try {
        const response = await axios.get(oddsApi);
        const data = response.data;

        if (data && data.overUnder) {
          const overUnder = data.overUnder.reduce((odds, overUnder) => {
            if (overUnder) {
              odds.push(overUnder);
            }
            return odds;
          }, []);
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

  return odds;
}

export default DkOdds;
