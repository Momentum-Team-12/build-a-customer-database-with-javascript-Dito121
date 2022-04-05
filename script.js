function buildNewCustomers(arrayOfCustomers) {
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    function monthToMonth(numberOfMonth) {
    return months[Number(numberOfMonth)-1]
    }

    let newCustomers = []
    for (let person of arrayOfCustomers) {
        let name = person.name.first.slice(0,1).toUpperCase() + person.name.first.slice(1) +' '+ person.name.last.slice(0,1).toUpperCase() + person.name.last.slice(1)

        let address = person.location.street.number +' '+ person.location.street.name +'\n '+  person.location.city +', '+ nameToAbbr(person.location.state) +' '+ person.location.postcode

        let birthdate = monthToMonth(person.dob.date.slice(5,7)) +' '+ person.dob.date.slice(8,10) + ", " + person.dob.date.slice(0,4)

        let registered = monthToMonth(person.registered.date.slice(5,7)) +' '+ person.registered.date.slice(8,10) + ", " + person.registered.date.slice(0,4)

        let thumbnail = person.picture.thumbnail
        let email = person.email
        newCustomers.push({name, address, birthdate, registered, thumbnail, email})
    }
    return newCustomers
}

let newCustomers = buildNewCustomers(customers)

let resultsDiv = document.getElementById("results")

function buildResults(customerArray) {
    for (let customer of customerArray) {
        let cardDiv = document.createElement('div')
        cardDiv.classList.add("card")

        let image = document.createElement("img")
        image.src = customer.thumbnail

        let NAME = document.createElement('h3')
        NAME.innerText = `${customer.name} \n`

        let textEmail = document.createElement('div')
        textEmail.classList.add("email")
        textEmail.innerText = `${customer.email}`

        let textAddress = document.createElement('div')
        textAddress.classList.add("address")
        textAddress.innerText = `${customer.address}`

        let textDates = document.createElement('div')
        textDates.classList.add("dates")
        textDates.innerText = `DOB: ${customer.birthdate} \n Customer since:  ${customer.registered}`

        cardDiv.appendChild(image)
        cardDiv.appendChild(NAME)
        cardDiv.appendChild(textEmail)
        cardDiv.appendChild(textAddress)
        cardDiv.appendChild(textDates)
        resultsDiv.appendChild(cardDiv)
    }
}

buildResults(newCustomers)
