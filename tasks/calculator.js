document.getElementById("calculate").addEventListener("click", function() {

	// set timeout
setTimeout(calculateAmount, 1000);
	
// prevent page from reloading on submit
	e.preventDefault();
});
function calculateAmount(){
const amount=document.querySelector('#p').value;
const interest=document.querySelector('#r').value;
const  years=document.querySelector('#n').value;
const totalinterest = (amount*interest*years/100);
document.querySelector('#demo').innerHTML="The interest is " +totalinterest;

}