// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')
function printKata (kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    //
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    //
    // http://mdn.io/json.stringify
    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}

const greenEyes1 = users.filter(user => user.eyeColor === "green")
// OR...
//const greenEyes2 = users.filter(function (user) {
    //return user.eyeColor === "green"

printKata(0, greenEyes1)   // If you don't have this function already, see the "Set up" section above.

//Filter the users array to show only the users with an isActive property of true.
const isActive1 = users.filter(user => user.isActive === true)
printKata(1, isActive1)

//Map over the users array to show only the email addresses of the users.
const email1 = users.map(user => user.email)
printKata(2, email1)

//Check whether at least one user in the users array has a company property of "OVATION".
const ovation1 = users.some(user => user.company==="OVATION")
printKata(3, ovation1)

//Find the first user in the array over the age of 38.
const age1 = users.find(user => user.age>38)
printKata(4, age1)

//Find the first user in the array over the age of 38 who is active.
const active1 = users.find(user => user.age>38 & user.isActive===true)
printKata(5, active1)

//Show the balance of every user in the array from the "ZENCO" company.
const zenco1 = users
.filter(user => user.company === "ZENCO")
.map(user=> user.balance);
printKata(6, zenco1)

//Use the .filter() method with .includes() and the .map() method
//Show the age of every user with the "fugiat" tag.
const fugiat1 = users
.filter(user => user.tags.includes ("fugiat"))
.map(user=> user.age);
printKata(7, fugiat1)