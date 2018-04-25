function Random (min, max){
  // Définit une fonction
  var random = Math.floor(Math.random()*(max - min));
  // Définit une variable random qui donne un nombre entier aléatoire
}
function RandomOperator(min,max){
  var operator = Math.floor(Math.random()*(max - min))
  //
  if (operator === 0){
    return "+"
  }
  else if(operator === 1){
    return "-"
  }
  else if(operator ===2){
    return "*"
  }
}
function RandomQuestion(min, max){
  var userinput = Random (min, max) + RandomOperator(0, 2) + Random(min, max)
  var anwser = prompt("Combien font " + userinput)
  console.log(userinput)
  if (eval(userinput) == anwser) {
    alert ("Trop balèze!")
  }
    else
      alert ("You sucks!")
}
RandomQuestion(0,10)
