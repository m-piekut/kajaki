import {ReactComponent as LeftSVG} from './images/leftSVG.svg'
import {ReactComponent as RightSVG} from './images/rightSVG.svg'
import Header from './Header';
import Home from './Home';
import './css/style.css'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import { useState } from 'react';
function App() {
  const [showNav, setShowNav] = useState(false)

  const showNavigation = ()=>{
    setShowNav(!showNav)
  }


  return (
    <div className="App">
    <LeftSVG className="backgroundSVG backgroundSVG--left"/>
    <RightSVG className="backgroundSVG backgroundSVG--right"/>
    <Header showNav={()=> showNavigation()} />
    <Router>
      {
        showNav &&
      <Navigation/>
      }
      <Switch>
        <Route exact path='/'><Home/></Route>
        {/* <Route  path='/projects'><Projects/></Route>
        <Route  path='/skills'><Skills/></Route>
        <Route  path='/contact'><Contact/></Route> */}
      </Switch>
    </Router>

    </div>
  );
}

export default App;
