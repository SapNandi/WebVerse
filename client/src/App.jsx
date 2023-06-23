import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Login from "./components/login/Login";
import './App.css';
export default function App() {
  return (
    <>
        {/* <Navbar /> */}
    <Router>
      <div className="App">

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}
