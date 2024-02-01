// import Navbar from './components/navbar';
// import Navbar from './components/menu';
import Navbar from './components/nav';
import Home from './pages/home';
import About from './pages/about';
import Portfolio from './pages/portfolio';
import Repos from './pages/repos/page';

import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className='content'>
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/repos">
            <Repos />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
