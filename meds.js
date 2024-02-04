document.getElementById("medName").addEventListener("click", fetchMedicineDetails);

function fetchMedicineDetails() {
    var medicineName = document.getElementById("medicineName").value;
    console.log("Medicine Name: " + medicineName);
    var apiUrl = "localhost/get_substitute?medicine_name=" + medicineName;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Display the medicine details on the page
            displayMedicineDetails(data);
        })
        .catch(error => {
            console.log("Error: " + error);
        });
}

function displayMedicineDetails(data) {
    var substitutesContainer = document.getElementById("substitutesContainer");
    var chemicalClassContainer = document.getElementById("chemicalClassContainer");

    // Clear previous content
    substitutesContainer.innerHTML = "";
    chemicalClassContainer.innerHTML = "";

    // Display substitutes
    var substitutesList = data.substitutes;
    substitutesList.forEach(substitute => {
        var substituteElement = document.createElement("div");
        substituteElement.textContent = substitute;
        substitutesContainer.appendChild(substituteElement);
    });

    // Display chemical class
    var originalChemicalClass = data.original_chemical_class;
    var chemicalClassElement = document.createElement("div");
    chemicalClassElement.textContent = "Original Chemical Class: " + originalChemicalClass;
    chemicalClassContainer.appendChild(chemicalClassElement);
}
