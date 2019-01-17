import * as Mocha from 'mocha'
import * as path from 'path'

const mocha = new Mocha({
  ui: 'tdd',
  reporter: 'list'
})
const specDir = path.join(__dirname, '../specs')
const specFile = 'spec.ts'

mocha.addFile(path.join(specDir, specFile))

console.log('ABDASD')
console.log(mocha.files)

export {mocha}
