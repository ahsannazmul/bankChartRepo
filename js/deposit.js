const depobtn = document.getElementById("depoBtn");

const depoCalc = () => {
    // user input
    const depoAmount = parseFloat(document.getElementById("depoAmount").value);
    document.getElementById("depoAmount").value = "";

    // display deposit amount
    const displayDepo = parseFloat(document.getElementById("deposite").innerText);
    document.getElementById("deposite").innerText = depoAmount;

    // add to total deposit amount 
    const newDepo = depoAmount + displayDepo;
    document.getElementById("deposite").innerText = newDepo;

    // display updated total amount
    const totalDisply = parseFloat(document.getElementById("totalDisply").innerText);
    const updateTotal = depoAmount + totalDisply;
    document.getElementById("totalDisply").innerText = updateTotal;
}
depobtn.addEventListener('click', depoCalc);