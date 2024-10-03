document.addEventListener("DOMContentLoaded", () => {
    const addDestinationBtn = document.getElementById("addDestinationBtn");
    const submitBtn = document.getElementById("submitBtn");
    const destinationsList = document.getElementById("destinationsList");
    const destinationInput = document.getElementById("destination");

    let destinations = [];

    // Add destination to the list
    addDestinationBtn.addEventListener("click", () => {
        const destination = destinationInput.value.trim();

        if (destination) {
            destinations.push(destination);
            displayDestinations();
            destinationInput.value = ''; // Clear input field
        } else {
            alert("Please enter a valid destination.");
        }
    });

    // Display all destinations
    function displayDestinations() {
        destinationsList.innerHTML = ''; // Clear the list before re-rendering

        destinations.forEach((dest, index) => {
            const li = document.createElement('li');
            li.textContent = `${index + 1}. ${dest}`;
            destinationsList.appendChild(li);
        });
    }

    // Handle submit button click
    submitBtn.addEventListener("click", () => {
        if (destinations.length === 0) {
            alert("Please add at least one destination.");
        } else {
            sendDataToServer();
        }
    });

    // Function to simulate sending data to the server
    function sendDataToServer() {
        console.log("Destinations:", destinations);

        // Placeholder for real server submission
        alert("Destinations submitted: " + destinations.join(", "));
    }
});
