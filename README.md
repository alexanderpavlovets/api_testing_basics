# Read Me
Do not forget the installation after clinning
```
npm i
```

### To run tets
```
npm test
```

### To run mocha with flags:
```
mocha -r ts-node/register specs/api.spec.ts
```

### Running as a package. Internal instruction:
* download from github:
```
npm i git+ssh://git@github.com/alexanderpavlovets/api_testing_basics.git#for_node_modules // after # is branch name
```
* package.json
```
"name": "api_testing_basics_example" // the name of folder that will be downloaded to node_modules. !!! And the name that you will require
"main": "index.js" // the file that will be required
"bin": {
  "fake-api-test": "./bin/fake-api-test" // "fake-api-test" to use in npm-scripts. And path what file will be run.
},
```
* create a file which is pointed in "bin" in package.json
* usage
```
const a = require('api_testing_basics_example')

  "scripts": {
    "tsc": "tsc",
    "test": "fake-api-test"
  },
```