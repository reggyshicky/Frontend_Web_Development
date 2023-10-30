const rps = (p1, p2) => {
    p1 = p1.toLowerCase();  //convert player inputs to lowercase to ensure case-sensitive comparisons
    p2 - p2.toLowerCase();

    if (p1 === p2) {
        return "it is a tie";
    } else if (
        (p1 === "rock" && p2 === "scissors") ||
        (p1 === "paper" && p2 === "rock") ||
        (p1 === "scissors" && p2 === "paper")
        ) {
            return "Player 1 wins"
        } else {
            return "Player 2 wins"
        } 
};
const result = rps("paper", "rock");
console.log(result);