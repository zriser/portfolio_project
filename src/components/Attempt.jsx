import { useState, useEffect } from "react";
import axios from "axios";

function Attempt({ eventId, onDataFetched }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = `https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/events/${eventId}/competitions/${eventId}/odds/40?lang=en&region=us`;

    async function fetchData() {
      try {
        const response = await axios.get(apiUrl);
        const data = response.data;

        // Check for data and pass it to the parent component
        onDataFetched(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return null;
}

export default Attempt;
