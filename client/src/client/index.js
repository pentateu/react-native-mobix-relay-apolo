import { createApp } from 'mantra-core';
import initContext   from './configs/context';
import entryPoint    from './entrypoint';
import common from './entrypoint/modules/common';

export default function start() {

  console.log('starting...');

  const context = initContext();
  const app = createApp(context);

  app.loadModule(common);
  app.loadModule(entryPoint);

  app.init();

}
