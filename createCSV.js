const fs = require("fs");

function convertToCSV(data) {
  const csvContent = data.map((item) =>
    Object.values(item)
      .map((value) => (typeof value === "string" ? `"${value}"` : value))
      .join(",")
  );

  const csvHeader = Object.keys(data[0]).join(",");
  const csvString = csvHeader + "\n" + csvContent.join("\n");

  return csvString;
}

function createCSVFile(data, fileName) {
  const csvData = convertToCSV(data);

  fs.writeFile(fileName, csvData, (err) => {
    if (err) {
      console.error("Error writing CSV file:", err);
    } else {
      console.log(`CSV file '${fileName}' has been created.`);
    }
  });
}

module.exports = createCSVFile;
