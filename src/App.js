import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import News from "./Components/News/News";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import Nested from "./Components/Nested/Nested";
import NotFound from "./Components/Notfound/NotFound";
import Header from "./Components/Header/Header";
import SingleDetails from "./Components/SingleDetails/SingleDetails";
import Food from "./Components/Food/Food";
import SingleMeals from "./Components/Food/SingleMeals";

function App() {
  return (
    <div className="App container-md">
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<News />} />
          <Route path="/home" element={<Home />}></Route>
          <Route path="/home/:singleDetails" element={<SingleDetails />}></Route>
          <Route path="/home/nested" element={<Nested />} />
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/food" element={<Food />}>
          </Route>
          <Route path="/food/:singleMeal" element={<SingleMeals />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
