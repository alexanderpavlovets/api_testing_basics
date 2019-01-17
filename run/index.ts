import {Runner} from './runner'

const runner = new Runner()

runner.runServer()

setTimeout(() => {
  runner.runTest()
}, 3000)

console.log('soooooooo')
// runner.runTest()
// runner.stopServer()