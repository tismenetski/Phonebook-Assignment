import './App.css';
import Table from './components/layout/Table';
import Burger from './components/layout/Burger';
import Contact from './components/layout/Contact';
import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const App = () => {
  return (
    <Router>
      <Fragment>
        <Burger pageWrapId={'page-wrap'} outerContainerId={'App'} />
        <div id="page-wrap">
          <Switch>
            <Route exact path="/" component={Table} />
            <Route exact path="/:id" component={Contact} />
          </Switch>
        </div>
      </Fragment>
    </Router>
  );
};

export default App;
