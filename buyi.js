document.addEventListener('DOMContentLoaded', function() {
    // Ask for recipient's name
    var recipientName = prompt("Please enter the name of the person you want to ask to be your valentine:");
    if (recipientName) {
        document.getElementById('recipientName').textContent = recipientName;
    }
    
    // Button click event
    var valentineButton = document.getElementById('valentineButton');
    valentineButton.addEventListener('click', function() {
        alert('Congratulations! You have a Valentine now!');
        // You can add more actions here if needed
    });
});