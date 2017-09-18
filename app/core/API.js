import { SERVER_NAME } from './../config'

class API {
  static signIn ({ email, password }) {
    return fetch(`${SERVER_NAME}/user/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    })
  }

  static signUp ({ name, email, password }) {
    return fetch(`${SERVER_NAME}/user/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        password
      }) 
    })
  }

  static logOut () {
    return fetch(`${SERVER_NAME}/user/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
      }) 
    })
  }
}

export {
    API
}