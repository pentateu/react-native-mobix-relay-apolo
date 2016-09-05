import actions from './actions';
import routes from './routes';

/**
 * Core module will be responsible for:
 *

 * App Settings
    Notifications
    ...
    ..
    
 * Auth (day 2 Auth will be its own module)
 *  check if user hasn a valid session
 *  present login screen
    handle login, store valid session etc.
    after succesful login.. display "end user flow" module
 *

 diplay will use react-native-mobx router to change scenes and screens..

 so we need to call -> payForParkingSpot   -> module_name/payForParkingSpot

 */


export default {
    actions,
    routes
};
