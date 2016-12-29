function calcFunction(){
	var numberOne= document.getElementById("firstNumber").value;
	var numberTwo= document.getElementById("secondNumber").value;
  	var sum= +numberOne + +numberTwo;
  	document.getElementById("result").innerHTML= sum;

  	console.log(sum); 
};

function subtractFunction(){
	var subtractNumberOne= document.getElementById("subtractFirstNumber").value;
	var subtractNumberTwo= document.getElementById("subtractSecondNumber").value;

	var subtractSum= +subtractNumberOne - +subtractNumberTwo;
	document.getElementById("subtractResult").innerHTML= subtractSum;
	console.log(subtractSum);
}

function multiplyFunction(){
	var multiplyNumberOne= document.getElementById("multiplyFirstNumber").value;
	var multiplyNumberTwo= document.getElementById("multiplySecondNumber").value;
	var multiplySum= +multiplyNumberOne * +multiplyNumberTwo;
	document.getElementById("multiplyResult").innerHTML= multiplySum;

}

function divideFunction(){
	var divideNumberOne= document.getElementById("divideFirstNumber").value;
	var divideNumberTwo= document.getElementById("divideSecondNumber").value;
	var divideSum= +divideNumberOne / +divideNumberTwo;
	document.getElementById("divideResult").innerHTML= divideSum;
}
