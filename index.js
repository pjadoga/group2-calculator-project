
function calculateInterest() {
    const principal = parseFloat(document.getElementById('principal').value);
    const interestRate = parseFloat(document.getElementById('interest-rate').value);
    const days = parseFloat(document.getElementById('days').value);
    const months = parseFloat(document.getElementById('months').value);
    const years = parseFloat(document.getElementById('years').value);
    const currency =document.getElementById('currency').value;

    // Convert all time units to years
    const totalYears = years + (months / 12) + (days / 365.25);

    // Simple Interest formula: SI = P * R * T / 100
    const interest = (principal * interestRate * totalYears) / 100;
    // console.log(interest);
    // get the interest field and the total amount field
    let x= parseFloat(document.getElementById('total-interest').value);
    let y= parseFloat(document.getElementById('final-amount').value);
    
    // Update the interest and Total Amount fields with the calculated values
    x= interest.toFixed(2);
    document.getElementById('total-interest').value=currency+ x;
    y= principal+parseFloat(x);
    document.getElementById('final-amount').value=currency+ y.toFixed(2);
}