import {ReactComponent as LeftSVG} from './images/leftSVG.svg'
import {ReactComponent as RightSVG} from './images/rightSVG.svg'
import Header from './Header';
import Home from './Home';
import './css/style.css'
import './css/small.css'
import './css/medium.css'
import './css/large.css'
import './css/xlarge.css'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import { useState } from 'react';
import News from './news';
import NewsDetails from './NewsDetails';
import Galery from './Galery';
import Admin from './Admin';
import Contact from './Contact';
function App() {
  
  return (
    <div className="App">
    <LeftSVG className="backgroundSVG backgroundSVG--left"/>
    <RightSVG className="backgroundSVG backgroundSVG--right"/>
    <Router>
    <Header  />
     
      <Switch>
        <Route exact path='/'><Home/></Route>
        <Route  exact path='/aktualnosci'><News/></Route>
        <Route   path='/aktualnosci/:id'><NewsDetails/></Route>
         <Route  path='/galeria'><Galery/></Route>
          <Route exact path='/admin'><Admin/></Route>
          <Route exact path='/kontakt'><Contact/></Route>
        {/* <Route  path='/contact'><Contact/></Route>  */}
      </Switch>
    </Router>

    </div>
  );
}

export default App;
