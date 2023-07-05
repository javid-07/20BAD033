import './App.css';
import {BrowserRouter as  Router, Route, Switch} from "react-router-dom";
import alltrain from "./components/alltrains";
import singletrain from "./components/singletrain";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={alltrain} />
        <Route exact path="/train/:trainNumber" component={singletrain} />
      </Switch>
    </Router>
  );
}

export default App;