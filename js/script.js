
// Holds JSON Data Retrieved
var blanks = [];
var values = [];

// Upon Click of the "New Mad Lib" Button at the Top
document.getElementById("new").addEventListener("click", function(event) {
    event.preventDefault();
                                                                                                // Resets Data Variables
    blanks = [];
    values = [];
    var empty = "";
    document.getElementById('openingTitle').classList.add("hidden-class");
    document.getElementById('newBodyButton').classList.add("hidden-class");
    document.getElementById('finished').classList.add("hidden-class");
    document.getElementById("finished").innerHTML = empty;
                                                                                                // Fetches API
    const url = "http://madlibz.herokuapp.com/api/random?minlength=5&maxlength=20";
    fetch(url)
      .then(function(response) {
        return response.json();
      }).then(function(json) {
                                                                                                // Accesses JSON Data and Deposites in Data Variables
        for (var i = 0; i < json.blanks.length; i++)
        {
            blanks.push(json.blanks[i]);
        }

        for (var i = 0; i < json.value.length; i++)
        {
            values.push(json.value[i]);
        }
                                                                                                // Sets Title
        document.getElementById('title').innerHTML = json.title;
        document.getElementById('title').classList.remove("hidden-class");
                                                                                                // Adds Buttons with Correct Data
        var results = "";
        for (var i = 0; i < blanks.length; i++)
        {
            results += '<input class="blankBox" id="box' + i + '" type="text" value="' + blanks[i] + '">';
        }
        document.getElementById("submit").innerHTML = results;
        document.getElementById('submit').classList.remove("hidden-class");

        document.getElementById('submitButton').classList.remove("hidden-class");
      });
    
    });

// After Pressing "LET'S GO!" Takes in user data and creates mad lib.
document.getElementById("submitButton").addEventListener("click", function(event) {
    event.preventDefault();
    var blankNames = [];
    console.log("submited");
                                                                                                // Generates name for boxes for later
    for (var i = 0; i < blanks.length; i++)
    {
        var push = "box" + i;
        console.log("namePushed: " + push);
        blankNames.push(push);
    }
                                                                                                //Changes blanks[] from type of word, to the user entered words.
    for (var i = 0; i < blanks.length; i++)
    {
        blanks[i] = document.getElementById(blankNames[i]).value;
        console.log("valueRecorded: " + blanks[i]);
    }
                                                                                                // Hides Unnessisary Buttons.
    document.getElementById('submit').classList.add("hidden-class");
    document.getElementById('submitButton').classList.add("hidden-class");
    var empty = "";
    document.getElementById("submit").innerHTML = empty;
                                                                                                // Variables for output
    var results = "";
    var i = 0;
    var data = 0;
    while (data == 0)
    {
        results += values[i];
        results += " ";
        results += blanks[i].toUpperCase();
        results += " ";
        
        if ((i == (blanks.length - 1)) || (i == (values.length - 1)))
        {
            data = 1;
        }
        i += 1;
        console.log("instance");
    }
    results += values[i];
    document.getElementById("finished").innerHTML = results;
    document.getElementById('finished').classList.remove("hidden-class");
    document.getElementById('newBodyButton').classList.remove("hidden-class");
    });
    
                                                                                                // This function is identicle to the first, it's for the button
                                                                                                // That ISNT in the header that serves the same purpose of restarting
document.getElementById("newBodyButton").addEventListener("click", function(event) {
    event.preventDefault();
                                                                                                // Resets Data Variables
    blanks = [];
    values = [];
    var empty = "";
    document.getElementById('openingTitle').classList.add("hidden-class");
    document.getElementById('newBodyButton').classList.add("hidden-class");
    document.getElementById('finished').classList.add("hidden-class");
    document.getElementById("finished").innerHTML = empty;
                                                                                                // Fetches API
    const url = "http://madlibz.herokuapp.com/api/random?minlength=5&maxlength=25";
    fetch(url)
        .then(function(response) {
        return response.json();
        }).then(function(json) {

                                                                                                // Accesses JSON Data and Deposites in Data Variables
        for (var i = 0; i < json.blanks.length; i++)
        {
            blanks.push(json.blanks[i]);
        }

        for (var i = 0; i < json.value.length; i++)
        {
            values.push(json.value[i]);
        }

                                                                                                // Sets Title

        document.getElementById('title').innerHTML = json.title;
        document.getElementById('title').classList.remove("hidden-class");

        var results = "";
        for (var i = 0; i < blanks.length; i++)
        {
            results += '<input class="blankBox" id="box' + i + '" type="text" value="' + blanks[i] + '">';
        }
        document.getElementById("submit").innerHTML = results;
        document.getElementById('submit').classList.remove("hidden-class");

        document.getElementById('submitButton').classList.remove("hidden-class");
        });
    
    });

var timeTracker = 0;
var leftStart = 25;
var rightStart = 75;
var leftGradientValue;
var rightGradientValue;
var CHANGE_VALUE = 10;
    //background: linear-gradient(90deg, rgba(119,197,255,1) 0%, rgba(42,121,242,1) 15%, rgba(50,121,225,1) 85%, rgba(48,192,222,1) 100%);
function changeBackground ()
{
    timeTracker += .005;
    console.log(timeTracker + " " + leftGradientValue + " " + rightGradientValue);
    leftGradientValue = leftStart - (Math.sin(timeTracker) * CHANGE_VALUE);
    rightGradientValue = rightStart + (Math.sin(timeTracker) * CHANGE_VALUE);
    var newGradient = "linear-gradient(90deg, rgba(119,197,255,1) 0%, rgba(42,121,242,1) " + leftGradientValue +"%, rgba(50,150,250) 50%, rgba(50,121,225,1) " + rightGradientValue + "%, rgba(48,192,222,1) 100%)";
    document.getElementById("bgimg").style.backgroundImage = newGradient;
}

setInterval(changeBackground, 10);