import {AppRegistry} from 'react-native';

/*
//my own components
import SplashScreen from './containers/home';
import LoginScreen from './containers/home';

//Scene
//Screen

//import Home from './containers/home';



export default class Routes extends Component {
    render() {
        return(
          <Router sceneStyle={{paddingTop: Navigator.NavigationBar.Styles.General.TotalNavHeight}}>
              <Scene key="root">
                  <Scene key="home" initial={true} component={Home} title="Home"/>
              </Scene>
          </Router>
        );
    }
}
*/



export default injectDeps => AppRegistry.registerComponent('client', () => injectDeps(Routes));
