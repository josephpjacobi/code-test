import React from 'react';
import './append-row.css';
import appendRow from '../../helpers/append-row';

export const DisplayTable = () => {
  return (
    <div>
      <table id="tbl" border="1">
        <tbody>
          <tr>
            <td>Joe</td>
            <td>Jacobi</td>
          </tr>
        </tbody>
      </table>
      <button onClick={appendRow}>Add a row!</button>
    </div>
    
  )
}

export default DisplayTable;