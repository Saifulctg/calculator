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
