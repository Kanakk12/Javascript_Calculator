//function
function submit()
// Get the input values
{   
    var number1 = parseFloat(document.getElementById('number1').value);
    var number2 = parseFloat(document.getElementById('number2').value);
    var operators = document.getElementById('operators').value;
// if statements for displaying output
    if (operators === '+') // srtict equality operator
    {
        document.getElementById('answer').value = number1+number2;
    }
    if (operators === '-')
    {
        document.getElementById('answer').value = number1-number2;
    }
    if (operators === '*')
    {
        document.getElementById('answer').value = number1*number2;
    }
    if (operators === '/')
    {
        document.getElementById('answer').value = number1/number2;
    }
    //Inputs mandatory prompt
if ((document.getElementById('number1').value=="" || document.getElementById('number2').value== "")) {
     alert("Input fields are mandatory")
    
}

}
function clearOutput() {
    // Clear the output
    document.getElementById("answer").value= "";
}
function reset(){
    // reset the input values
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
    document.getElementById("operators").value="+";
    document.getElementById("answer").value="";
}
