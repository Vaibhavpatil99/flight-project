import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Navbar from './Components/Navbar';
import ReactDOM from "react-dom";
import {Switch,Route, Link,BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Switch>
          <Route path="/about">
            <AboutUs />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
