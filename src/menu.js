const menu = () => {

    let maincontent = document.querySelector('.maincontent')
    console.log(maincontent)

    maincontent.innerHTML = ('')
    
    let appetizerTitle = document.createElement('h2')
    appetizerTitle.className='appetizerTitle'
    appetizerTitle.innerHTML=`Appetizers`
    maincontent.append(appetizerTitle)

    let appTable = document.createElement('table')
    maincontent.append(appTable)


    let appetizers = {'samosa':'$4', 'pakora':'$3', 'momos':'$6', 'naan':'$2'}

    for (const[key, value] of Object.entries(appetizers)){

        let tableRow = document.createElement('tr')
        let tableRowClass = 'appetizerItem'
        appTable.append(tableRow)
        let foodCell = document.createElement('td')
        let costCell = document.createElement('td')
        foodCell.innerHTML = key
        costCell.innerHTML = value
        tableRow.appendChild(foodCell)
        tableRow.appendChild(costCell)

        console.log(`${key}: ${value}`)
    }





}

export{
    menu
}