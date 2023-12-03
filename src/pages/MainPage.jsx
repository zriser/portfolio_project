import WeeklyLineup from "../components/weeklyLineup";

function MainPage() {
  return (
    <table>
      <thead>
        <th style={{ textAlign: "center" }}>Away</th>
        <th style={{ textAlign: "center" }}>Away Moneyline</th>
        <th style={{ textAlign: "center" }}>Weather</th>
        <th style={{ textAlign: "center" }}>Over/Under</th>
        <th style={{ textAlign: "center" }}>Venue</th>
        <th style={{ textAlign: "center" }}>Home Moneyline</th>
        <th style={{ textAlign: "center" }}>Home</th>
      </thead>
      <WeeklyLineup weekNumber={"13"} />
    </table>
  );
}

export default MainPage;
