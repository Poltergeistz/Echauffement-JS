function Question1(){
  // Créé la fonction Question1
var reponse = prompt ("De quelle couleur est le cheval blanc d'Henry 4?");
// Crée une variable couleur avec compris minuscules et majuscules > Pose la question1 en popup De quelle couleur est le cheval blanc d'Henry 4?
if (reponse.toLowerCase() === 'blanc'){
  // Si reponse est écrit en BLANC - blanc - Blanc alors transforme en blanc (minuscules)
  console.log (reponse)
  alert ("Bravo, question suivante...")
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

function Question2(){
  // Créé la fonction Question2
var nombre = prompt ("Combien y'a t il de 7 nains ?");
// Créé la variable nombre > pose la Question2 en popup Combien y'a t il de 7 nains ?
if (nombre == 7){
// Si nombre est égal à 7
  return ("Bravo! Tu as répondu à toutes les questions");
  // Alors Félicite : Bravo tu as répondu à toutes les questions !
}else{
  // Sinon
alert ("Essaye encore!")
// Annonce Essaye encore !
return (Question2());
// retourne à la fonction Question2
}
}
Question1()
