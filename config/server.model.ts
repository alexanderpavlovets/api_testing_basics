// Define schema for fake-server
const serverModel = {
  "port": 8888,
  "api": [
    {
      "method": "GET",
      "path": "/ping",
      "response": {},
      "status": 200
    },
    {
      "method": "GET",
      "path": "/user",
      "response": {"user_name": "test user"}
    },
    {
      "method": "POST",
      "path": "/user",
      "response": {"created": true}
    },
    {
      "method": "PUT",
      "path": "/user",
      "response": {"updated": true}
    },
    {
      "method": "DELETE",
      "path": "/user",
      "response": {"deleted": true}
    }
  ]
}

export {serverModel}
