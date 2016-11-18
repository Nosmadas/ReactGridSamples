import React from 'react';
import Spreadsheet from 'react-spreadsheet-component'
require('style-loader!css-loader!react-spreadsheet-component/styles/excel.css')
require('style-loader!css-loader!../example.css')

const initialData = {
    rows: [
        [' ', 'AAA', 'BBB', 'CCC', 'DDD', 'EEE', 'FFF', 'GGG'],
        ['COM', '0,0', '0,1', '0,2', '0,3', '0,4', '0,5', '0,6'],
        ['DIV', '1,0', '1,1', '1,2', '1,3', '1,4', '1,5', '1,6'],
        ['DEV', '2,0', '2,1', '2,2', '2,3', '2,4', '2,5', '2,6'],
        ['ACC', '3,0', '3,1', '3,2', '3,3', '3,4', '3,5', '3,6']
    ]
};

const cellClasses = {
    rows: [
        ['', '', '', '', '', '', '', ''],
        ['green', '', '', '', '', '', '', ''],
        ['purple', '', '', '', '', '', '', ''],
        ['yellow', '', '', '', '', '', '', ''],
    ]
};

var config = {
    // Initial number of rows
    rows: 5,
    // Initial number of columns
    columns: 8,
    // True if the first column in each row is a header (th)
    hasHeadColumn: true,
    // True if the first column in each row is a header (th)
    headColumn: true,
    // True if the data for the first column is just a string.
    // Set to false if you want to pass custom DOM elements.
    headColumnIsString: true,
    hasHeadRow: true,
    // True if the first row is a header (th)
    headRow: true,
    // True if the data for the cells in the first row contains strings.
    // Set to false if you want to pass custom DOM elements.
    headRowIsString: true,
    // True if the user can add rows (by navigating down from the last row)
    canAddRow: true,
    // True if the user can add columns (by navigating right from the last column)
    canAddColumn: false,
    // Override the display value for an empty cell
    emptyValueSymbol: '-',
    // Fills the first column with index numbers (1...n) and the first row with index letters (A...ZZZ)
};

const sheet = () => (
    <div className='example'>
        <h2>React-Spreadsheet-Component</h2>
        <div id="exampleTwo">
            <Spreadsheet initialData={initialData} config={config} cellClasses={cellClasses} />
        </div>
    </div>
)

export default sheet