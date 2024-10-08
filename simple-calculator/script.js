document.addEventListener("DOMContentLoaded", function () {
    var displayElement = document.getElementById("display");
    function appendCharacter(character) {
        displayElement.value += character;
    }
    function clearDisplay() {
        displayElement.value = "";
    }
    function deleteLast() {
        displayElement.value = displayElement.value.slice(0, -1);
    }
    function calculateResult() {
        try {
            displayElement.value = eval(displayElement.value).toString();
        }
        catch (error) {
            displayElement.value = "Error";
        }
    }
    // Assign functions to global window object so they can be accessed from HTML
    window.appendCharacter = appendCharacter;
    window.clearDisplay = clearDisplay;
    window.deleteLast = deleteLast;
    window.calculateResult = calculateResult;
});
