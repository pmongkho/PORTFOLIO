import "./App.css";
import Header from "./components/Header";
import { useStateValue } from "./StateProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Feed from "./Feed";
import AboutMe from "./AboutMe";

import React from 'react'


function App() {
  const [{ user }, dispatch] = useStateValue();


  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />

            <div className="app__body">
              <Routes>

             
                <Route path="/" element={<AboutMe />} />
                <Route path="/feed" element={<Feed />} />
             
              </Routes>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
