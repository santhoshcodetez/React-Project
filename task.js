const fs = require('fs');
const path = require('path');

const filePath = '/Users/Temp/Ak/Vidamuryachi';
const parsedPath = path.parse(filePath);

const directory = parsedPath.dir;


if (!fs.existsSync(directory)) {
  fs.mkdirSync(directory, { recursive: true });
}

const content = 'This is the content of codetez company ';
const fullFilePath = path.join(directory, parsedPath.base);

fs.writeFileSync(fullFilePath, content, 'utf8');

console.log(`File saved at: ${fullFilePath}`);



function fetchData(callback) {
  setTimeout(() => {
      console.log("Data fetched");
      callback("Data received");
  }, 1000);
}

fetchData(function(response) {
  console.log(response);
});