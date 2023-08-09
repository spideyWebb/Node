const fs = require('fs')

console.log('Start')

const data = fs.readFileSync('./file.txt', 'utf8')
console.log('data: ', data)

console.log('end')