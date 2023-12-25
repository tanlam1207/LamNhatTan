import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import Router from './src/navigation/Router';
import Detai_pro from './src/Productdetail/Detai_pro';
import { Provider } from 'react-redux';
import store from './src/redux/store,';

export default function App() {
  return (

  <Provider store={store}>
    <Router>
      
      </Router>
  </Provider>

    // <Detai_pro></Detai_pro>
  );
}