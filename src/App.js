
import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './pages/Home'

import RegisterPage from './pages/RegistarPage'

import LoginPage from './pages/LoginPage'

function App() {


  return (
    <>
      <Router>
      
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/register' component={RegisterPage} />
          <Route exact path='/login' component={LoginPage} />
        </Switch>
      </Router>
    
    

    </>
  );
}

export default App;
