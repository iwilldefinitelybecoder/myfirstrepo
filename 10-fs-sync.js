const { readFileSync , writeFileSync } = require("fs")


const first = readFileSync('./cont/first.txt', 'utf8')
const second = readFileSync('./cont/second.txt', 'utf8')

console.log(first,second)

writeFileSync('./cont/result-sync.txt',
`here is the result ${first}, ${second}`,{flag:'a'})