// eslint-disable-next-line no-unused-vars
import React from 'react';
// eslint-disable-next-line no-unused-vars
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';





import './App.css'

import Main from "./pages/MainPage";
import GroceryListPage from "./pages/GroceryListPage";
import ExercisePage from './pages/ExercisePage';
import TipsPage from "./pages/TipsPage";



export default function App() {
  return (
    <Router>
      <Routes> {/* Wrap Routes around Route */}
        <Route path="/" element={<Main />} />
        <Route path="/GroceryList" element={<GroceryListPage />} />
        <Route path="/Excersize" element={<ExercisePage />} />
        <Route path="/Tips" element={<TipsPage />} />
        
      </Routes>
    </Router>
  );
}

