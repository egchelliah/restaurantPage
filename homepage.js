const header = () => {

    let content = document.getElementById('content')

    // Create header
    let headerMenu = ['home', 'menu', 'contact']

    let header = document.createElement('div')
    header.className='header'
    content.append(header)

    for (let i=0; i<headerMenu.length; i++){
        let headerItem = document.createElement('div')
        headerItem.className=headerMenu[i]
        headerItem.innerHTML=headerMenu[i]
        header.append(headerItem)
    }

    // Create home page content
    let homecontent = document.createElement('div')
    homecontent.className='homecontent'
    content.append(homecontent)

    let welcome = document.createElement('h2')
    welcome.className='welcome'
    welcome.innerHTML=`Welcome to Eb's Kitchen`
    homecontent.append(welcome)

    let welcometext = document.createElement('p')
    welcometext.className='welcometext'
    welcometext.innerHTML=`If you've been looking for the authentic taste of South Indian food, you've come to the right place. Come in anytime, no reservations needed!`
    homecontent.append(welcometext)

    // Create hours block
    let hourTitle = document.createElement('h2')
    hourTitle.className='hourTitle'
    hourTitle.innerHTML='Hours'
    homecontent.append(hourTitle)

    let hoursList = document.createElement('div')
    hoursList.className='hoursList'
    homecontent.append(hoursList)

    let hours = ['Sunday: 8am - 8pm', 'Monday: 6am - 6pm', 'Tuesday: 6am - 6pm', 'Wednesday: 6am - 6pm', 'Thursday: 6am - 6pm', 'Friday: 8am - 8pm', 'Saturday: 8am - 8pm']

    for (let i=0; i<hours.length; i++){
        let p = document.createElement('p')
        p.className='dailyHour'
        p.innerHTML=hours[i]
        hoursList.appendChild(p)
    }

    

}

export{
    header
}