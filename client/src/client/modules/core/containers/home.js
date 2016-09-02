/**
 * Created by rn1466 on 31/08/16.
 */
import { useDeps, composeAll, compose } from 'mantra-core';
import L from '../../core/components/loading';
import E from '../../core/components/error';

import Home from '../components/home';

export const composer = (props, onData) => {
  console.log('On data:' + onData);
  onData(null, {});
};

export const depsMapper = (context, actions) => ({
   context : () => context,
   Actions: context.Actions
});

export default composeAll(
    compose(composer, L, E),
    useDeps(depsMapper)
)(Home);