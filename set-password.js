#!/usr/bin/env node
// Usage: node set-password.js <new-password>
// Updates the default password baked into study-tracker.html

const fs = require('fs');
const path = require('path');

const newPw = process.argv[2];
if (!newPw) {
  console.log('Usage: node set-password.js <new-password>');
  console.log('Example: node set-password.js mysecret123');
  process.exit(1);
}
if (newPw.length < 4) {
  console.error('Error: password must be at least 4 characters.');
  process.exit(1);
}

const file = path.join(__dirname, 'study-tracker.html');
if (!fs.existsSync(file)) {
  console.error('Error: study-tracker.html not found in', __dirname);
  process.exit(1);
}

let html = fs.readFileSync(file, 'utf8');
const before = html.match(/const PASSWORD_DEFAULT = "(.*)";/);
if (!before) {
  console.error('Error: could not find PASSWORD_DEFAULT in study-tracker.html');
  process.exit(1);
}

html = html.replace(/const PASSWORD_DEFAULT = ".*?";/, `const PASSWORD_DEFAULT = "${newPw}";`);
fs.writeFileSync(file, html);
console.log('Password updated: "' + before[1] + '" → "' + newPw + '"');
console.log('Commit and deploy study-tracker.html for the change to take effect.');
