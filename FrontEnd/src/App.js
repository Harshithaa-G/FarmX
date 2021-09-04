import HomePage from './component/homepage'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Shop from './component/shop';
import Adopt from './component/adopt';
import Collaborate from './component/collaborate';
import SocialRecipes from './component/socialrecipes';



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={Shop} />
        <Route exact path='/adopt' component={Adopt} />
        <Route exact path='/collaborate' component={Collaborate} />
        <Route exact path='/socialrecipes' component={SocialRecipes} />



      </Switch>
    </Router>
  );
}

export default App;
