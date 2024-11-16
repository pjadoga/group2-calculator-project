//NUMERICAL CALCULATOR FUNCTIONS
// Function that display value 
function dis(val) { 
    document.getElementById("result").value += val 
} 

function myFunction(event) { 
    if (event.key == '0' || event.key == '1' 
        || event.key == '2' || event.key == '3' 
        || event.key == '4' || event.key == '5' 
        || event.key == '6' || event.key == '7' 
        || event.key == '8' || event.key == '9' 
        || event.key == '+' || event.key == '-' 
        || event.key == '*' || event.key == '/') 
        document.getElementById("result").value += event.key; 
} 

var cal = document.getElementById("calcu"); 
cal.onkeyup = function (event) { 
    if (event.keyCode === 13) { 
        console.log("Enter"); 
        let x = document.getElementById("result").value 
        console.log(x); 
        solve(); 
    } 
} 


// Function that evaluates the digit and return result 
function solve() { 
    let x = document.getElementById("result").value 
    let y = math.evaluate(x) 
    document.getElementById("result").value = y 
} 

//SQUARE ROOT
function squaroot() {
    let x = document.getElementById("result").value 
    let y =math.sqrt(x)
    document.getElementById("result").value =y
    console.log(y)
}

//SINE FUNCTION
function mySin(){
   let x = document.getElementById("result").value
   let y = Math.sin(x*Math.PI/180)
   document.getElementById("result").value  = y
   console.log(y)
}
//COSINE FUNCTION
function myCos(){
    let x = document.getElementById("result").value
    let y = Math.cos(x*Math.PI/180)
    document.getElementById("result").value  = y
    console.log(y)
 }
 //Tangent FUNCTION
function myTan(){
    let x = document.getElementById("result").value
    let y = Math.tan(x*Math.PI/180)
    document.getElementById("result").value  = y
    console.log(y)
 }
 
 //LOG FUNCTION
function myLog(){
    let x = document.getElementById("result").value
    let y = Math.log(x)
    document.getElementById("result").value  = y
    console.log(y)
 }
  //LOG10 FUNCTION
function myLog10(){
    let x = document.getElementById("result").value
    let y = Math.log10(x)
    document.getElementById("result").value  = y
    console.log(y)
 }
  //LOG2 FUNCTION
function myLog2(){
    let x = document.getElementById("result").value
    let y = Math.log2(x)
    document.getElementById("result").value  = y
    console.log(y)
 }
  //LOG FUNCTION
function percent(){
    let x = document.getElementById("result").value
    let y = x/100
    document.getElementById("result").value  = y
    console.log(y)
 }
// Function that clear the display 
function clr() { 
    document.getElementById("result").value = "" 
} 



// SI CALCULATOR FUNCTIONS
function calculateInterest() {
    const principal = parseFloat(document.getElementById('principal').value);
    const interestRate = parseFloat(document.getElementById('interest-rate').value);
    const days= parseFloat(document.getElementById('days').value);
    const months = parseFloat(document.getElementById('months').value);
    
     console.log(days);
     console.log(months);
    
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