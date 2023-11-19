import "bootstrap/dist/css/bootstrap.css"
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./assets/header";
import Dashboard from "./assets/mainpage";
import NewProject from "./assets/newproject";
import Footer from "./assets/footer";


function App() {

  return (
    <Router basename={process.env.PUBLIC_URL}>
          <Header />
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/newproject" element={<NewProject />} />
          </Routes>
          <Footer />
    </Router>
  );
}

export default App;