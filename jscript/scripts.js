document.addEventListener("DOMContentLoaded", function () {
var doughnutChartData = {
    labels: [],
    datasets: [{
        data: [],
        backgroundColor: ['#dc3545', '#007bff', '#ffc107', '#28a745', '#ff5722',
        '#795548', '#9c27b0', '#4caf50', '#607d8b', '#e91e63',
        '#2196f3', '#ff9800', '#00bcd4', '#673ab7', '#8bc34a',
        '#ffeb3b'],
    }],
};

// Fetch data from the JSON file
fetch('json/product_categories.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(jsonData => {
        // Call the function to update doughnut chart data with the fetched data
        updateDoughnutChart(jsonData);
    })
    .catch(error => console.error('Error fetching or parsing data:', error));

// Function to update doughnut chart data from JSON data
function updateDoughnutChart(data) {
    try {
        //labels (categories) and data values
        var labels = data.map(item => item.category);
        var values = data.map(item => item.quantity);

        //doughnutChartData fetched data
        doughnutChartData.labels = labels;
        doughnutChartData.datasets[0].data = values;

        // Get the canvas element
        var doughnutCtx = document.getElementById('doughnutChart').getContext('2d');

        // Create or update the doughnut chart
        if (window.myDoughnutChart) {
            // If the chart already exists, update it
            window.myDoughnutChart.data = doughnutChartData;
            window.myDoughnutChart.update();
        } else {
            // If the chart doesn't exist, create it
            window.myDoughnutChart = new Chart(doughnutCtx, {
                type: 'doughnut',
                data: doughnutChartData,
                options: {
                    legend: {
                        position: 'left', // Set legend position to left
                    },
                },
            });
        }
        
    } catch (error) {
        console.error('Error updating doughnut chart:', error);
    }
}


    
    // Function to handle sign out
    

    // DataTable initialization
    $(document).ready(function () {
        $('#activityTable').DataTable();
       
       
    });

    // Fetch data from the JSON file using fetch API
    fetch('json/data.json')
        .then(response => response.json())
        .then(jsonData => {
            // Call the function to render table rows with the fetched data
            renderTableRows(jsonData);
        })
        .catch(error => console.error('Error fetching data:', error));

    // Function to render table rows from JSON data
    function renderTableRows(data) {
        var tbody = document.querySelector("#activityTable tbody");

        // Clear existing rows
        tbody.innerHTML = "";

        // Loop through JSON data and create table rows
        data.forEach(function (item) {
            var row = tbody.insertRow();
            var cellDate = row.insertCell(0);
            var cellActivity = row.insertCell(1);

            // Populate cells with data
            cellDate.textContent = item.date;
            cellActivity.textContent = item.activity;
        });
    }


    fetch('json/product_categories.json')
    .then(response => response.json())
    .then(jsonData => {
        // Call the function to render table rows with the fetched data
        renderTableRows_at(jsonData);
    })
    .catch(error => console.error('Error fetching data:', error));

// Function to render table rows from JSON data
function renderTableRows_at(data) {
    var tbody = document.querySelector("#categoryTable tbody");

    // Clear existing rows
    tbody.innerHTML = "";

    // Loop through JSON data and create table rows
    data.forEach(function (item) {
        var row = tbody.insertRow();
        var cellCategory = row.insertCell(0);
        var cellDescription = row.insertCell(1);
        var cellQuantity = row.insertCell(2); 

        // Populate cells with data
        cellCategory.textContent = item.category;
        cellDescription.textContent = item.description;
        cellQuantity.textContent = item.quantity; 
    });
}

    
    // Function to search and filter the table
    function searchTable() {
        var input, filter, table, tbody, tr, tdDate, tdActivity, i, txtValueDate, txtValueActivity;
        input = document.getElementById("searchInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("activityTable");
        tbody = table.getElementsByTagName("tbody")[0];
        tr = tbody.getElementsByTagName("tr");

        // Loop through all table rows and hide those that don't match the search input
        for (i = 0; i < tr.length; i++) {
            tdDate = tr[i].getElementsByTagName("td")[0];
            tdActivity = tr[i].getElementsByTagName("td")[1];
            if (tdDate || tdActivity) {
                txtValueDate = tdDate.textContent || tdDate.innerText;
                txtValueActivity = tdActivity.textContent || tdActivity.innerText;
                if (txtValueDate.toUpperCase().indexOf(filter) > -1 || txtValueActivity.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }

    // Chart.js initialization
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'Data Entries',
                data: [50, 60, 70, 80, 90, 100],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // ... (Previous code)

    // Sample data for the line chart
    // var lineChartData = {
    //     labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    //     datasets: [
    //         {
    //             label: 'Line 1',
    //             borderColor: '#007bff',
    //             data: [30, 45, 20, 60, 25, 40],
    //         },
    //         {
    //             label: 'Line 2',
    //             borderColor: '#28a745',
    //             data: [15, 35, 45, 25, 55, 30],
    //         },
    //         {
    //             label: 'Line 3',
    //             borderColor: '#dc3545',
    //             data: [40, 20, 50, 15, 30, 45],
    //         },
    //     ],

        
    //     //height: 200,
    // };

    // Get the canvas element
    var lineChartCanvas = document.getElementById('lineChart').getContext('2d');

    // Create the line chart
    var lineChart = new Chart(lineChartCanvas, {
        type: 'line',
        data: lineChartData,
        options: {
            scales: {
                x: [{
                    grid: {
                        display: false,
                    }
                }],
                y: [{
                    grid: {
                        display: true,
                    }
                }],
            },
        },
    });
    

});
