import "./App.css";
import { CardHeader } from "./components/CardHeader/CardHeader";
import { DashBoard } from "./components/Dashboard/DashBoard";
import { Info } from "./components/Info/Info";
import { InfoMessage } from "./components/InfoMessage/InfoMessage";
import { NavBar } from "./components/NavBar/NavBar.js";
import { Recent } from "./components/Recent/Recent";
import { WorkingLoad } from "./components/WorkingLoad/WorkingLoad";

function App() {
  return (
    <div className="app-layout">
      <NavBar />
      <div className="content">
        <InfoMessage />
        <DashBoard />
        <CardHeader />
        <div className="mian">
          <Info />
          <WorkingLoad />
          <Recent />
        </div>
      </div>
    </div>
  );
}

export default App;
