const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateTrashTalk = require('./generate_trashTalk.js')
const Handlebars = require("handlebars")
const app = express()
const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')


Handlebars.registerHelper("setChecked", function (occupation, currentOccupation, options) {
  if (occupation === currentOccupation) {
    return options.fn(this)
  } else {
    return options.inverse(this)
  }
})

app.get('/', (req, res) => {
  res.render('index')
})

app.use(bodyParser.urlencoded({ extended: true }))

app.post('/', (req, res) => {
  const options = req.body
  const trashTalk = generateTrashTalk(options)
  console.log('req.body', req.body)
  res.render('index', { trashTalk: trashTalk, options: options })
})

app.listen(port, () => {
  console.log(`Express app listening on port ${port}.`)
})