import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TransactionsPage from "./pages/TransactionsPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TransactionsPage />} />
        <Route path="/transactions" element={<TransactionsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
