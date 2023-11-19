import "bootstrap/dist/css/bootstrap.css"
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import header from "./assets/header";
import mainpage from "./assets/mainpage";
import newproject from "./assets/newproject";
import footer from "./assets/footer";


function App() {

  return (
    <Router basename={process.env.PUBLIC_URL}>
          <Header />
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/newproject" element={<newproject />} />
          </Routes>
          <Footer />
    </Router>
  );
}

export default App;