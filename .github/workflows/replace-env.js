const fs = require('fs');

const targetPath = './src/environments/environment.prod.ts';
const file = fs.readFileSync(targetPath, 'utf8');
const newFile = file.replace('API_KEY', process.env.API_KEY);

fs.writeFileSync(targetPath, newFile);
