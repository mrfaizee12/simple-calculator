
   document.addEventListener("DOMContentLoaded", () => {
    let displayElement = document.getElementById("display") as HTMLInputElement;

    function appendCharacter(character: string): void {
        displayElement.value += character;
    }

    function clearDisplay(): void {
        displayElement.value = "";
    }

    function deleteLast(): void {
        displayElement.value = displayElement.value.slice(0, -1);
    }

    function calculateResult(): void {
        try {
            displayElement.value = eval(displayElement.value).toString();
        } catch (error) {
            displayElement.value = "Error";
        }
    }

    // Assign functions to global window object so they can be accessed from HTML
    (window as any).appendCharacter = appendCharacter;
    (window as any).clearDisplay = clearDisplay;
    (window as any).deleteLast = deleteLast;
    (window as any).calculateResult = calculateResult;
});