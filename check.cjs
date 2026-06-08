const fs = require('fs');
const dirs = fs.readdirSync('.', { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => d.name);
console.log("Directories:", dirs.join(", "));
if (dirs.includes('.git')) {
  console.log(".git exists!");
}
