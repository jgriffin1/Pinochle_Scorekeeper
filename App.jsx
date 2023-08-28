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

import {newCell, newRow, dataStyles ,demoData } from './utils/DataFunctions'

import NotePad from './components/NotePad';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  // #region Demo data
  const rows = [];
  rows.push(newRow(dataStyles.names, [newCell('Us'), newCell('Them')]));
  rows.push(newRow({}, [newCell('5'), newCell('10')]));
  rows.push(newRow({}, [newCell('3'), newCell('-17', dataStyles.neg)]));
  rows.push(newRow({}, [newCell('8', dataStyles.sum), newCell('-7', [dataStyles.neg, dataStyles.sum])]));
  rows.push(newRow({}, [newCell('5'), newCell('10')]));
  rows.push(newRow({}, [newCell('3'), newCell('-17', dataStyles.neg)]));
  rows.push(newRow({}, [newCell('8', dataStyles.sum), newCell('-7', [dataStyles.neg, dataStyles.sum])]));
  rows.push(newRow({}, [newCell('5'), newCell('10')]));
  rows.push(newRow({}, [newCell('3'), newCell('-17', dataStyles.neg)]));
  rows.push(newRow({}, [newCell('8', dataStyles.sum), newCell('-7', [dataStyles.neg, dataStyles.sum])]));
  rows.push(newRow({}, [newCell('5'), newCell('10')]));
  rows.push(newRow({}, [newCell('3'), newCell('-17', dataStyles.neg)]));
  rows.push(newRow({}, [newCell('8', dataStyles.sum), newCell('-7', [dataStyles.neg, dataStyles.sum])]));
  rows.push(newRow({}, [newCell('5'), newCell('10')]));
  rows.push(newRow({}, [newCell('3'), newCell('-17', dataStyles.neg)]));
  rows.push(newRow({}, [newCell('8', dataStyles.sum), newCell('-7', [dataStyles.neg, dataStyles.sum])]));
  rows.push(newRow({}, [newCell('5'), newCell('10')]));
  rows.push(newRow({}, [newCell('3'), newCell('-17', dataStyles.neg)]));
  rows.push(newRow({}, [newCell('8', dataStyles.sum), newCell('-7', [dataStyles.neg, dataStyles.sum])]));
  rows.push(newRow({}, [newCell('5'), newCell('10')]));
  rows.push(newRow({}, [newCell('3'), newCell('-17', dataStyles.neg)]));
  rows.push(newRow({}, [newCell('8', dataStyles.sum), newCell('-7', [dataStyles.neg, dataStyles.sum])]));
  rows.push(newRow({}, [newCell('5'), newCell('10')]));
  rows.push(newRow({}, [newCell('3'), newCell('-17', dataStyles.neg)]));
  rows.push(newRow({}, [newCell('8', dataStyles.sum), newCell('-7', [dataStyles.neg, dataStyles.sum])]));
  rows.push(newRow({}, [newCell('5'), newCell('10')]));
  rows.push(newRow({}, [newCell('3'), newCell('-17', dataStyles.neg)]));
  rows.push(newRow({}, [newCell('8', dataStyles.sum), newCell('-7', [dataStyles.neg, dataStyles.sum])]));
  rows.push(newRow({}, [newCell('5'), newCell('10')]));
  rows.push(newRow({}, [newCell('3'), newCell('-17', dataStyles.neg)]));
  rows.push(newRow({}, [newCell('8', dataStyles.sum), newCell('-7', [dataStyles.neg, dataStyles.sum])]));
  rows.push(newRow({}, [newCell('5'), newCell('10')]));
  rows.push(newRow({}, [newCell('3'), newCell('-17', dataStyles.neg)]));
  rows.push(newRow({}, [newCell('8', dataStyles.sum), newCell('-7', [dataStyles.neg, dataStyles.sum])]));
  //#endregion
  
  let scrollLock = false;

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />


      <NotePad 
        // dataList={rows} 
        scrollLock={scrollLock}
      />
    </SafeAreaView>
  );
}

export default App;
