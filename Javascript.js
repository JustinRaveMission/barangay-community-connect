// Emergency Hotline Quick Alert
document.getElementById("emergencyBtn").addEventListener("click", function() {
    alert("EMERGENCY REMINDER:\nStay calm. Call 911 for Police/Fire or (02) 8123-4567 for immediate Barangay Tanod dispatch.");
});

// Community Volunteer Sign-Up Counter
let count = 12;

document.getElementById("joinBtn").addEventListener("click", function() {
    const nameInput = document.getElementById("volunteerName");
    const name = nameInput.value.trim();

    if (name === "") {
        alert("Please enter your name before signing up!");
        return;
    }

    // Add name to the list
    const list = document.getElementById("volunteerList");
    const newItem = document.createElement("li");
    newItem.textContent = name + " (Clean-Up Drive)";
    list.appendChild(newItem);

    // Update counter
    count++;
    document.getElementById("volunteerCount").textContent = count;

    // Clear input and show thank you message
    nameInput.value = "";
    alert("Thank you, " + name + "! Your volunteer pledge has been recorded.");
});
