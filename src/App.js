
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './Pages/Home/Home';
import AboutPage from './Pages/About/AboutPage';
import Service from './Pages/Service/Service';
import ContactPage from './Pages/ContactPage/ContactPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' ><Home/></Route>
          <Route path='/about' ><AboutPage/></Route>
          <Route path='/contact' ><ContactPage/></Route>
          <Route path='/services' ><Service/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
