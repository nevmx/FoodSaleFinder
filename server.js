var express = require('express')

var app = express()
var websiteTitle = "Food on Campus";

app.set('views', './views')
app.set('view engine', 'jade')

app.use('/static', express.static('public'))

app.get('/', function (req, res) {
  res.render('home', {
    title: websiteTitle
  })
})

app.get('/find', function (req, res) {
  res.render('browser', {
    title: websiteTitle
  })
})

app.get('/about', function (req, res) {
  res.render('about', {
    title: websiteTitle
  })
})

app.listen(3000)
