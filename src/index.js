
import {header} from './header'
import {menu} from './menu'
import {home} from './home'
import {contact} from './contact'


header()
home()


document.body.addEventListener('click', function(e) {

    if (e.target.id=='menu'){
        menu()
    }

    if (e.target.id=='home'){
        home()
    }

    if (e.target.id=='contact'){
        contact()
    }

})
