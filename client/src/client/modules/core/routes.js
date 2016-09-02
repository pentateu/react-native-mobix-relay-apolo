import {AppRegistry} from 'react-native';
import Routes from '../../configs/routes';

export default injectDeps => AppRegistry.registerComponent('client', () => injectDeps(Routes));
