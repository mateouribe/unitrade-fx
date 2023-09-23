import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/global/navbar";
import Home from "./screens/home/index";
import Brokers from "./screens/brokers";

function App() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/our-brokers" element={<Brokers />} />
        {/* <Route path="/projects/study_case/:link" element={<StudyCase />} /> */}

        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </>
  );
}

export default App;
