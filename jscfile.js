var btn = document.getElementById('btn');
btn.addEventListener('click', calBill);



function calBill() {
    var bill_amount = document.getElementById('bill_amount').value;

    if (bill_amount == "") {
        alert("You should enter the bill first");
    } else {
        var tip_percentage = document.getElementById('tip_percentage').value;
        var tip_Amount = document.getElementById('tip_amount').value = (bill_amount * tip_percentage) / 100;
        document.getElementById('total_bill').value = parseFloat(bill_amount) + parseFloat(tip_Amount);    
    }
    

}


