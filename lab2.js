var userChoice =  prompt("What Would You Like To Choose Rock, Paper or Scissors?")
computerChoice = Math.random()
console.log(computerChoice)
if (0 < computerChoice < 0.33) {
    computerChoice = "Rock";
}
else if (0.34 < computerChoice < 0.66) {
    computerChoice = "Paper";
} 
else {
    computerChoice = "Scissors";
}
var compare = function(choice1,choice2) {
    if (choice1 === choice2) {
        return "The result is a tie!"
    }
else if (choice1 === "Rock") {
        if (choice2 === "Scissors") {
            return "Rock Wins"
        }
        else {
            return "Paper Wins"
        }
    }     

else if (choice1 === "Paper") {
        if (choice2 === "Rock") {
        return "Paper Wins"
        }
        else {
            return "Scissors Wins"
        }
    }
else if (choice1 === "Scissors") {
        if (choice2 === "Paper") {
            return "Scissors Wins"
        }
        else {
            return "Rock Wins"
        }
    }
}
compare(userChoice,computerChoice);