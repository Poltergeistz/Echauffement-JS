function Login(){
  // Créé la fonction Login
var reponse = prompt ("Identifiant");
// Crée une variable 
if (reponse.toLowerCase() === 'léa@gmail.com'){
  // Si reponse est écrit en BLANC - blanc - Blanc alors transforme en blanc (minuscules)
  console.log (reponse)
  alert ("")
  // Félicite Bravo, question suivante...
  return (Question2());
  // Affiche la question suivante
}else{
  // Sinon
  alert ("Essaye encore!")
  // Annonce Essaye encore!
return (Question1());
// retourne à la fonction Question1
}
}

function mdp(){
  // Créé la fonction Question2
var nombre = prompt ("Mot de passe");
// Créé la variable nombre > pose la Question2 en popup Combien y'a t il de 7 nains ?
if (nombre === '1234'){
// Si nombre est égal à 7
  return ("Connecté");
  // Alors Félicite : Bravo tu as répondu à toutes les questions !
}else{
  // Sinon
alert ("Mot de passe incorrect")
// Annonce Essaye encore !
return (Question2());
// retourne à la fonction 
}
}
Question1()
