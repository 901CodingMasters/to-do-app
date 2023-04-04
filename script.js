// Global Variables to contain the container (form) and the submit button (input)
let container = document.getElementById("containerForm");
let submitButton = document.getElementById("todoText")

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
    event.preventDefault();
    submitValue = submitButton.value
    randomTextPrompt();
});


//We call the function so the value inside the input is filled with a random text!
randomTextPrompt();