import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from './pages/SignUp/SignUp';
import LogIn from './pages/LogIn/LogIn';
import Home from './pages/Home/Home';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <LogIn />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
