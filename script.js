// Created by Conner Thompson

// Global Variables to contain the container (form) and the submit button (input)
let container = document.getElementById("containerForm");
let todoList = document.getElementById("todoListContainer");
let submitButton = document.getElementById("todoText");

// Setting the state of two objects, one to an empty string and one to an empty array
let stateArray = [];
let submitValue = "";

// A fun thing I made, the random variable will be set each time to a random prompt :)
let valueArrayDefault = ["Lets get started!","New Idea?","Enter Your Next Plan","Write it Down!","Lets have a Good Day!","Type here...", "Lets Plan Something!","Got Any Big Plans?","What's the next big thing?","Plan it out first!","Start first, worry later!","Stroke of genius?",'Share your big idea',"What's your plan?",'Got any genius schemes?','Tell us your thoughts','Input your next plan',"Let's hear it!",'Brain blast, go!','Your turn to share','Unleash your creativity',"What's cooking, friend?"];

// Get Random function so we can randomize between the length of our prompts
function getRandom(){
    return Math.floor(Math.random() * valueArrayDefault.length);
}

//This inputs the random variable so each one is chosen
function randomTextPrompt(){
    let randomVar = getRandom();
submitButton.value = valueArrayDefault[randomVar]
}
// This event listener listens for a 'submit' and triggers an event, which prevents the default, sets submitvalue to the value of the button.
container.addEventListener("submit", function(event){
    
    let inputBox = document.createElement("input");
    let labelBox = document.createElement("label");
    let removeButton = document.createElement("button")

    inputBox.setAttribute('id','todoItems')
    event.preventDefault();
    submitValue = submitButton.value
    // Input Validation for the submitted value
    if (submitValue === ""){
        alert ("Please Enter Something...")
        return
    }
    for (i = 0; i < valueArrayDefault.length;i++){
        if (submitValue === valueArrayDefault[i]){
            alert("Don't enter our prompts!");
            return
        }
    }
    // Appending Label and Input to the container
    labelBox.textContent = submitValue;
    removeButton.textContent = "X";
    todoList.append(inputBox)
    inputBox.type = "checkbox";
    todoList.append(labelBox);
    todoList.append(removeButton)
    //Resetting the Text Box
    randomTextPrompt();
    console.log(inputBox)
    if (removeButton = true){
        removeList();
    }
});
let checkbox = document.getElementById("todoItems")
// checkbox.addEventListener('change', function(){
//     if (this.checked){
//         console.log("poop")
//     }
// })

function removeList(event){
    let target = event.target;
    event.removeC
}





//We call the function so the value inside the input is filled with a random text!
randomTextPrompt();

