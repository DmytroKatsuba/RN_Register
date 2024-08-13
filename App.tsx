import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {RootNavigator} from './src/navigation/Root';
import {NavigationContainer} from '@react-navigation/native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
