import {React, useState, useEffect} from 'react';
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

import WelcomePage from './components/pageTypes/WelcomePage';

import { dummyRows } from './utils/DummyData';

import NotePadPage from './components/NotePadPage';
import NoteBook from './components/NoteBook';
import {getSavedPages, primeStorage, deletePageById, deletePage, savePage, saveAllPages,} from './utils/PageStorageManager';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [pageList, setPageList] = useState([]); //this should not be stored here. Should be in page StorageManager or something
  const [selectedPage, setSelectedPage] = useState({}); //this should not be stored here. Should be in page StorageManager or something

  useEffect(() => {
    getSavedPages().then((pages) => {
      setPageList(pages);
    });
  }, [getSavedPages, primeStorage, deletePageById])

  const newPage = async (page) => {
    setPageList(await savePage(page));
  }
  const removePage = async (page) => {
    setPageList(await deletePage(page))
  }
  const removePageById = async (id) => {
    setPageList(await deletePageById(id))
  }
  const primeDummyData = () => {
    setPageList(primeStorage())
  }

  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      {!!showWelcome && 
        <WelcomePage
          setShowWelcome = {setShowWelcome}
          primeStorage = {primeDummyData}
          deletePageById = {removePageById}
      />}
      {!showWelcome && 
        <NoteBook
          pageList = {pageList}
        />
      }
      
    </SafeAreaView>
  );
}

export default App;
