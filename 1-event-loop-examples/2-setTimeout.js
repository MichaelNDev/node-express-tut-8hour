// operating system process
console.log('first')
setTimeout(() => {
    console.log('second')
}, 0)
console.log('third')
// completed exited operating system process

// Key point to remember
// setTimeout is ASYNCRONOUS, therefore it gets offloaded

// result in console log is, first, third, and then second