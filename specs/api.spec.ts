import * as fakeServer from 'test-fake-server'
import {serverModel} from '../server/server.model'
import {expect} from 'chai'


describe('First suite', () => {
  let server = null
  before(() => {
    server = fakeServer(serverModel)
  })
  after(() => {
    server.stop()
  })

  it('First test', async () => {
    expect(1).to.equal(1)
  })
})