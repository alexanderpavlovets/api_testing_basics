import * as Mocha from 'mocha'
import * as path from 'path'
import {mochaOpts, specDir, specFiles, serverModel} from '../config'
import * as fakeServer from 'test-fake-server'

const init = async function(){
  // Create Mocha and add specs to run
  const mocha = new Mocha(mochaOpts)
  specFiles.forEach((fileName) => mocha.addFile(path.join(specDir, fileName)))

  // Create and start fake-server
  const server = fakeServer(serverModel)

  // Should be implemented "waitForServerIsUp". But works without it - really weird.

  // Run tests and stop server after tests are executed
  const mochaRunner = mocha.run((failures) => {process.exitCode = failures ? 1 : 0})
  mochaRunner.on('end', function(){
    server.stop()
  })
}()
