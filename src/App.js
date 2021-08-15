import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from './pages/SignUp/SignUp';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/signup">
            <SignUp />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
