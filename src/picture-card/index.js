const yo = require('yo-yo');

module.exports = function (pic){
    return yo `
    <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="" src="${pic.url}">
    </div>
    <div class="card-content">
      <a href = '/user/${pic.user.username}' class="card-title">
        <img src='${pic.user.avatar}' class = 'avatar'>
        <span class = 'username'>${pic.user.username}</span>
      </a>
      <small class = 'right time'> Hace 1 día </small>
      <p>
        <a class = 'left' href = '#'><i class="fa fa-heart-o" aria-hidden="true"></i></a>
        <span class = 'left likes' >${pic.likes} megustas</spna>
      </p>
    </div>
  </div>` 
} 