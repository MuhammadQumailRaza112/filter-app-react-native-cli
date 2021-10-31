
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import InputComponent from "./src/components/InputComponent";
import { Provider } from "react-redux";
import { initStore } from "./src/store/configureStore";
import ListComponent from './src/components/ListComponent';
import { SafeAreaProvider } from "react-native-safe-area-context";
const App = ()  => {
  const isDarkMode = useColorScheme() === 'light';

  return (
    <Provider store={initStore()}>
    <SafeAreaProvider>
    <SafeAreaView style={styles.flex}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={{backgroundColor:'#F8F6F8',padding:20, alignItems:'center', justifyContent:'center'}}>
        <Text style={{color:'#000', fontWeight:'700'}}>Header</Text>
        <InputComponent />
      </View>
      <ListComponent />
    </SafeAreaView>
    </SafeAreaProvider>
    </Provider>
  );
};

  const styles = StyleSheet.create({
    flex: {
      flex: 1,
    },
});

export default App;
