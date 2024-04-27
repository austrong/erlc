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
  const statusOptions = [
    { value: "panic", label: "Panic", color: "#FFA500", textColor: "white" },
    { value: "available", label: "Available", color: "LightGreen", textColor: "black" },
    { value: "enroute", label: "Enroute", color: "LightBlue", textColor: "black" },
    { value: "onscene", label: "On Scene", color: "LightCoral", textColor: "black" },
    { value: "unavailable", label: "Unavailable", color: "black", textColor: "white" }
  ];
  statusOptions.forEach(optionData => {
    const statusOption = document.createElement("option");
    statusOption.value = optionData.value;
    statusOption.textContent = optionData.label;
    statusOption.style.backgroundColor = optionData.color;
    statusOption.style.color = optionData.textColor;
    statusSelect.appendChild(statusOption);
  });
  
  const notesInput = document.createElement("input");
  notesInput.type = "text";
  notesInput.placeholder = "Enter notes";
  
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
