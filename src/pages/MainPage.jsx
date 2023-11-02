import WeeklyLineup from "../components/weeklyLineup";

function MainPage() {
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
        <WeeklyLineup weekNumber={"9"} />
      </table>
    </div>
  );
}

export default MainPage;
