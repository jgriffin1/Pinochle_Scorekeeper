import {React, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  useWindowDimensions,
  View,
  Pressable,
} from 'react-native';

import {newCell, newRow, dataStyles ,demoData } from './utils/DataFunctions'

import NotePadPage from './components/NotePadPage';
import NoteBook from './components/NoteBook';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

function App() {
  const [count, setCount] = useState(0);
  
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

  const testStyle = StyleSheet.create({
    startMenuWrapper: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    },
    startMenuTitle: {
      marginTop: '50%',
      textAlign: 'center',
      borderWidth: 4,
      fontSize: 30,
      borderColor: 'green',
      fontWeight: 'bold',
    },
    titleButton: {
      marginTop: 20,
      borderColor: "gray",
      borderWidth: 3,
      borderRadius: 1,
      borderStyle: 'dotted',
      width: '30%',
      height: '5%',
      alignSelf: 'center',
      justifyContent: 'center'
    },
    titleButton_hover: {
      // ...testStyle.titleButton,

    },
    titleButtonText: {
      alignSelf: 'center',
      fontSize: 20,
      
    },
    titleButtonText_hover: {
      // ...titleButtonText
    }
  })

  const WelcomePage = () => {
    return (
      <>
        <NotePadPage 
          // dataList={rows}
          scrollLock={true}
          backgroundMode={true}
        />
        <View style={testStyle.startMenuWrapper}>
          <Text style={testStyle.startMenuTitle}>Welcome {count}</Text>
          <Pressable style={testStyle.titleButton} onPress={()=>setCount(c => c+1)}>
            <Text style={testStyle.titleButtonText}>Start</Text>
          </Pressable>
        </View>
      </>
    )
  }

  const DataPage = ({rows}) => {
    return (
      <NotePadPage 
        dataList={rows}
        scrollLock={false}
        backgroundMode={false}
      />
    )
  }

  const pages = [
    <WelcomePage />,
    <DataPage rows={rows} />,
    <WelcomePage />,
    <DataPage rows={rows} />,
    <WelcomePage />,
    <DataPage rows={rows} />,
    <WelcomePage />,
    <DataPage rows={rows} />,
    <WelcomePage />,
    <DataPage rows={rows} />,
    <WelcomePage />,
    <DataPage rows={rows} />,
  ]

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      {/* <WelcomePage /> */}
      {/* <DataPage rows={rows} /> */}
      <NoteBook
        pageList = {pages}
        currPage = {0}
      />
    </SafeAreaView>
  );
}

export default App;
