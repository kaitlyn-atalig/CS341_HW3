//Kaitlyn Atalig

$(document).ready(function () {
    $("#orderButton").click(placeOrder);
});

function placeOrder() {
    let quantity = $("#quantity").val();
    let topping = $("input[name='Topping']:checked").val();
    let notes = $("#Notes").val();

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

