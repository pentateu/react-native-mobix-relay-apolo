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
const Routes = (props) => {
    return(
        <Router sceneStyle={{paddingTop: Navigator.NavigationBar.Styles.General.TotalNavHeight}}>
            <Scene key="root">
                { props.context && props.context().modules.map((module) => {
                    console.log(JSON.stringify(module));
                    return module.routes();
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
export const depsMapper = (context, actions) => ({
    context : () => context,
    Actions: context.Actions
});


export default injectDeps => {
    const RoutesContainer = composeAll(
        useDeps(depsMapper)
    )(Routes);
    const RoutesCtx = injectDeps(RoutesContainer);
    console.log('trying to register the component');
    AppRegistry.registerComponent('client', () => RoutesCtx);
    console.log('Entrypoint registered successfully');
};
