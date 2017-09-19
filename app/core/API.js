import { SERVER_NAME } from './../config'

class API {
  /**
   * Auth
   */

  static signIn ({ email, password }) {
    return fetch(`${SERVER_NAME}/auth/signin`, {
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
    return fetch(`${SERVER_NAME}/auth/signup`, {
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

  static logOut (_, token) {
    return fetch(`${SERVER_NAME}/auth/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify({
      })
    })
  }

  /**
   * User
   */

  static getProfile (_, token) {
    return fetch(`${SERVER_NAME}/user/profile`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify({

      })
    })
  }

  static getOrders (_, token) {
    return fetch(`${SERVER_NAME}/user/orders`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify({

      })
    })
  }

  /**
   * Products
   */

  static getProducts () {
    return fetch(`${SERVER_NAME}/products`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({

      })
    })
  }

  static getProductDetails ({productId}) {
    return fetch(`${SERVER_NAME}/products/${productId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({

      })
    })
  }

  /**
   * Cart
   */

  static getCart (_, token) {
    return fetch(`${SERVER_NAME}/user/cart`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify({

      })
    })
  }

  static addProductToCart ({ productId }, token) {
    return fetch(`${SERVER_NAME}/user/cart/product`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify({
        productId
      })
    })
  }

  static removeProductFromCart ({ productId }, token) {
    return fetch(`${SERVER_NAME}/user/cart/product`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify({
        productId
      })
    })
  }

  static placeOrder ({ delivery, payment }, token) {
    return fetch(`${SERVER_NAME}/user/order`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify({
      })
    })
  }
}

export {
  API
}
