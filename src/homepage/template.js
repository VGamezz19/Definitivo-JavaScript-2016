const yo = require('yo-yo');
const layout = require('../layout')
let picture = require('../picture-card')

module.exports = function(pictures) {
    let le =  yo `
        <div class = 'container timeline'>
            <div class = 'row'> 
                <div class="col s12 m10 l6 offset-m1 offset-l3">
                ${pictures.map((pic)=>{
                    return picture(pic);
                })}
                </div>
            </div>
        </div>`
    return layout(le)
}

