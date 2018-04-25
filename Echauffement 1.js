function Question (){
// Crée une boucle en posant la question
var prenom = prompt ("Comment tu t'appeles ?");
  // Pose la question en popup : Comment tu t'appeles ?
if (prenom.length>1 && prenom.length<=10){
  // Donne une valeur de caracteres comprise entre 1 et 10 ou égale à 10. Si cette valeur est comprise entre 1 et/ou égale à 10.
return ("Bonjour " + prenom)
  //Affiche Bonjour + la variable prenom qui est n'importe quel prenom compris entre 1 et 10 ou egal à 10

}else{
// Sinon 
return (Question());
  // retourne à la boucle fonction pour reposer la question vu que le nombre de caractere excède 10
}
}
alert (Question())
// Affiche la fonction
