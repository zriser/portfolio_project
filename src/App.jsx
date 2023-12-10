import Reload from "./components/Reload";
import MainPage from "./pages/MainPage";
import "./styles/style.css";
console.log(Date());
function App() {
  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>🏈Pickem&apos; Projections🏈</h1>
      <Reload />
      <MainPage />
    </div>
  );
}

export default App;
