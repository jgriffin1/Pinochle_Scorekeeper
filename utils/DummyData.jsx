import { newRow, newCell, dataStyles, processNumbers } from "./DataFunctions";

const r = (min, max) => { 
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}; 

//todo: we should be saving object like this "numbers" thing instead of the whole page object.
const numbers = () => {
    let players = ['Us', 'Them'];
    return {
        //divided by number type (bid, melds, trickPoints, meldPoints).
        //points objecst are nested lists for each team
        bids: [
            //each object in this list are one round
            r(25, 50), r(25, 50), r(25, 50), r(25, 50), r(25, 50), r(25, 50), r(25, 50), r(25, 50), r(25, 50), r(25, 50)
        ],
        //index of player who won bid this round
        bidWinner: [
            //each object in this list are one round
            r(0, players.length),
            r(0, players.length),
            r(0, players.length),
            r(0, players.length),
            r(0, players.length),
            r(0, players.length),
            r(0, players.length),
            r(0, players.length),
            r(0, players.length),
            r(0, players.length),
        ],
        meldPoints: [
            //each object is list of all meld point values for that round. 
            [22, 23], [40, 0], [16, 25], [15, 15], [0, 22], [8, 16], [32, 2], [10, 10], [21, 43], [0, 2]
        ],
        trickPoints: [
            //each object is list of all trick point values for that round. 
            //each list should total 25
            [15, 10], [25, 0], [0, 0], [8, 17], [4, 21], [5, 20], [6, 19], [7, 18], [11, 14], [13, 12]
        ],
        //numbers of users we are keeping score for. (players.legnth be the lengh of meldPoints[x].length and trickPoints[x].length)
        players: players,

        //must be equal to bids.length, meldPoints.length, and trickPoints.length
        rounds: 10,
    }
}

export function dummyRows() {
    // #region Demo data
    const rows = [];
    rows.push(newRow(dataStyles.names, [newCell('Us'), newCell('Them'), newCell('Bid')]));
    rows.push(newRow({}, [newCell(r(0,40)), newCell(r(0,40)), newCell(r(0,40))]));
    rows.push(newRow({}, [newCell(r(0,40)), newCell(r(0,40), dataStyles.neg), newCell(r(0,40))]));
    rows.push(newRow({}, [newCell('8', dataStyles.sum), newCell('-7', [dataStyles.neg, dataStyles.sum]), newCell(null, [dataStyles.neg, dataStyles.sum])]));
    rows.push(newRow({}, [newCell(r(0,40)), newCell(r(0,40)), newCell(r(0,40))]));
    rows.push(newRow({}, [newCell(r(0,40)), newCell(r(0,40), dataStyles.neg), newCell(r(0,40))]));
    rows.push(newRow({}, [newCell('8', dataStyles.sum), newCell('-7', [dataStyles.neg, dataStyles.sum]), newCell(null, [dataStyles.neg, dataStyles.sum])]));
    rows.push(newRow({}, [newCell(r(0,40)), newCell(r(0,40)), newCell(r(0,40))]));
    rows.push(newRow({}, [newCell(r(0,40)), newCell(r(0,40), dataStyles.neg), newCell(r(0,40))]));
    rows.push(newRow({}, [newCell('8', dataStyles.sum), newCell('-7', [dataStyles.neg, dataStyles.sum]), newCell(null, [dataStyles.neg, dataStyles.sum])]));
    rows.push(newRow({}, [newCell(r(0,40)), newCell(r(0,40)), newCell(r(0,40))]));
    rows.push(newRow({}, [newCell(r(0,40)), newCell(r(0,40), dataStyles.neg), newCell(r(0,40))]));
    rows.push(newRow({}, [newCell('8', dataStyles.sum), newCell('-7', [dataStyles.neg, dataStyles.sum]), newCell(null, [dataStyles.neg, dataStyles.sum])]));
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
            // rows: dummyRows(),
            rows: processNumbers(numbers()),
            name: `page ${i+1}`,
            id: i,
        })
    }

    return pages;
}