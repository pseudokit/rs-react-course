import React from "react";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
