import {AppRegistry} from 'react-native';
import React, { Component } from 'react';
import { Navigator } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import { useDeps, composeAll } from 'mantra-core';

/**
 * This is the functional stateless component
 * @returns {XML}
 * @constructor
 */
const Routes = () => {
    return(
        <Router sceneStyle={{paddingTop: Navigator.NavigationBar.Styles.General.TotalNavHeight}}>
            <Scene key="root">
                { this.props.context && this.props.context.modules && context.modules.map((module) => {
                    console.log(JSON.stringify(module));
                    return module.router().render();
                }) }
            </Scene>
        </Router>
    );

};

/*
 * To be able to use the context inside the component, the component needs to be "composed" with react-composer useDeps,
 * just like any other container
 * That is the piece that is missing for the routes to be rendered.
 */


export default injectDeps => {
    const RoutesCtx = injectDeps(Routes);
    console.log('trying to register the component');
    AppRegistry.registerComponent('client', () => RoutesCtx);
    console.log('Entrypoint registered successfully');
};
