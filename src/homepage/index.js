const   page = require('page')
const   yo = require('yo-yo')
const   empty = require('empty-element')
const   template = require('./template')

page('/', (ctx,next) => {
  document.title='Platzigram'
  let main = document.getElementById('main-container')

  var picture = [ 
    {
      user: {
        username: "vgamez",
        avatar : "https://avatars2.githubusercontent.com/u/14943217?s=400&u=c59048e8a270e05e1e01b2c7244e200257656071&v=4"
      },
      url: 'office.jpg',
      likes : 10,
      liked : false
    },
    {
      user: {
        username: "vgamez",
        avatar : "https://avatars2.githubusercontent.com/u/14943217?s=400&u=c59048e8a270e05e1e01b2c7244e200257656071&v=4"
      },
      url: 'office.jpg',
      likes : 3,
      liked : false
    }
  ]

  empty(main).appendChild(template(picture))
})
