/**
 * Created by session2 on 9/30/15.
 */

var character;
var storyLineNumber = 0;
var answer;

var storyBob = ["Plot line 1", "Plot line 2"];
var questionBob = ["Question 1", "Question 2"];
var storyKevin = [];
var questionKevin =[];
var storySteve = [];
var questionSteve = [];

/**
 * Function to change the two paragraphs on the HTML page that display
 * both the storyline text and the question that the player must answer.
 */
var changeText = function(char){
    switch(char){
        case 'Bob':
            document.getElementById("storyText").innerHTML = storyBob[storyLineNumber];
            document.getElementById("questionText").innerHTML = questionBob[storyLineNumber];
            break;

        case 'Kevin':
            document.getElementById("storyText").innerHTML = storyKevin[storyLineNumber];
            document.getElementById("questionText").innerHTML = questionKevin[storyLineNumber];
            break;

        case 'Steve':
            document.getElementById("storyText").innerHTML = storySteve[storyLineNumber];
            document.getElementById("questionText").innerHTML = questionSteve[storyLineNumber];
            break;

        default:
            break;
    }
    storyLineNumber ++;
};

/**
 *Function to start the game. It is called when the start button is clicked.
 * It will call the appropriate function for the character picked.
 */
var startGame = function(name) {
    switch(name){
        case 'Princess Kevin':
            functionKevin();
            break;
        case 'Bob':
            functionBob();
            break;
        case 'Nice Queen':
            functionSteve();
            break;
        default:
            break;
    }
};

var functionKevin = function() {
    answer = prompt("Princess Kevin was born to the Nice King and Queen and the land was happy. Sadly, one day the much feared and loved Nice King passed on. The kingdom went into a massive depression due to the Queen's grief and her incapability to run the kingdom. Then when the Nice Queen was remarried all was well. Everyone was happy, but Princess Kevin because she knew the truth behind the Queen's happiness. The Nice Queen had been poisoned by her now husband and been turned evil just like him. To save her mother, Princess Kevin must find the exlir of A Thousand Tears. While running away from the Queen to find the potion, Princess Kevin can either go to the Village or Woods?");
    

};

var functionBob = function() {
    changeText('Bob');
    /**
     var answer = prompt("Does Bob continue to take care of his shop, or does he visit his friend Steve?", "Shop or Steve").toLowerCase();
     switch(answer){
        case 'shop':
            confirm("While sweeping the floors that afternoon, Bob hears the sound of glass shattering.");
            answer = prompt("Does Bob hide or search for the source?", "Hide or Search").toLowerCase();
            if(answer === "hide")
            {
                confirm("Bob peers out from the supply closet to see the royal Princess Kevin frantically searching through his bottles of potions. Many shatter and break in the process. ");
                confirm('Suddenly Steve breaks through the door. "I need your help, Steve!" He calls. "I need your help in the castle."');
            } else if(answer === "search") {
                confirm("Standing defenseless in the middle of his shop, Bob catches a glimpse of long purple and yellow striped hair. He slowly strides forward to see the lovely Princess Kevin rifling through his stock of potions. A flash of light is all he sees as he freezes into a block of ice.");
            }
            break;
        case 'steve':
            break;
        default:
    }
     */
};

var functionSteve = function() {

};


