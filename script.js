// Created by Conner Thompson

// Global Variables to contain the container (form) and the submit button (input)
let container = document.getElementById("containerForm");
let todoList = document.getElementById("todoListContainer");
let submitButton = document.getElementById("todoText");

// Setting the state of two objects, one to an empty string and one to an empty array
let stateArray = [];
let submitValue = "";

// A fun thing I made, the random variable will be set each time to a random prompt :)
let valueArrayDefault = ["Lets get started!", "New Idea?", "Enter Your Next Plan", "Write it Down!", "Lets have a Good Day!", "Type here...", "Lets Plan Something!", "Got Any Big Plans?", "What's the next big thing?", "Plan it out first!", "Start first, worry later!", "Stroke of genius?", 'Share your big idea', "What's your plan?", 'Got any genius schemes?', 'Tell us your thoughts', 'Input your next plan', "Let's hear it!", 'Brain blast, go!', 'Your turn to share', 'Unleash your creativity', "What's cooking, friend?"];

// Get Random function so we can randomize between the length of our prompts
function getRandom() {
    return Math.floor(Math.random() * valueArrayDefault.length);
}

//This inputs the random variable so each one is chosen
function randomTextPrompt() {
    let randomVar = getRandom();
    submitButton.value = valueArrayDefault[randomVar]
}
let todoIndex = 0
// This event listener listens for a 'submit' and triggers an event, which prevents the default, sets submitvalue to the value of the button.
container.addEventListener("submit", function (event) {

    let inputBox = document.createElement("input");
    let labelBox = document.createElement("label");
    let removeButton = document.createElement("button");
    let todoDiv = document.createElement("div")
    inputBox.index = todoIndex
    removeButton.index = todoIndex
    todoIndex++
    event.preventDefault();
    submitValue = submitButton.value
    // Input Validation for the submitted value
    if (submitValue === "") {
        alert("Please Enter Something...")
        return
    }
    for (i = 0; i < valueArrayDefault.length; i++) {
        if (submitValue === valueArrayDefault[i]) {
            alert("Don't enter our prompts!");
            return
        }
    }
    // Appending Label and Input to the container
    labelBox.textContent = submitValue;
    removeButton.textContent = "X";
    removeButton.style.visibility = "hidden";
    removeButton.setAttribute("class","removeButton");
    todoList.append(todoDiv)
    todoDiv.append(inputBox)
    inputBox.type = "checkbox";
    todoDiv.append(labelBox);
    todoDiv.append(removeButton)
    //Resetting the Text Box
    randomTextPrompt();



    todoList.addEventListener("change", function (event) {

        let removeButtonClass = document.getElementsByClassName("removeButton");
        for (let i = 0; i < removeButtonClass.length; i++){
            if( removeButtonClass[i].index === event.target.index){
                if (removeButtonClass[i].style.visibility == "hidden") {
                    removeButtonClass[i].style.visibility = "visible";
                } else if (removeButtonClass[i].style.visibility  == "visible") {
                    removeButtonClass[i].style.visibility = "hidden";
                }
            }
        }
      
    })

    removeButton.addEventListener("click", function(event){
        event.preventDefault();
        removeButton.parentElement.remove();
    })
});









//We call the function so the value inside the input is filled with a random text!
randomTextPrompt();

