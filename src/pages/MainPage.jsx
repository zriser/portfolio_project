function MainPage() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>event</th>
            <th>Away</th>
            <th>Weather</th>
            <th>Over/Under</th>
            <th>Venue</th>
            <th>Home</th>
          </tr>
        </thead>
        {/* <tbody>
            {matchups.map((event) => (
              <tr key={event.id}>
                {" "}
                console.log({event.id})<td>{event.name.split(" at ")[0]}</td>
                <td></td>
                <td></td>
                <td></td>
                <td>{event.name.split(" at ")[1]}</td>
              </tr>
            ))}
          </tbody> */}
      </table>
    </div>
  );
}

export default MainPage;
