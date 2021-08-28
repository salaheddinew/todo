import logo from "./logo.svg";
import Barre from "./Listes/Barre";
import Liste from "./Listes/Liste";
import Details from "./Todo/Details";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  const [Lista, setLista] = useState([
    {
      id: 0,
      tache: "learn props",
    },
    {
      id: 1,
      tache: "learn props",
    },
  ]);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div>
            <Barre change={setLista} List={Lista} />
            <Liste do={Lista} />
          </div>
        </Route>
        <Route path="/details/:id">
          <Details list={Lista} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
