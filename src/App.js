import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import L1_SmartGroup from 'components/L1_SmartGroup';
import AOS from 'aos';
import { isMobile } from 'react-device-detect';

import 'aos/dist/aos.css';
import './common.css';
import './fonts.css';
import Foody from 'components/foody/landingpage';

class App extends Component {
  componentDidMount() {
    setTimeout(() => {
      AOS.init({
        offset: isMobile ? 10 : 100,
      });
      AOS.refresh();
    }, 1500);
  }

  render() {
    return (
      <Router hashType="noslash" basename={process.env.BASE_PATH}>
        <Switch>
          <Route exact path="/">
            <div>
             Redirection to Foody Page {'=>'}<br />
              <Link to="/start">LandingPage</Link>
            </div>
          </Route>

          <Route exact path="/start" component={Foody} />
        </Switch>
      </Router>
    );
  }
}

export default App;
