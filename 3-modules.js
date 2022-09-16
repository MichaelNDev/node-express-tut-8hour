// CommonJS(library Node uses under the hood), every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

// Modules
const names = require('./4-names')
const sayHi = require('./5-utils')
const altFlavor = require('./6-alternative-flavor')
require('./7-mind-grenade')

sayHi('Susan')
sayHi(names.john)
sayHi(names.peter)
