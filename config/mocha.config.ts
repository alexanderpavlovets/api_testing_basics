import * as path from 'path'
import {MochaOptions} from 'mocha'

const mochaOpts: MochaOptions = {
  ui: 'tdd',
  reporter: 'list'
}

const specDir = path.join(__dirname, '../specs')
const specFiles = ['api.spec.ts']

export {mochaOpts, specDir, specFiles}
