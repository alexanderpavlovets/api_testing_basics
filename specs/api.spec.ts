import {describe, it} from 'mocha'
import {expect} from 'chai'
import {ApiManager} from '../api_manager'

const api = ApiManager.getApiManager()

describe('API GRUD', () => {

  it('API GET ping', async () => {
    const res = await api.get({path: '/ping'})
    expect(res.statusCode).to.equal(200, `Status Code should be 200 after GET /ping`)
    expect(res.body).to.deep.equal({}, 'Response body should be "{}" after GET /ping')
  })

  it('API GET user', async () => {
    const res = await api.get({path: '/user'})
    expect(res.statusCode).to.equal(200, `Status Code should be 200 after GET /user`)
    expect(res.body.user_name).to.equal('test user', 'Response body should contain "user_name": "test user after GET /user')
  })

  it('API POST user', async () => {
    const res = await api.post({path: '/user'})
    expect(res.statusCode).to.equal(200, `Status Code should be 200 after POST /user`)
    expect(res.body.created).to.equal(true, 'Response body should contain "created: true" after POST /user')
  })

  it('API PUT user', async () => {
    const res = await api.put({path: '/user'})
    expect(res.statusCode).to.equal(200, `Status Code should be 200 after PUT /user`)
    expect(res.body.updated).to.equal(true, 'Response body should contain "updated: true" after PUT /user')
  })

  it('API DELETE user', async () => {
    const res = await api.delete({path: '/user'})
    expect(res.statusCode).to.equal(200, `Status Code should be 200 after DELETE /user`)
    expect(res.body.deleted).to.equal(true, 'Response body should contain "deleted: true" after DELETE /user')
  })

})