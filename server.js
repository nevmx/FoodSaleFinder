var express = require('express')

var app = express()

app.set('views', './views')
app.set('view engine', 'jade')

app.use('/static', express.static('public'))

app.get('/', function (req, res) {
  res.render('home', {
    title: "Food Sale Finder"
  })
})

app.get('/find', function (req, res) {
  res.render('browser', {
    title: "Food Sale Finder"
  }
})

app.listen(3000)
