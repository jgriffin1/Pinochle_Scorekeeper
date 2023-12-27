//data.jsx
//for demo data and data management
import {
  StyleSheet,
} from 'react-native';

export const newCell = (pText, pStyle) => {
  return { text: pText, style: pStyle }
}

export const newRow = (pStyle = {}, pCells = '') => {
  return { rowStyle: pStyle, cells: pCells.map(c => newCell(c.text, c.style)) };
}

export const dataStyles = StyleSheet.create({
  names: {
    fontWeight: 'bold',
    // borderBottomWidth: 2,
    fontSize: 18,
    textDecorationLine: 'underline',
  },
  sum: {
    borderTopWidth: 1,
  },
  neg: {
    color: 'red',
  },
});

const cellTemp1 = { text: 'abc', cellStyle: { color: 'blue' } }
const cellTemp2 = { text: 'def', cellStyle: { color: 'pink' } }
const cellTemp3 = { text: 'ghi', cellStyle: { color: 'red' } }
const rowTemp1 = { rowStyle: { color: 'green' }, cells: [cellTemp1, cellTemp2, cellTemp3] }
const rowTemp2 = { rowStyle: { color: 'green' }, cells: [newCell('cell func', { color: 'brown' }), cellTemp2, cellTemp3] }

const test3 = [
  rowTemp1,
  rowTemp1,
  newRow({}, [cellTemp3, cellTemp1]),
  rowTemp2,
  {
    rowStyle: { color: 'blue', borderTopColor: 'red', borderTopWidth: 2 },
    cells: [
      newCell('function new', { borderTopColor: 'green', borderTopWidth: 4, borderBottomWidth: 2 }),
      newCell('asdf1', { borderBottomWidth: 2 }),
      newCell('asf2', { borderBottomWidth: 2, borderBottomColor: 'purple' }),
      { text: 'manual new (bold)', style: { fontWeight: 'bold' } },
    ]
  },
]

export const demoData = {
  test3: test3,
}

/**
 * 
 * @param {*} numbers 
 * numbers:
 *  {
    bids: [int], //index of player who won bid this round
    bidWinner: [int], //list, index of bidwinning player (usually 0 or 1)
    meldPoints: [[int]],//each object is list of all meld point values for that round. 
    trickPoints: [[int]], //each object is list of all trick point values for that round. 
    players: [String], // (players.legnth be the lengh of meldPoints[x].length and trickPoints[x].length)
    rounds: int, //must be equal to bids.length, meldPoints.length, and trickPoints.length
  }
 * @returns 
    List of Row Objects for all entered data
 */
export function processNumbers(numbers) {
  //return array of sums
  function getSumDataByRound(round, meldList, trickList, bidList, bidWinnerList) {
      const playerCount = meldList[0].length;

      let sumResults = [];

      for(let p = 0; p<playerCount; p++) {
          let score = 0;

          for(let r = 0; r <= round; r++) {
              const rBid = bidList[r];
              const rBidWinner = bidWinnerList[r];
              const rMeld = meldList[r][p];
              const rTrick = trickList[r][p];

              //logic to modify these values (such as when one loses meld when taking no tricks)
              let bidVal = rBid;
              let bidWinnerVal = rBidWinner;
              let trickVal = rTrick;
              //todo: below logic should be based on >0 tricks taken, not points
              let meldVal = (rTrick !== 0 ? rMeld : 0) //TODO: make a popup. If team gets zero points, make a popup ask for whether or not the team got any tricks.
              
              if(bidWinnerVal === p) {
                  if(meldVal + trickVal >= bidVal){
                      score += meldVal;
                      score += trickVal;
                  }else {
                      score -= bidVal;
                  }
              }else{
                  score += meldVal;
                  score += trickVal;
              }
          }
          sumResults.push(score);
      }

      return sumResults;
  }
  
  const rows = [];
  rows.push(newRow(dataStyles.names, [...numbers.players.map(p => newCell(p)), newCell('Bid')]));
  
  for(let round = 0; round< numbers.rounds; round++) {
      //meld points
      rows.push(newRow({}, [...numbers.meldPoints[round].map(p => newCell(p)), newCell(numbers.bids[round])]));
      //trick points
      rows.push(newRow({}, [...numbers.trickPoints[round].map(p => newCell(p)), newCell()]));
      
      //sums:
      let sums = getSumDataByRound(round, numbers.meldPoints, numbers.trickPoints, numbers.bids, numbers.bidWinner)

      //create row/cell object
      rows.push(newRow({}, [...sums.map(s => {
          let styles = [dataStyles.sum];
          if (s < 0) styles.push(dataStyles.neg);

          return newCell(s, styles)
      }) , newCell(null, [dataStyles.sum])]))
  }

  return rows;
}