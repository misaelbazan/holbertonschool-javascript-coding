const fs = require('fs');

function countStudents(fileName) {
  const filePath = fileName;

  try {
    // Read the csv file synchronously
    const data = fs.readFileSync(filePath, { encoding: 'utf-8' });
    // Split data into rows
    const rows = data.split('\n').filter(Boolean);
    // Parse Rows
    const headers = rows.shift().split(',');
    const records = [];

    rows.forEach((row) => {
      const values = row.split(',');
      const record = {};
      values.forEach((value, index) => {
        record[headers[index]] = value;
      });
      records.push(record);
    });

    console.log(`Number of students: ${records.length}`);
    const studentsCs = Object.values(records).filter((value) => value.field === 'CS');
    console.log(`Number of students in CS: ${studentsCs.length}. List: ${studentsCs.map((name) => name.firstname).join(', ')}`);
    const studentsSwe = Object.values(records).filter((value) => value.field === 'SWE');

    console.log(`Number of students in SWE: ${studentsSwe.length}. List: ${studentsSwe.map((user) => user.firstname).join(', ')}`);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
