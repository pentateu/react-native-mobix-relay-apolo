import React, { Component } from 'react';
import { Navigator } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';

import Home from '../modules/core/containers/home';


/**
 * option2: crate a big router for the whole app here...
*/

export default class Routes extends Component {
    render() {
        return(
          <Router sceneStyle={{paddingTop: Navigator.NavigationBar.Styles.General.TotalNavHeight}}>
              <Scene key="root">
                  <Scene key="home" initial={true} component={Home} title="Home"/>
              </Scene>
          </Router>
        );
    }
}
