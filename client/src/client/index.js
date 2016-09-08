import { createApp } from 'mantra-core';
import initContext   from './configs/context';
import entryPoint    from './modules/entrypoint';
import common from './modules/common';

// import mobileAuth from '../';
//
// import webAuth from '../';


export default function start() {

  console.log('starting...');

  const context = initContext();
  const app = createApp(context);

  // all modules need to be loaded before entrypoint
  app.loadModule(common);
  app.loadModule(entryPoint);


  app.init();

}
