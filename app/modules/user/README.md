# User Module

## Ducks

// user.js

```javascript
const LOG_IN = 'LOG_IN'

export const logIn = name => ({ type: LOG_IN, name })

export default function reducer(state = {}, action) {
  …
}
```