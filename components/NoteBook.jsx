import {
    View,
    Text,
  } from 'react-native';

import { useState } from 'react';

  import DataPage from './pageTypes/DataPage';

const NoteBook = ({pageList, ...props}) => {
    const [pageNumber, setPageNumber] = useState( 0 );

    if(!pageList || !Array.isArray(pageList) || pageList.legnth === 0 || !pageList[pageNumber]){
        return (
            <View>
                <Text>No pages</Text>
            </View>
        )
    }

    let pageNames = [];
    pageList.forEach(p => pageNames.push(p.name));

    return (
        <>
            <DataPage
                pageNames = {pageNames}
                {...pageList[pageNumber]}
            />
        </>
    )
}

export default NoteBook;