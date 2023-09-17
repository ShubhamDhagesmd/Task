import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "../src/component/Signin"; // Import your SignIn component
import NewPage from "../src/NewPage"; // Import your NewPage component

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<SignIn />} />
          <Route path="/new-page" element={<NewPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
