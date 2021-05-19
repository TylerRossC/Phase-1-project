let jokesApi = "https://official-joke-api.appspot.com/random_joke"
let jokeButton = document.querySelector("#get-joke-btn")
let jokeDisplay = document.querySelector("#joke-display")
let submitBtn = document.querySelector("#submit-punchline")
let punchlineDisplay = document.querySelector("#actual-punchline")
let punchline;
let feedbackBtn = document.querySelector("#feedback-form")

document.addEventListener('DOMContentLoaded', function () {
    jokeButton.addEventListener('click', randomJoke)
})


function randomJoke() {             //Converts API into JSON
    fetch(jokesApi)
        .then(res => res.json())
        .then(data => appendJokeSetup(data))
}

function submissionResponse() {     // This function evaluates the response typed into text box and returns an alert based on the text being equal to the API's returned punchline
    let response = document.querySelector('#response')
    if (response.value.toLowerCase() === punchline.toLowerCase()) {
        window.alert("Nailed it!")
    } else {
        window.alert("Think harder next time")
    }
    clearOnSubmit()                 // This line clears the response text after it has been evaluated
}

submitBtn.addEventListener('click', function () {
    submissionResponse()
})

function appendJokeSetup(joke) {         //Displays Joke setup in desired div container on webpage
    punchline = joke.punchline
    jokeDisplay.innerText = joke.setup
    submitBtn.addEventListener('click', appendJokePunchline)
    function appendJokePunchline() {    //This function is able to capture data from "joke" parameter because it's within the same scope and displays the punchline of "joke"
        punchlineDisplay.innerText = joke.punchline
    }
}

function clearOnSubmit() {              //This function clears text box on click of submit 
    document.querySelector('#response').value = ""
}

function clearOnFeedbackSubmit() {      //This function clears all text boxes and drop down on click of submit feedback button
    document.querySelector('#fname').value = ""
    document.querySelector('#lname').value = ""
    document.querySelector('#subject').value = ""
    document.querySelector('#country').value = "USA"
}

feedbackBtn.addEventListener('submit', displayFeedback)


function displayFeedback(e) {
    let first = document.querySelector('#fname')
    let last = document.querySelector('#lname')
    let sub = document.querySelector('#subject')
    let country = document.querySelector('#country')
    let display = document.createElement('p')
    display.innerText = `${first.value} ${last.value} ${sub.value} ${country.value}`
    document.body.appendChild(display)
    e.preventDefault()
    clearOnFeedbackSubmit()
}

