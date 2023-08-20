import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  useWindowDimensions,
  View,
} from 'react-native';

import NotePad from './components/NotePad';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const test1 =  [  
      ['us',  'them', 'bob'],
      ['text 1',  'txt 2', 'text 3'],
      ['text 1',  'txt 2', 'text 3'],
      ['text 1',  'txt 2', 'text 3'],
   ]

  const test2 =  [  
      {text: ['us',  'them', 'bob'], styles:{}},
      {text: ['text 1',  'txt 2', 'text 3'], styles:{color: 'red'}},
      {text: ['text 1',  'txt 2', 'text 3'], styles:{}},
      {text: ['text 1',  'txt 2', 'text 3'], styles:{}},
   ]

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <NotePad dataList={test2} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
