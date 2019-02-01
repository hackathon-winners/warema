import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Flo from "./components/Flo/Flo";
import Mira from "./components/Mira/Mira";

const Index = () => <h2>Home</h2>;

export default function() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/mira">Mira</Link>
            </li>
            <li>
              <Link to="/flo">Flo</Link>
            </li>
          </ul>
        </nav>
        <Route path="/" exact component={Index} />
        <Route path="/mira" component={Mira} />
        <Route path="/flo" component={Flo} />
      </div>
    </Router>
  );
}
