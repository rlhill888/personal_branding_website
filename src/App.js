
import './App.css';
// import landingPage from './landingPage';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route>
          <LandingPage path='/'></LandingPage>
        </Route>

      </Switch>

    </div>
  );
}

export default App;
