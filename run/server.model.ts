// Define schema for fake-server
const model = {
  "port": 8888,
  "api": [
    {
      "method": "GET",
      "path": "/user",
      "response": {
        "user_name": "test user"
      }
    },
    {
      "method": "POST",
      "path": "/user",
      "response": {"created": true}
    },
    {
      "method": "GET",
      "path": "/ping",
      "response": {},
      "status": 200
    }
  ]
}

export {model}
