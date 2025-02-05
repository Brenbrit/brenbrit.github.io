"use strict";

function downloadClicked() {
    console.log("Upload clicked!")
    console.log("Value of text area: " + document.getElementById("inputArea").value)
}

function displayFileContents(contents) {
    var outputAreaValue = "Uploaded file bytes: ";

    outputAreaValue += contents.byteLength;

    document.getElementById("outputArea").value = outputAreaValue;
}

function uploadClicked(e) {
    // Get the file we'll be reading
    var file = e.target.files[0];
    if (!file) {
        return;
    }

    // Write down what happens when we read the file
    var reader = new FileReader();
    reader.onload = function(e) {
        var contents = e.target.result;
        displayFileContents(contents);
    }

    // Read the file
    reader.readAsArrayBuffer(file);
}

// Add listener
document.getElementById("fileUpload").addEventListener('change', uploadClicked, false)