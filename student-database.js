/*
 * Instruction: Parse the JSON string below, compute each student's average score across the three subjects, and render a results table
 * in the browser showing name, average, and Pass/Fail status (pass mark: 50)
 */

let schoolData = `{
  "classA": [
    {"name": "Amara", "CSC101": 72, "CSC102": 55, "CSC103": 68},
    {"name": "Chidi", "CSC101": 40, "CSC102": 48, "CSC103": 35},
    {"name": "Ngozi", "CSC101": 85, "CSC102": 90, "CSC103": 78},
    {"name": "Emeka", "CSC101": 60, "CSC102": 52, "CSC103": 44}
  ],
  "classB": [
    {"name": "Fatima", "CSC101": 91, "CSC102": 88, "CSC103": 95},
    {"name": "Tunde", "CSC101": 30, "CSC102": 45, "CSC103": 50},
    {"name": "Blessing", "CSC101": 77, "CSC102": 63, "CSC103": 70},
    {"name": "Seun", "CSC101": 55, "CSC102": 49, "CSC103": 58}
  ]
}`

function displayTable (data) {
  const table = document.createElement('table')
  table.style.border = '2px solid black'
  table.style.borderCollapse = 'collapse'
  const tr = document.createElement('tr')
  tr.style.border = '1px solid black'
  const nameCol = document.createElement('th')
  nameCol.style.border = '1px solid black'
  const averageCol = document.createElement('th')
  averageCol.style.border = '1px solid black'
  const statusCol = document.createElement('th')
  nameCol.textContent = 'Name'
  averageCol.textContent = 'Average'
  statusCol.textContent = 'Status'
  console.log(data)
  tr.appendChild(nameCol)
  tr.appendChild(averageCol)
  tr.appendChild(statusCol)
  table.appendChild(tr)
  data.classA.forEach((tData) => {
    const tableRow = document.createElement('tr')
    const tableName = document.createElement('td')
    const tableAverage = document.createElement('td')
    const tableStatus = document.createElement('td')
    tableName.textContent = tData.name
    tableAverage.textContent = ((tData.CSC101 + tData.CSC102 + tData.CSC103) / 3).toFixed(2)
    console.log(tableAverage.textContent)
    if (tableAverage.textContent <= 50) {
      tableStatus.textContent = 'Fail'
    } else {
      tableStatus.textContent = 'Pass'
    }
    tableRow.appendChild(tableName)
    tableRow.appendChild(tableAverage)
    tableRow.appendChild(tableStatus)
    table.appendChild(tableRow)
  })
  data.classB.forEach((tData) => {
    const tableRow = document.createElement('tr')
    const tableName = document.createElement('td')
    const tableAverage = document.createElement('td')
    const tableStatus = document.createElement('td')
    tableName.textContent = tData.name
    tableAverage.textContent = ((tData.CSC101 + tData.CSC102 + tData.CSC103) / 3).toFixed(2)
    console.log(tableAverage.textContent)
    if (tableAverage.textContent <= 50) {
      tableStatus.textContent = 'Fail'
    } else {
      tableStatus.textContent = 'Pass'
    }
    tableRow.appendChild(tableName)
    tableRow.appendChild(tableAverage)
    tableRow.appendChild(tableStatus)
    table.appendChild(tableRow)
  })
  document.body.appendChild(table)
}

try {
  const data = JSON.parse(schoolData)
  displayTable(data)
} catch (error) {
  console.error('Failed to parse JSON safely:', error.message)
}
