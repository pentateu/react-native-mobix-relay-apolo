import {AppRegistry} from 'react-native';
import React, { Component } from 'react';
import { Navigator } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import common from './modules/common';
// import all exported modules
const modules = [common];
console.log('Module common:' + JSON.stringify(common));

const Routes = ({modules}) => {
    return(
        <Router sceneStyle={{paddingTop: Navigator.NavigationBar.Styles.General.TotalNavHeight}}>
            <Scene key="root">
                { modules.map((module) => {
                    console.log(JSON.stringify(module));
                    return module.router().render();
                }) }
            </Scene>
        </Router>
    );

};


export default injectDeps => {
    const RoutesCtx = injectDeps(Routes);
    AppRegistry.registerComponent('client', () => RoutesCtx);
};
