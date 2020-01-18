import React from 'react';
import './append-row.css';
import appendRow from '../../helpers/append-row';

export const TableDisplay = () => {
  return (
    <div className="table-container">
      <table id="tbl" border="1">
        <tbody>
          <tr>
            <td>Row</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Row</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Row</td>
            <td>3</td>
          </tr>
          <tr>
            <td>Row</td>
            <td>4</td>
          </tr>
        </tbody>
      </table>
      <button onClick={appendRow}>Add a row!</button>
    </div>
    
  )
}

export default TableDisplay;