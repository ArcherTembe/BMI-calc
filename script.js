var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var female = document.getElementById("f");
var form = document.getElementById("form");
let resultArea = document.querySelector(".comment");

modalContent = document.querySelector(".modal-content");
modalText = document.querySelector("#modalText");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];


function calculate(){
 
  // ❌ empty field check
  if(
    age.value=='' || 
    height.value=='' || 
    weight.value=='' || 
    (male.checked==false && female.checked==false)
  ){
    modal.style.display = "block";
    modalText.innerHTML = `All fields are required!`;
    return;
  }

  // convert values
  let a = Number(age.value);
  let h = Number(height.value);
  let w = Number(weight.value);

  // ❌ age must be a number
  if (isNaN(a)) {
    modal.style.display = "block";
    modalText.innerHTML = "Age must be a number!";
    return;
  }

  // ❌ AGE LIMITS (14–100)
  if (a < 14) {
    modal.style.display = "block";
    modalText.innerHTML = "Minimum age is 14";
    return;
  }

  if (a > 100) {
    modal.style.display = "block";
    modalText.innerHTML = "Maximum age is 100";
    return;
  }

  // ❌ WEIGHT LIMITS
  if (w < 30) {
    modal.style.display = "block";
    modalText.innerHTML = "Minimum weight is 30kg";
    return;
  }

  if (w > 300) {
    modal.style.display = "block";
    modalText.innerHTML = "Maximum weight is 300kg";
    return;
  }

  // ❌ HEIGHT LIMITS
  if (h < 100) {
    modal.style.display = "block";
    modalText.innerHTML = "Minimum height is 100cm";
    return;
  }

  if (h > 220) {
    modal.style.display = "block";
    modalText.innerHTML = "Maximum height is 220cm";
    return;
  }

  countBmi();
}


function countBmi(){
  var p = [age.value, height.value, weight.value];
  if(male.checked){
    p.push("male");
  }else if(female.checked){
    p.push("female");
  }

  var bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100);
      
var result = '';

if (bmi < 18.5) {
    result = 'Underweight';
}
else if (bmi >= 18.5 && bmi < 25) {
    result = 'Healthy';
}
else if (bmi >= 25 && bmi < 30) {
    result = 'Overweight';
}
else if (bmi >= 30 && bmi < 35) {
    result = 'Obese';
}
else {
    result = 'Extremely obese';
}

  resultArea.style.display = "block";
  document.querySelector(".comment").innerHTML = `You are <span id="comment">${result}</span>`;
  document.querySelector("#result").innerHTML = bmi.toFixed(2);
}


// close modal
span.onclick = function() {
  modal.style.display = "none";
}

// click outside modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
