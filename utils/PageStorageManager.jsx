//eventually this file will use some kind of file-saving capibilities.
//but rn it'll just return dummy data

import { getDummyPageData } from "./DummyData";
import AsyncStorage from '@react-native-async-storage/async-storage';
import _ from 'lodash';

export function primeStorage() {
    let pageList = getDummyPageData(10);
    saveAllPages(pageList);
    return pageList;
}

const storeData = async (key, obj) => {
    console.log('Saving ' + key + ' data...');

    try {
        const jsonValue = JSON.stringify(obj);
        await AsyncStorage.setItem(key, jsonValue);
        console.log('Save complete test', obj.toString());
    } catch (e) {
        // saving error
        console.log('Error occured while saving: ', e);
    }
};

// const storeData = useCallback(_.debounce((key, obj) => storeDataRegular, 1000), []);


const getData = async (key) => {
    console.log('Getting ' + key + ' data from AsyncStorage');
    try {
        const jsonValue = await AsyncStorage.getItem(key);
        let obj = jsonValue != null ? JSON.parse(jsonValue) : null;
        console.log('Successfully fetched data from AsyncStorage')

        return obj;
    } catch (e) {
        // error reading value
        console.log('Error occured while fetching data: ');
        console.error(e.toString());

    }
};

const PAGE_LIST_KEY = 'pageListKey';

/*
Page object structure:
[{
    rows: [
        {style: {}, cells = []}
    ],
    name: `Page Name`,
    id: 1234,
}]
*/

export async function getSavedPages() {
    let pageList = await getData(PAGE_LIST_KEY);
    return pageList || [];
    // return getDummyPageData(10);
}


export function saveAllPages(pageList) {
    storeData(PAGE_LIST_KEY, pageList)
    return pageList;
}

/**
 * Overwrites page with same id or adds new page to end of list.
*/
export async function savePage(page) {
    let pageList = await getSavedPages();

    let pageFound = false;
    for(let i = 0; i < pageList.length; i++){
        if(pageList[i].id === page.id){
            pageList[i] = page;
            pageFound = true;
            break;
        }
    }

    if(!pageFound){
        pageList.push(page);
    }

    saveAllPages(pageList);
    return pageList;
}

export async function deletePage(page) {
    return deletePageById(page.id);
}

export async function deletePageById(id) {
    let pageList = await getSavedPages();

    for(let i = 0; i < pageList.length; i++){
        if(pageList[i].id === id){
            pageList.splice(i, 1);
            break;
        }
    }
    saveAllPages(pageList);
    return pageList;
}

export async function getPageById(id) {
    return await getSavedPages().some(p => p.id === id);
}
