import WeeklyLineup from "../components/weeklyLineup";

function MainPage() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>Away</th>
            <th style={{ textAlign: "center" }}>Weather</th>
            <th style={{ textAlign: "center" }}>Over/Under</th>
            <th style={{ textAlign: "center" }}>Venue</th>
            <th style={{ textAlign: "center" }}>Home</th>
          </tr>
        </thead>
        <WeeklyLineup weekNumber={"9"} />
      </table>
    </div>
  );
}

export default MainPage;
