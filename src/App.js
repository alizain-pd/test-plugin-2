import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const App = () => (
  <Router basename="/test-plugin-2">
    <div>
      <h2>Mountains</h2>
      <ul>
        <li>
          <Link to="/kilimanjaro">Kilimanjaro</Link>
        </li>
        <li>
          <Link to="/passu">Passu Cathedrals</Link>
        </li>
        <li>
          <Link to="/nanga">Nanga Parbat</Link>
        </li>
        <li>
          <Link to="/aoraki">Aoraki</Link>
        </li>
      </ul>

      <Route path="/:id" component={Child} />

      {/*
         It's possible to use regular expressions to control what param values should be matched.
            * "/order/asc"  - matched
            * "/order/desc" - matched
            * "/order/foo"  - not matched
      */}
      <Route
        path="/order/:direction(asc|desc)"
        component={ComponentWithRegex}
      />
    </div>
  </Router>
);

const Child = ({ match }) => (
  <div>
    <h3>ID: {match.params.id}</h3>
  </div>
);

const ComponentWithRegex = ({ match }) => (
  <div>
    <h3>Only asc/desc are allowed: {match.params.direction}</h3>
  </div>
);

export default App;
