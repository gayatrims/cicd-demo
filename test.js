const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

if (!html.includes('Live!')) {
  console.error('Test Failed: Missing required text!');
  process.exit(1);
}
console.log('Test Passed!');
