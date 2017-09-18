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

  static logOut () {
    return fetch(`${SERVER_NAME}/auth/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
      }) 
    })
  }

  /**
   * User
   */

  static getProfile(token) {
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

  static getPurchases(token) {
    return fetch(`${SERVER_NAME}/user/purchases`, {
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

  static getProducts() {
    return fetch(`${SERVER_NAME}/products`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({

      })
    })
  }

  static getProductDetails({product_id}) {
    return fetch(`${SERVER_NAME}/products/${product_id}`, {
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

  static getCart(token) {
    return fetch(`${SERVER_NAME}/cart`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify({

      })
    })
  }

  static addToCart({product_id}, token) {
    return fetch(`${SERVER_NAME}/cart/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify({
        product_id
      })
    })
  }

  static orderCart(token) {
    return fetch(`${SERVER_NAME}/cart/order`, {
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