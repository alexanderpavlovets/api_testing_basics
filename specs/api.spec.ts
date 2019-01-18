
// import * as fakeServer from 'test-fake-server'
// import {serverModel} from '../config/server.model'
// import {expect} from 'chai'
// import {httpAsync} from '../api_manager/async.request'

// describe('First suite', () => {
//   let server = null
//   const requestOptions = {
//     protocol: 'http:', // "http:" is default. here just to understanding
//     host: 'localhost', // "localhost" is default. here just to understanding
//     port: 8888,
//     method: 'GET', // "GET" is default. here just to understanding
//     path: '/ping'
//   }
//   // before(() => {
//   //   server = fakeServer(serverModel)
//   // })
//   // after(() => {
//   //   server.stop()
//   // })

//   it('First test', async () => {
//     server = fakeServer(serverModel)
//     const response = await httpAsync(requestOptions)
//     console.log(response)
//     expect(1).to.equal(1)
//   })
// })

import {describe, it} from 'mocha'
import {expect} from 'chai'
import {httpAsync} from '../api_manager/async.request'

describe('First suite', () => {
    const requestOptions = {
    protocol: 'http:', // "http:" is default. here just to understanding
    host: 'localhost', // "localhost" is default. here just to understanding
    port: 8888,
    method: 'GET', // "GET" is default. here just to understanding
    path: '/ping'
  }
  it('First test', async () => {
    const response = await httpAsync(requestOptions)
    console.log(response)
    expect(1).to.equal(1)
  })
})