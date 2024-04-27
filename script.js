// Store unit strips
let unitStrips = [];

// Function to create a new unit strip
function createUnitStrip(callsign) {
  // Check if maximum limit reached
  if (unitStrips.length >= 40) {
    alert("Maximum limit of unit strips reached.");
    return;
  }
  
  // Create HTML elements
  const unitStrip = document.createElement("div");
  unitStrip.className = "unitStrip";
  
  const callsignInput = document.createElement("input");
  callsignInput.type = "text";
  callsignInput.value = callsign;
  callsignInput.readOnly = true;
  
  const statusSelect = document.createElement("select");
  // Add options to status dropdown
  const statusOptions = ["Status", "Panic", "Available", "Enroute", "On Scene", "Unavailable"];
  statusOptions.forEach(option => {
    const statusOption = document.createElement("option");
    statusOption.value = option.toLowerCase().replace(" ", "-");
    statusOption.textContent = option;
    statusSelect.appendChild(statusOption);
  });
  
  const notesInput = document.createElement("input");
  notesInput.type = "text";
  notesInput.placeholder = "Notes";
  
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.onclick = function() {
    // Remove unit strip from array
    unitStrips.splice(unitStrips.indexOf(unitStrip), 1);
    // Remove unit strip from view
    unitStrip.remove();
  };
  
  // Append elements to unit strip
  unitStrip.appendChild(callsignInput);
  unitStrip.appendChild(statusSelect);
  unitStrip.appendChild(notesInput);
  unitStrip.appendChild(deleteButton);
  
  // Append unit strip to container
  document.getElementById("unitStrips").appendChild(unitStrip);
  
  // Add unit strip to array
  unitStrips.push(unitStrip);
}

// Event listener for adding unit strip
document.getElementById("callsignInput").addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    const callsign = e.target.value.trim();
    if (callsign !== "") {
      createUnitStrip(callsign);
      e.target.value = ""; // Clear input
    }
  }
});
