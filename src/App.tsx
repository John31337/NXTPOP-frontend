import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "pages/landing";
import LaunchPage from "pages/launch";
import MainPages from "pages/main";
import CsOptionPage from "pages/csoiption";
import CsOption1Page from "pages/csoiption/option1";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="launch" element={<LaunchPage />} />
          <Route path="csoption" element={<CsOptionPage />} />
          <Route path="csoption1" element={<CsOption1Page />} />
          <Route path="main/*" element={<MainPages />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
