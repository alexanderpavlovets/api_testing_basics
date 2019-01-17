import {expect} from 'chai'
import {describe, it, before} from 'mocha'
import * as http from 'http'

// import {model} from '../run/server.model'
// import * as fakeServer from 'test-fake-server'

describe('Suite one', () => {
  // let server = 0
  // before(() => {
  //   server = fakeServer(model)
  // })
  // after(() => {
  //   server.stop()
  // })

  it('Test one', async() => {

    const requestOptions = {
      protocol: 'http:', // "http:" is default. here just to understanding
      host: 'localhost', // "localhost" is default. here just to understanding
      port: 8888,
      method: 'GET', // "GET" is default. here just to understanding
      path: '/user'
    }
    const a = http.request(requestOptions, function(res) {
      console.log('Good')
    })

    a.on('error', function(e) {
      console.log(e.message)
    })

    a.end()
    expect(1).to.equal(1)
  })
})