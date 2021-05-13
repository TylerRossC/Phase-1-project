let jokesApi = "https://official-joke-api.appspot.com/random_joke"
let jokeButton = document.querySelector("#get-joke-btn")
let jokeDisplay = document.querySelector("#joke-display")
let submitBtn = document.querySelector("#submit-punchline")
let punchlineDisplay = document.querySelector("#actual-punchline")


document.addEventListener('DOMContentLoaded', function () {
    jokeButton.addEventListener('click', randomJoke)
})


function randomJoke() {             //Converts API into JSON
    fetch(jokesApi)
        .then(res => res.json())
        .then(data => appendJokeSetup(data))
}

function submissionResponse() {
    let response = document.querySelector('#response')
        if (response.innerText.toLowerCase() === punchlineDisplay.innerText.toLowerCase()) {
            window.alert("Nailed it!")
        } else {
            window.alert("Think harder next time")
        }
    }
    
    submitBtn.addEventListener('click', function() {
        submissionResponse()
    })

function appendJokeSetup(joke) {         //Displays Joke setup in desired div container on webpage
    jokeDisplay.innerText = joke.setup
    submitBtn.addEventListener('click', appendJokePunchline)
    function appendJokePunchline() {    //This function is able to capture data from "joke" parameter because it's within the same scope and displays the punchline of "joke"
        punchlineDisplay.innerText = joke.punchline
    }
}

function clearOnSubmit() {              //This function clears all text boxes and drop down upon click of submit and submit feedback buttons
document.querySelector('#response').value = ""
document.querySelector('#fname').value = ""
document.querySelector('#lname').value = ""
document.querySelector('#subject').value = ""
document.querySelector('#country').value = "USA"
}

