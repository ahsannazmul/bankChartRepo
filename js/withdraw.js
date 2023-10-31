const withdrawbtn = document.getElementById("withdrawBtn");

const withdrawCal = () => {
    // user input for withdraw
    const userAmount = parseFloat(document.getElementById("userAmount").value);
    document.getElementById("userAmount").value = "";

    // display widthraw amount
    const displayWithdraw = parseFloat(document.getElementById("withdrawAmount").innerText);
    const newWithdraw = userAmount + displayWithdraw;
    document.getElementById("withdrawAmount").innerText = newWithdraw;

    const totalDisply = parseFloat(document.getElementById("totalDisply").innerText);
    const updateTotal = totalDisply - userAmount;

    if(updateTotal >= 0){
        document.getElementById("totalDisply").innerText = updateTotal;
    } else{
        alert("Insufficient balance!")
    }
}

withdrawbtn.addEventListener('click', withdrawCal)