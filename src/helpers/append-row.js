export const appendRow = () => {
  const table = document.getElementById("tbl")
  processTable(table);
  console.log(table);
}

const processTable = (table) => {
  const rowsArray = table.getElementsByTagName('tr')
  const numberOFRows = rowsArray
  const lastRow = rowsArray[numberOFRows - 1]
  const lastRowCellCount = lastRow.getElementsByTagName('td')
  return lastRowCellCount
}

export default appendRow;