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

import {newCell, newRow, demoData } from './utils/DataFunctions'

import NotePad from './components/NotePad';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  

  const rows = JSON.parse(JSON.stringify(demoData.test3)); //demo data

  rows[2].cells[0].text = 'setting this';
  rows[0].cells[1].text = 'did this copy eveywhere';
  rows.push(newRow({}, [newCell('test1'), newCell('test2'), newCell('test3')]));

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <NotePad dataList={rows} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
