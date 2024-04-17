document.addEventListener("DOMContentLoaded", function () {
    // Fetch data from the JSON file
    fetch('json/sales_data.json')
        .then(response => response.json())
        .then(jsonData => {
            // Call the function to render the line chart with the fetched data
            renderLineChart(jsonData);
        })
        .catch(error => console.error('Error fetching data:', error));

    // Function to render the line chart
    function renderLineChart(data) {
        // Extract labels (months) and datasets (sales, credit, expenses)
        var labels = data.map(item => item.month);
        var salesData = data.map(item => item.sales);
        var creditData = data.map(item => item.credit);
        var expensesData = data.map(item => item.expenses);

        // Get the canvas element
        var lineChartCanvas = document.getElementById('lineChart');

        // Create the line chart
        var myLineChart = new Chart(lineChartCanvas, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Sales',
                        borderColor: '#007bff',
                        data: salesData,
                    },
                    {
                        label: 'Credit',
                        borderColor: '#28a745',
                        data: creditData,
                    },
                    {
                        label: 'Expenses',
                        borderColor: '#dc3545',
                        data: expensesData,
                    },
                ],
            },
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
    }
});
