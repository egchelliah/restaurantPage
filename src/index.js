
import {header} from '../header'
import {menu} from './menu'
import {home} from './home'


header()
home()

// document.addEventListener('DOMContentLoaded', function(event) {
//     header()
// })

document.body.addEventListener('click', function(e) {

    if (e.target.id=='menu'){
        menu()
    }

})
