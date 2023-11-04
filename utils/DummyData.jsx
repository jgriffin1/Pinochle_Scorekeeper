import { newRow, newCell, dataStyles } from "./DataFunctions";

const r = (min, max) => { 
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}; 

export function dummyRows() {
    // #region Demo data
    const rows = [];
    rows.push(newRow(dataStyles.names, [newCell('Us'), newCell('Them')]));
    rows.push(newRow({}, [newCell(r(0,40)), newCell(r(0,40))]));
    rows.push(newRow({}, [newCell(r(0,40)), newCell(r(0,40), dataStyles.neg)]));
    rows.push(newRow({}, [newCell('8', dataStyles.sum), newCell('-7', [dataStyles.neg, dataStyles.sum])]));
    rows.push(newRow({}, [newCell('5'), newCell('10')]));
    rows.push(newRow({}, [newCell('3'), newCell('-17', dataStyles.neg)]));
    rows.push(newRow({}, [newCell('8', dataStyles.sum), newCell('-7', [dataStyles.neg, dataStyles.sum])]));
    rows.push(newRow({}, [newCell('5'), newCell('10')]));
    rows.push(newRow({}, [newCell('3'), newCell('-17', dataStyles.neg)]));
    // rows.push(newRow({}, [newCell('8', dataStyles.sum), newCell('-7', [dataStyles.neg, dataStyles.sum])]));
    // rows.push(newRow({}, [newCell('5'), newCell('10')]));
    // rows.push(newRow({}, [newCell('3'), newCell('-17', dataStyles.neg)]));
    // rows.push(newRow({}, [newCell('8', dataStyles.sum), newCell('-7', [dataStyles.neg, dataStyles.sum])]));
    // rows.push(newRow({}, [newCell('5'), newCell('10')]));
    // rows.push(newRow({}, [newCell('3'), newCell('-17', dataStyles.neg)]));
    // rows.push(newRow({}, [newCell('8', dataStyles.sum), newCell('-7', [dataStyles.neg, dataStyles.sum])]));
    // rows.push(newRow({}, [newCell('5'), newCell('10')]));
    // rows.push(newRow({}, [newCell('3'), newCell('-17', dataStyles.neg)]));
    // rows.push(newRow({}, [newCell('8', dataStyles.sum), newCell('-7', [dataStyles.neg, dataStyles.sum])]));
    // rows.push(newRow({}, [newCell('5'), newCell('10')]));
    // rows.push(newRow({}, [newCell('3'), newCell('-17', dataStyles.neg)]));
    // rows.push(newRow({}, [newCell('8', dataStyles.sum), newCell('-7', [dataStyles.neg, dataStyles.sum])]));
    // rows.push(newRow({}, [newCell('5'), newCell('10')]));
    // rows.push(newRow({}, [newCell('3'), newCell('-17', dataStyles.neg)]));
    // rows.push(newRow({}, [newCell('8', dataStyles.sum), newCell('-7', [dataStyles.neg, dataStyles.sum])]));
    // rows.push(newRow({}, [newCell('5'), newCell('10')]));
    // rows.push(newRow({}, [newCell('3'), newCell('-17', dataStyles.neg)]));
    // rows.push(newRow({}, [newCell('8', dataStyles.sum), newCell('-7', [dataStyles.neg, dataStyles.sum])]));
    // rows.push(newRow({}, [newCell('5'), newCell('10')]));
    // rows.push(newRow({}, [newCell('3'), newCell('-17', dataStyles.neg)]));
    // rows.push(newRow({}, [newCell('8', dataStyles.sum), newCell('-7', [dataStyles.neg, dataStyles.sum])]));
    // rows.push(newRow({}, [newCell('5'), newCell('10')]));
    // rows.push(newRow({}, [newCell('3'), newCell('-17', dataStyles.neg)]));
    // rows.push(newRow({}, [newCell('8', dataStyles.sum), newCell('-7', [dataStyles.neg, dataStyles.sum])]));
    //#endregion

    return rows;
}

export function getDummyPageData(count){
    if (!count) count = 1;

    let pages = [];
    for(let i = 0; i< count; i++){
        pages.push({
            rows: dummyRows(),
            name: `page ${i+1}`
        })
    }

    return pages;
}