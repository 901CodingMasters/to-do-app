// We need to grab the form

let container = document.getElementById("containerForm");
let submitbutton = document.getElementById("todoText")

let stateArray = [];
let submitValue = "";

// A fun thing I made, the random variable will be set each time to a random prompt :)
let valueArrayDefault = ["Lets get started!","New Idea?","Enter Your Next Plan","Write it Down!","Lets have a Good Day!","Type here...", "Lets Plan Something!","Got Any Big Plans?","What's the next big thing?","Plan it out first!","Start first, worry later!","Stroke of genius?",'Share your big idea',"What's your plan?",'Got any genius schemes?','Tell us your thoughts','Input your next plan',"Let's hear it!",'Brain blast, go!','Your turn to share','Unleash your creativity',"What's cooking, friend?"];

function getRandom(){
    return Math.floor(Math.random() * valueArrayDefault.length);
}

function randomTextPrompt(){
    let randomVar = getRandom();
submitbutton.value = valueArrayDefault[randomVar]
}

container.addEventListener("submit", function(event){
    event.preventDefault();
    submitValue = submitbutton.value
    randomTextPrompt();
});


//We call the function so the value inside the input is filled with a random text!
randomTextPrompt();