import { Actions } from 'react-native-router-flux';
import common from '../entrypoint/modules/common';

// user store may go here

export default function() {
  return {
      Actions,
      modules: [common]
  }
};