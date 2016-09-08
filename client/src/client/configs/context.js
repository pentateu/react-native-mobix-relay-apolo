import { Actions } from 'react-native-router-flux';
import common from '../modules/common';

// user store may go here

export default function() {
  return {
      Actions,
      modules: [common]
  }
};