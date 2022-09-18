const {createReadStream} = require('fs')

const stream = createReadStream('./content/big.txt', {
    highWaterMark: 90000,})

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000})
// const stream = createReadStream('../content/big.txt, { encoding: 'utf8'})

stream.on('data', () =>{
    console.log(result)
})

stream.on('error', (err) => {
    console.log(err)
})