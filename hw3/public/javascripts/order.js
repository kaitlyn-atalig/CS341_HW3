//Kaitlyn Atalig 

$(document).ready(function () {
    // Ensures that the order button is functional
    $("#orderButton").click(function() {
        placeOrder();
    });

    // Ensures the month links change the month name
    $("#month-dropdown a").click(function(e) {
        e.preventDefault(); // Prevents the default anchor click behavior
        changeMonth($(this).text());
    });

    // Trigger the vegan pop-up when clicking the vegan button
    $("#veganButton").click(function() {
        showVeganPopup();
    });

    // Close the vegan pop-up when the close button is clicked
    $("#closePopup").click(function() {
        closeVeganPopup();
    });
});

function placeOrder() {
    let quantity = $("#quantity").val();
    let topping = $("input[name='Topping']:checked").val();
    let notes = $("#Notes").val();

    // Check if notes contain 'vegan' (case insensitive)
    if (/vegan/i.test(notes)) {
        alert("Warning: Cheesecake contains dairy.");
        return; // Stop the order if 'vegan' is found
    }

    if (!topping) {
        alert("Please select a topping.");
        return;
    }

    let orderSummary = `You ordered ${quantity} cheesecake(s) with ${topping} topping.`;
    if (notes.trim() !== "") {
        orderSummary += ` Notes: ${notes}`;
    }

    $("#orderDetails").text(orderSummary);
    $("#confirmationMessage").show();
}

// Function to change the selected month in the dropdown
function changeMonth(month) {
    $("#month-name").text(month);
}

// Show vegan pop-up
function showVeganPopup() {
    $("#veganPopup").show();
}

// Close the vegan pop-up
function closeVeganPopup() {
    $("#veganPopup").hide();
}

