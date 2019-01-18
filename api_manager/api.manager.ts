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
  data?: any
}

interface IPutRequest {
  path: string
  data?: any
  method?: 'PUT'
}

interface IDeleteRequest {
  path: string
  method?: 'DELETE'
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
    const requestOptions = this.formRequestOptions(requestData)
    return httpAsync(requestOptions)
  }

  public async post(requestData: IPostRequest) {
    requestData.method = 'POST'
    const requestOptions = this.formRequestOptions(requestData)
    return httpAsync(requestOptions, requestData.data)
  }

  public async put(requestData: IPutRequest) {
    requestData.method = 'PUT'
    const requestOptions = this.formRequestOptions(requestData)
    return httpAsync(requestOptions, requestData.data)
  }

  public async delete(requestData: IDeleteRequest) {
    requestData.method = 'DELETE'
    const requestOptions = this.formRequestOptions(requestData)
    return httpAsync(requestOptions)
  }

  private get serverData() {
    return {
      protocol: 'http:', // "http:" is default. here just to understanding
      host: 'localhost', // "localhost" is default. here just to understanding
      port: serverModel.port
    }
  }

  private formRequestOptions(methodRelatedOptions): RequestOptions {
    // removing data. For cases POST and PUT
    if (methodRelatedOptions.data) {
      delete methodRelatedOptions.data
    }
    return {...this.serverData, ...methodRelatedOptions}
  }
}

// Example of usage
// const api = ApiManager.getApiManager()

export {ApiManager}
