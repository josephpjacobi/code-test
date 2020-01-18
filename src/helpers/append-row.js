export const appendRow = () => {
  const table = document.getElementById("tbl")
  const rowsArray = table.getElementsByTagName('tr')
  const numberOFRows = rowsArray.length
  const lastRow = rowsArray[numberOFRows - 1]
  const lastRowCellCount = lastRow.getElementsByTagName('td').length
  const newRow = table.insertRow();  //defaults to -1 which is the last row
  for (let cellCount = 0; cellCount < lastRowCellCount; cellCount++ ) {
    let newCell = newRow.insertCell();
    newCell.innerHTML = `New Cell, who dis?`
  }
}


export default appendRow;