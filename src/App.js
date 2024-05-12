import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import User from './Components/Home/User';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container-fluid pt-1 mb-5">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/User" element={<User />} />            {/* Add more routes here */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
