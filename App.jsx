import {Provider} from 'react-redux';
import Example from './example/screens/example';
import Todo from './example/screens/todo';
import RootNavigator from './src/router/rootNavigator';
import {NavigationContainer} from '@react-navigation/native';
import store from './src/store/index';

const App = () => {
  return (
    <Provider store={store}>
      {/* <Example /> */}
      {/* <Todo /> */}
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
