import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ButtonsPage from "./pages/buttonsPage";
import AlertsPage from "./pages/alertsPage";
import BadgesPage from "./pages/badgesPage";
import CardsPage from "./pages/cardsPage";
import Layout from "./components/layout";

function App() {
  return (
    <Router>
      <Layout>
        <div className="mx-auto p-0 m-0 bg-black text-white min-h-screen">
          <Routes>
            <Route path="/buttons" element={<ButtonsPage />} />
            <Route path="/alerts" element={<AlertsPage />} />
            <Route path="/badges" element={<BadgesPage />} />
            <Route path="/cards" element={<CardsPage />} />
          </Routes>
        </div>
      </Layout>
    </Router>
  );
}

export default App;
