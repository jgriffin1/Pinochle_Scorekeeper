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

  const newCell = (pText, pStyle) => {
    return { text: pText, style: pStyle }
  }

  const newRow = (pCells, pStyle) => {
    return { rowStyle: pStyle, cells: pCells.map(c => newCell(c.text, c.style)) };
  }

  const cellTemp1 = { text: 'abc', cellStyle: { color: 'blue' } }
  const cellTemp2 = { text: 'def', cellStyle: { color: 'pink' } }
  const cellTemp3 = { text: 'ghi', cellStyle: { color: 'red' } }
  const rowTemp1 = { rowStyle: { color: 'green' }, cells: [cellTemp1, cellTemp2, cellTemp3] }
  const rowTemp2 = { rowStyle: { color: 'green' }, cells: [newCell('cell func', { color: 'brown' }), cellTemp2, cellTemp3] }

  const test3 = [
    rowTemp1,
    rowTemp1,
    newRow([cellTemp3, cellTemp1], {}),
    rowTemp2,
    {
      rowStyle: { color: 'blue', borderTopColor: 'red', borderTopWidth: 2 },
      cells: [
        newCell('function new', { borderTopColor: 'green', borderTopWidth: 4, borderBottomWidth: 2 }),
        newCell('asdf1', { borderBottomWidth: 2 }),
        newCell('asf2', { borderBottomWidth: 2, borderBottomColor: 'purple' }),
        { text: 'manual new (bold)', style: { fontWeight: 'bold' } },
      ]
    }
  ]

  test3[2].cells[0].text = 'setting this';
  test3[0].cells[1].text = 'did this copy eveywhere';

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <NotePad dataList={test3} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
