import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Events from "./pages/ExploreEvents";
import Registration from "./pages/registration";
import Contact from "./pages/contact";
import About from "./pages/about";

function App() {
  return (
    <Router>
      <Navbar />   {/* <--- MUST be inside Router */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
