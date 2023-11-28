//Calculator Lesson
// JS in index, html and css are in files.

let countEl = document.getElementById("count-el")
let count = 0;
let saveEl = document.getElementById("save-el")

function increment() {
    count += 1;
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    save.length.textContent = countStr
    countEl.textContent = 0
    count = 0
}

//CHALLENGE #1
// Create two variables, firstName and lastName
let firstName = 'Stephen '
let lastName = 'Connolly'

// Concatenate the two variables into a third variable called fullName
let fullName = firstName + lastName
// Log fullName to the console
console.log(fullName)


//CHALLENGE #2
let name = "Linda"
let greeting = "Hi there"

// Create a function that logs out "Hi there, Linda!" when called

function message(){
    console.log(greeting + ', ' + name +'!')
} 

message()

//CHALLENGE #3

let myPoints = 3

// Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable
function add3Points() {
    myPoints += 3
}

function remove1Point() {
    myPoints -= 1
}

add3Points()
add3Points()
add3Points()
remove1Point()
remove1Point()
// Call the functions to that the line below logs out 10
console.log(myPoints)

//CHALLENGE #4
// Try to predict what each of the lines will log out
console.log("2" + 2) // 22
console.log(11 + 7) // 18
console.log(6 + "5") //65
console.log("My points: " + 5 + 9) // My points: 59
console.log(2 + 2) // 4
console.log("11" + "14") // 1114

//CHALLENGE #5
// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

let errorParagraph = document.ElementById("error")
console.log(errorParagraph)

function purchase() {
    console.log("button clicked")
    errorParagraph.textContent = "Something went wrong, please try again"
}












