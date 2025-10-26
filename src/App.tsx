import "./App.css";
import { Advertis } from "./components/Advertis/Advertis";
import { CardHeader } from "./components/CardHeader/CardHeader";
import { DashBoard } from "./components/Dashboard/DashBoard";
import { Info } from "./components/Info/Info";
import { InfoMessage } from "./components/InfoMessage/InfoMessage";
import { Loads } from "./components/Loads/Loads";
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
        <div className="main">
          <Info />
          <WorkingLoad />
          <Recent />
          <Loads />
          <Advertis />
        </div>
      </div>
    </div>
  );
}

export default App;
