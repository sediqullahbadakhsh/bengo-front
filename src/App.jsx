import { Routes, Route } from "react-router-dom";
import AnalyticsDashboard from "./components/AnalyticsDashboard";
import "./App.css";
import Search from "./components/Search";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/analytics" element={<AnalyticsDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
