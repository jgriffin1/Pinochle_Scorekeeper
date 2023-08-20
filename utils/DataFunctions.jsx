//data.jsx
//for demo data and data management

export const newCell = (pText, pStyle) => {
    return { text: pText, style: pStyle }
}

export const newRow = (pStyle = {}, pCells = '') => {
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