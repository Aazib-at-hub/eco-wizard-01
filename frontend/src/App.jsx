// import './App.css';
// import Header from './components/Header/Header';
// import HeroSection from './components/HeroSection/HeroSection';
// import LoginPage from './components/Login/Login';

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<HeroSection />} />
//         <Route path="/login" element={<LoginPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import LoginPage from './components/Login/Login';
import Mission from "./components/Missions/Missions.jsx"
import Points from "./components/Points/Points.jsx"
import Redeem from "./components/Redeem/Redeem.jsx"
import Learn from "./components/Learn/Learn.jsx"
import Profile from './components/Profile/Profile.jsx';
import Footer from "./components/Footer/Footer.jsx"
function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/home" element={<HeroSection />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/points" element={<Points />} />
        <Route path="/redeem" element={<Redeem />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      <Footer/>
    </Router>
  );
}

export default App;

