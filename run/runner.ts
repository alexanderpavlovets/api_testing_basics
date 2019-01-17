import * as fakeServer from 'test-fake-server'
import {model} from './server.model'
import {mocha} from './mocha'
import * as http from 'http'

class Runner {
  private server

  constructor() {
    this.server = null
  }

  public runServer() {
    this.server = fakeServer(model)
  }

  public stopServer(){
    this.server.stop()
  }

  public runTest(){
    const fuck = mocha.run((failures) => {
      process.exitCode = failures ? 1 : 0
    })
  }
}

// const isServerAnswersToPing = function(callback) {
//   const requestOptions = {
//     protocol: 'http:', // "http:" is default. here just to understanding
//     host: 'localhost', // "localhost" is default. here just to understanding
//     port: model.port,
//     method: 'GET', // "GET" is default. here just to understanding
//     path: '/ping'
//   }
//   const req = http.request(requestOptions, function(res) {
//     if(res.statusCode === 200) {
//       callback(true)
//     } else {
//       console.log('Received status code from server ', res.statusCode)
//     }
//   })

//   req.on('error', function(e) {
//     if(e.message.includes('ECONNREFUSED')) {
//       callback(false)
//     } else {
//       throw e
//     }
//   })

//   req.end()
// }


export {Runner}
