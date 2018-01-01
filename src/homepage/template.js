const yo = require('yo-yo');
const layout = require('../layout')

var template = yo `
    <div class = 'container timeline'>
        <div class = 'row'> 
            <div class="col s12 m10 offset-m1 offset-l3">
             Content
            </div>
        </div>
        
    </div>`

module.exports = layout(template)