const contact = () => {

    let maincontent = document.querySelector('.maincontent')
    console.log(maincontent)

    maincontent.innerHTML = ('')

    let addressBlock = document.createElement('div')
    addressBlock.className='addressBlock'

    maincontent.append(addressBlock)

    let addressHeading = document.createElement('h3')
    addressHeading.innerHTML='Address'
    let addressInfo = document.createElement('p')
    addressInfo.innerHTML = '1523 Full Belly Drive, Yummytown 230442'

    addressBlock.appendChild(addressHeading)
    addressBlock.appendChild(addressInfo)
    
    



}

export{
    contact
}