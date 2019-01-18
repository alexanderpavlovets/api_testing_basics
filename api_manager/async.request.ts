import * as http from 'http'
import {RequestOptions} from 'http'
import * as querystring from 'querystring'

declare type MyResponse = {
  statusCode: number
  headers: any
  body: any
}

function httpAsync(params: RequestOptions, requestPayload?: any): Promise<MyResponse> {
  return new Promise((resolve, reject) => {
    const req = http.request(params, (res) => {

      // Make data for response
      let responseObj = {
        statusCode: null,
        headers: null,
        body: []
      }
      res.on('data', function(chunk) {
        responseObj.body.push(chunk)
      })
      // Resolve on response end
      res.on('end', function(){
        try {
          responseObj.statusCode = res.statusCode
          responseObj.headers = res.headers
          responseObj.body = JSON.parse(Buffer.concat(responseObj.body).toString())
        } catch (e) {
          reject(e)
        }
        resolve(responseObj)
      })
    })

    // Reject on request error
    req.on('error', function(err){
      reject(err)
    })

    // If request payload needed - write it to the response
    if(requestPayload) {
      const requestPayloadString = querystring.stringify(requestPayload)
      req.write(requestPayloadString)
    }

    // Send the request
    req.end()
  })
}

export {httpAsync}