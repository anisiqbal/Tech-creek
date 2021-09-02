import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Login from './components/Login'
import Register from './components/Register'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/login"><Login /></Route>
          <Route path="/register"><Register /></Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
