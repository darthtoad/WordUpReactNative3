import { NavigationActions, StackActions } from 'react-navigation';
import { RootNavigator } from '../../navigators/AppNavigator';

import {
  AUTH, MAIN
} from './actionTypes';

// Start with two routes: The Main screen, with the Login screen on top.
const router = RootNavigator.router;
const firstAction =router.getActionForPathAndParams('First');
const initialNavState = router.getStateForAction(firstAction);


export default nav = (state = initialNavState, action) => {
  let nextState;
  switch (action.type) {
    case AUTH:
      nextState = router.getStateForAction(
        StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'Auth' })]
        }),
        state
      );
      break;
    case MAIN:
      nextState = router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Main' }),
        state
      );
      break;
    default:
      nextState = RootNavigator.router.getStateForAction(action, state);
      break;
  }
  return nextState || state;
};