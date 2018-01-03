const   page = require('page')
const   yo = require('yo-yo')
const   empty = require('empty-element')
const   template = require('./template')
const   request = require('superagent')
const header = require('../header')

const loadPictures = (ctx, next) => { //en page siempre recive, context, y next
  request
      .get('/api/pictures')
      .end( (err,res) => {
        if(err) return console.log(err)
        ctx.pictures = res.body

        next() //para pasar a la proxima funcion de PAGE 
      })
}

page('/', header, loadPictures, (ctx,next) => {
  document.title='Platzigram'

  let main = document.getElementById('main-container')

  empty(main).appendChild(template(ctx.pictures))
})
