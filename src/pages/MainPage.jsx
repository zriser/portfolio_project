import { useState } from "react";
import WeeklyLineup from "../components/weeklyLineup";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

function MainPage() {
  const [weekNumber, setWeekNumber] = useState(14);

  const incrementWeek = () => {
    setWeekNumber((prevWeek) => prevWeek + 1);
  };

  const decrementWeek = () => {
    if (weekNumber > 1) {
      setWeekNumber((prevWeek) => prevWeek - 1);
    }
  };
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <Button onClick={decrementWeek} startIcon={<KeyboardArrowLeft />}>
          Decrement Week
        </Button>
        <span style={{ margin: "0 10px" }}>Week {weekNumber}</span>
        <Button onClick={incrementWeek} endIcon={<KeyboardArrowRight />}>
          Increment Week
        </Button>
      </div>
      <div>
        <table>
          <thead>
            <th
              style={{
                textAlign: "center",
                border: "1px solid #ddd",
                padding: "8px",
              }}
            >
              Away
            </th>
            <th
              style={{
                textAlign: "center",
                border: "1px solid #ddd",
                padding: "8px",
              }}
            >
              Away Moneyline
            </th>
            <th
              style={{
                textAlign: "center",
                border: "1px solid #ddd",
                padding: "8px",
              }}
            >
              Weather
            </th>
            <th
              style={{
                textAlign: "center",
                border: "1px solid #ddd",
                padding: "8px",
              }}
            >
              Over/Under
            </th>
            <th
              style={{
                textAlign: "center",
                border: "1px solid #ddd",
                padding: "8px",
              }}
            >
              Venue
            </th>
            <th
              style={{
                textAlign: "center",
                border: "1px solid #ddd",
                padding: "8px",
              }}
            >
              Home Moneyline
            </th>
            <th
              style={{
                textAlign: "center",
                border: "1px solid #ddd",
                padding: "8px",
              }}
            >
              Home
            </th>
          </thead>
          <WeeklyLineup weekNumber={weekNumber} />
        </table>
      </div>
    </>
  );
}

export default MainPage;
