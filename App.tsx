import React from 'react';
import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import Routes from '@app/routes/index.routes';

function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'default'} />
      <Routes />
    </NavigationContainer>
  );
}

export default App;
