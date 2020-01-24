# hmrcode-challenge-1
bikin endpoint `POST /api/member`

```javascript
const Validator = require('validatorjs')

const middleWare = (req, res, next) => {
  const { name, email } = req.body
  const data = { 
    name,
    email
  }
  const rules = {
    name: 'required|min:3',
    email: 'required|email'
  }
  const validation = new Validator(data, rules)

  if (validation.fails()) {
    res.status(422).json({
      errors: {
        name: validation.errors.first('name'),
        email: validation.errors.first('email')
      }
    })
  } else {
    return next()
  }
}

module.exports = middleWare
```
