document.addEventListener("DOMContentLoaded", function () {
    // Fetch data from the JSON file using jQuery
    $.getJSON('json/product_orders.json', function (data) {
        renderProductOrderTable(data);
    });

    function renderProductOrderTable(data) {
        var table = $('#productOrderTable').DataTable({
            data: data,
            columns: [
                { data: 'order_id', title: 'Order ID' },
                { data: 'product_name', title: 'Product Name' },
                { data: 'quantity', title: 'Quantity' },
                { data: 'price', title: 'Price' },
                { data: 'customer_name', title: 'Customer Name' },
              
            ],
            order: [[0, 'asc']], // Default sorting by Order ID in ascending order
            responsive: true,
        });

        // Add search input field
        $('#productOrderTable thead th').each(function () {
            var title = $(this).text();
            $(this).html('<input type="text" placeholder="Search ' + title + '" />');
        });

        // Apply the search
        table.columns().every(function () {
            var that = this;

            $('input', this.header()).on('keyup change', function () {
                if (that.search() !== this.value) {
                    that
                        .search(this.value)
                        .draw();
                }
            });
        });
    }

    // Action button function (replace with your actual action)
    function viewDetails(orderId, customerName) {
        alert('View details for Order ID: ' + orderId + '\nCustomer Name: ' + customerName);
    }
});