import React from "react";
import "./App.css";
import { HomePage } from "./pages/HomePage";
//import { DetailsPage } from "./pages/DetailsPage";
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

/*
<Routes>
            <Route path="/*" element={<HomePage />}></Route>
            <Route path="/details" element={<DetailsPage />} />
            <Route path="/abc" element={<h1 style={{ color: `black` }}>abc</h1>}></Route>
        </Routes>
*/
