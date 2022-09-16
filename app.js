
// npm --version

// local dependency - use it only it this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manigest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

// Don't run the code below, I do not have lodash package installed.
const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)