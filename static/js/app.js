// from data.js
var tableData = data;

// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function () {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Find out which input tags were used and convert the NodeList to an Array  
    var inputElement = Array.prototype.slice.call(document.querySelectorAll(".form-control"))
        .filter(i => i.value !== "");

    console.log(inputElement);

    var filteredData = JSON.parse(JSON.stringify(tableData));

    // Filter by all of the user input that was given
    inputElement.forEach(function (element) {
        console.log(element.value);
        filteredData = filteredData.filter(event => event[element.id] === element.value.toLowerCase());
        console.log(filteredData);
    });

    // Remove previously queried information
    var tbody = d3.select("tbody");
    tbody.html("");

    // Display the filtered table on the webpage
    filteredData.forEach((uforow) => {
        var row = tbody.append("tr");
        Object.entries(uforow).forEach(([key, value]) => {
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
});





