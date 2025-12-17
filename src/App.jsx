import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IPOList from "./components/pages/IPOList";
import IPODetails from "./components/pages/IPODetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IPOList />} />
        <Route path="/ipo/:id" element={<IPODetails />} />
      </Routes>
    </Router>
  );
}

export default App;
