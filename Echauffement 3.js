function Login(){
  // Créé la fonction Login
var reponse = prompt ("Identifiant");
// Crée une variable 
if (reponse.length > 4 && reponse.indexOf('@') != -1 && reponse == 'léa@gmail.com'){
  // Si reponse est écrite léa@gmail.com ou Léa@gmail.com alors transforme en (minuscules)
  console.log (reponse)
  // 
  return (mdp());
  // Va a mot de passe
}else{
  // Sinon
  alert ("Adresse Email non enregistrée")
  // Annonce Adresse Email non enregistrée
return (Login());
// retourne à la fonction Login
}
}

function mdp(){
  // Créé la fonction mdp
var nombre = prompt ("Mot de passe");
// Créé la variable nombre > mot de passe
if (nombre === '12345'){
// Si nombre est strictement égal à '12345'
  alert ("Connecté");
  //Affiche à l'user un message pour lui dire qu'il est connecté
  return ("connecté")
  // connecté
}else{
  // Sinon
alert ("Mot de passe incorrect")
// Annonce Mot de passe incorrect
return (mdp());
// retourne à la fonction mdp
}
}
Login()
