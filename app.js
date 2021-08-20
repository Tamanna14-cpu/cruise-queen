function updateTicketNum(ticket, isIncreasing) {
    const inputField = document.getElementById(ticket + '-quantity');
    let inputValue = inputField.value;
    if (isIncreasing == true) {
        inputValue++;
    }
    else if (inputValue > 0) {
        inputValue--;
    }
    inputField.value = inputValue;

    // calculate total
    calculateTotal();
}


function getInputValue(ticket) {
    const inputField = parseInt(document.getElementById(ticket + '-quantity').value);
    return inputField;
}

function calculateTotal() {
    const firstClass = getInputValue('first') * 150;
    const economy = getInputValue('economy') * 100;
    const subTotal = firstClass + economy;
    const vat = subTotal * 0.01;
    const total = subTotal + vat;

    //  update on the html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('vat').innerText = vat;
    document.getElementById('total').innerText = total;
}



// firstClass-ticket
document.getElementById('firstClass-plus').addEventListener('click', function () {
    updateTicketNum('first', true);
})
document.getElementById('firstClass-minus').addEventListener('click', function () {
    updateTicketNum('first', false);
})


// economy-ticket
document.getElementById('economy-plus').addEventListener('click', function () {
    updateTicketNum('economy', true);
})
document.getElementById('economy-minus').addEventListener('click', function () {
    updateTicketNum('economy', false);
})


// book-now button
function purchaseVerify() {
    // display
    const bookingForm = document.getElementById('ticket-form');
    bookingForm.style.display = 'none';
    document.getElementById('confirmation-form').style.display = 'block';

    // payment
    const total = document.getElementById('total').innerText;
    document.getElementById('payment').innerText = total;
    // ticket count
    const firstTicket = parseInt(document.getElementById('first-quantity').value);
    const economyTicket = parseInt(document.getElementById('economy-quantity').value);
    const totalTicket = firstTicket + economyTicket;
    document.getElementById('ticket-number').innerText = totalTicket;

}