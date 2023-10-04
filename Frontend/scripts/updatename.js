const button = document.querySelector("button");
button.addEventListener("click", updatename);
//This line adds an event listener to the button element, it specifies that the event to listen for is a "click"
//and ehen that event occurs, it should call the updatename function, in other words when the button is clicked, the updatename function will be executed

function updatename() {
    const name = prompt("Enter a new name");
    //it uses the prompt() function to display a dialog box that prompts the user to enter a new name. The entered name is stored in the name variable.
    button.textContent = `Player 1: ${name}`;
    //it updates the text content of the button element. It sets the button's text to a string that includes "Player 1:" followed by the value of 
    //the name variable. This effectively changes the text on the button to display the entered name.
}