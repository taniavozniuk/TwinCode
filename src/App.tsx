import "./App.css";
import { CardHeader } from "./components/CardHeader/CardHeader";
import { DashBoard } from "./components/Dashboard/DashBoard";
import { InfoMessage } from "./components/InfoMessage/InfoMessage";
import { NavBar } from "./components/NavBar/NavBar.js";

function App() {
  return (
    <div className="app-layout">
      <NavBar />
      <div className="content">
        <InfoMessage />
        <DashBoard />
        <CardHeader />
      </div>
    </div>
  );
}

export default App;
