import {RequestOptions} from 'http'
import {serverModel} from '../config'
import {httpAsync} from './async.request'

interface IGetRequest {
  path: string
  method?: 'GET'
}

interface IPostRequest {
  path: string
  method?: 'POST'
}

interface IPutRequest {
  path: string
  method?: 'PUT'
}

interface IDeleteRequest {
  path: string
  method?: 'DELETE'
}

const serverData = {
  protocol: 'http:', // "http:" is default. here just to understanding
  host: 'localhost', // "localhost" is default. here just to understanding
  port: serverModel.port
}

// Singletone pattern
class ApiManager {
  private static instance: ApiManager

  private constructor(){}

  public static getApiManager() {
    if(!this.instance) {
      this.instance = new ApiManager()
    }
    return this.instance
  }

  public async get(requestData: IGetRequest) {
    requestData.method = 'GET'
    return httpAsync({...serverData, ...requestData})
  }

  public async post(requestData: IPostRequest, requestPayload: any = {}) {
    requestData.method = 'POST'
    return httpAsync({...serverData, ...requestData}, requestPayload)
  }

  public async put(requestData: IPutRequest, requestPayload: any = {}) {
    requestData.method = 'PUT'
    return httpAsync({...serverData, ...requestData}, requestPayload)
  }

  public async delete(requestData: IDeleteRequest) {
    requestData.method = 'DELETE'
    return httpAsync({...serverData, ...requestData})
  }
}

// Example of usage
// const api = ApiManager.getApiManager()

export {ApiManager}
