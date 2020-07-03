function input(userInput) {
  document.form.output.value += userInput
 }
function equal(){
  var userinput = document.form.output.value
  document.form.output.value = eval(userinput)
}

function clearEntry() {
  var userInput = document.form.output.value
  var userInputLength = userInput.length

  document.form.output.value = userInput.slice(0,userInputLength - 1)
}


function check(){
  var a = document.test.mark.value

      if(0<a && a<=32){
         document.getElementById('result').innerHTML="0(F)"
      }
      else if(33<=a && a<=39){
          document.getElementById('result').innerHTML="1.00(D)"
      }
      else if(40<=a && a<=49){
          document.getElementById('result').innerHTML="2.00(C)"
      }
      else if(50<=a && a<=59){
          document.getElementById('result').innerHTML="3.00(B)"
      }
      else if(60<=a && a<=69){
          document.getElementById('result').innerHTML="13.50(A-)"
      }
      if(70<=a && a<=79){
          document.getElementById('result').innerHTML="4.00(A)"
      }
      else if(80<=a && a<=100){
          document.getElementById('result').innerHTML="5.00(A+)"
      }else if(0>a || a>100){
        alert('This is not valid number !')
      }
}
