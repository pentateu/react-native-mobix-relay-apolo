/**
 * Created by rn1466 on 7/09/16.
 */
import React, { Component } from 'react';
import { Navigator } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';

import Home from './containers/home';
import Screen2 from './containers/screen2';

export default Routes = () => {
    return(
        <Scene key="common">
            <Scene key="home" initial={true} component={Home} title="Home"/>
            <Scene key="screen2" component={Screen2} title="Screen2"/>
        </Scene>
    );
};
