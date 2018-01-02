const yo = require('yo-yo');
//const moment = require('moment');

if(!window.Intl){
  window.Intl = require('intl')
  require('intl/locale-data/jsonp/en-US.js')
  require('intl/locale-data/jsonp/es.js')
}

var IntlRelativeFormat = window.IntlRelativeFormat =  require('intl-relativeformat');
require('intl-relativeformat/dist/locale-data/en.js');
require('intl-relativeformat/dist/locale-data/es.js');

let rf = new IntlRelativeFormat('en-US')

module.exports = function pictureCard(pic){
  var el
  const render = (renderPic) => {
    return yo `
      <div class="card ${renderPic.liked ? ' liked' : ''}">
        <div class="card-image waves-effect waves-block waves-light">
          <img class="" src="${renderPic.url}">
        </div>
        <div class="card-content">
          <a href = '/user/${renderPic.user.username}' class="card-title">
            <img src='${renderPic.user.avatar}' class = 'avatar'>
            <span class = 'username'>${renderPic.user.username}</span>
          </a>
          <small class = 'right time'> ${rf.format(renderPic.createdAt)}</small>
          <p>
            <a class = 'left' href = '#' onclick=${like.bind(null,true)}><i class="fa fa-heart-o" aria-hidden="true"></i></a>
            <a class = 'left' href = '#' onclick=${like.bind(null,false)}><i class="fa fa-heart" aria-hidden="true"></i></a>
            <span class = 'left likes' >${renderPic.likes} megustas</spna>
          </p>
        </div>
      </div>` 
  }

  const like = (liked) => {
    pic.liked = liked
    pic.likes += liked ? +1 : -1
    var newEl = render(pic)
    yo.update(el, newEl)
    //Ponemos return FALSe, para que no continue 
    //con la funcioncionalidad del enlace 
    return false
  }

  el = render(pic)

  return el
} 