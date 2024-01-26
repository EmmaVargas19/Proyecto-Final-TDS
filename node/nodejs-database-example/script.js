$(document).ready(function () {
    // Fetch data from Node.js server
    $.get("http://localhost:3000/data", function (data) {
        // Update the HTML page with the fetched data
        data.forEach(function (item) {
            $("#dataList").append("<li>" + item.name + "</li>");
        });
    });
});
