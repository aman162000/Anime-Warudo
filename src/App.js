import Home from "./components/Home";
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import DetailPage from "./components/DetailPage";
import SearchPage from "./components/SearchPage";
import Modal from "./components/Modal/Modal";
function App() {
  return (
    <div className="App">
      <Navbar img={"/logo.png"} />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/top/:type" element={<SearchPage/>}/>
          <Route path="/search/:type/:name" element={<SearchPage />} />
          <Route path="/details/:type/:id" element={<DetailPage />} />
          <Route path="/test/modal/" element={<Modal />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
