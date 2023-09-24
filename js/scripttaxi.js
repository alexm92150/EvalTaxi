/* John veut rentrer chez lui en taxi
prblm : il deteste Anissa de Wejdene qui passe tt l'temps à la radio
Il perd 1 de santé mentale et change de taxi dès qu'il entend cette musique
la musique change à chaque feux rouge et il habite à 30 feux rouges

A chaque feu rouge : afficher la musique jouée et le nombre de feux restants

deux fins possible : 
    - S'il a passé les 30 feux rouges, il est arrivé chez lui ; affiche qu'il est bien arrivé + le nbr de chgmnt de taxi pour y arriver
    - Sa santé mentale tombe à 0, il explose et donc affiche "explosion" (un peu violent)    

On a besoin :
    - Perso avec nom + prenom + santé mentale à 10
    - Liste de 5 musique dont Anissa de Wejdene
    - Trajet avec une radio, 30 feux rouges et un nombre de changements
*/


"use strict";

//petite introduction pour poser le contexte
console.log("*Alex baille la bouche grande ouverte*");
console.log("Je suis fatigué moi, je crois que je vais prendre un taxi pour rentrer chez moi");
console.log("*Alex monte dans le premier taxi qu'il voit*");
console.log("");//juste pour sauter une ligne dans la console

//création des variables qui vont etre utiles pour la suite
let santeMentale=10;
let nbChangements=0;

//création du tableau avec les 5 musiques qui passent en radio et la musique probleme en index 3
let musique=["BillieJean de MJ", "Zaza de LaFeve", "Trajectoire de Nepal", "Anissa de Wejdene", "NDA de Billie Eillish"]; 
let feuxRouges=30;

//setup la boucle qui répète l'étape jusqu'au 30eme feu rouge. Elle dit: "index egal à 0, tant que l'index est inférieur à 30, plus 1 à l'index"
for(let i=0;i<30;i++){
    let radio = musique[Math.floor(Math.random() * 5)] //formule pour choisir au hasard une musique à la radio
    if (radio==musique[3]){ //si la musique tombe sur Anissa de Wejdene (celle en index 3 du tableau), Alex perd 1 de santé mentale et effectue 1 changement
        santeMentale--
        nbChangements++
        //afficher dans la console qu'Alex change de taxi car il ne supporte pas Anissa
        console.log("Désolé Mr, laissez moi descendre je ne supporte pas "+radio+". Il ne me reste mtn plus que "+santeMentale+" pts de vie et "+feuxRouges+" feux rouges avant que j'arrive.")

        //si la santé mentale tombe à 0, on affiche dans la console, explosion, Alex ne rentrera pas chez lui dce soir
    if (santeMentale==0){
console.log("BOOM!!!!");
console.log("EXPLOSION, *Alex n'arrivera elas jamais chez lui.....*")
break// on casse la boucle
}}

//on pense à bien diminuer le compteur de feux rouges à chaque fois que ce n'est pas Anissa à la radio
feuxRouges=feuxRouges-1
//si il reste encore des feux rouges et que ce n'est pas Anissa à la radio, afficher dans la console, la musique en question et le nbr de feux restant
if (feuxRouges!=0 && radio!=musique[3]){ //si feuxrouges est different de 0 ET la radio est differente de Anissa
    console.log("est-ce bien "+radio+" que j'entends? Montez le son svp, je veux profiter du trajet, il me reste encore"+feuxRouges+" feux rouges avant d'être chez moi" );
    console.log('');//juste pour sauter une ligne dans la console

    //si il ne reste plus aucun feux rouges, alors afficher dans la console qu'Alex est arrivez apres [?] de changements de taxi et l'état de sa santée mentale
    }if (feuxRouges<=0){
        console.log("Enfin arrivé!!! *Alex est arrivé après "+nbChangements+" changements de taxi et une santé mentale de "+santeMentale+"*");
    }
        
    }






//Juste en dessous, avant d'utiliser une boucle, ma premiere version de l'exo avec une tentative de fonction qui n'a pas fonctionné 

/*function taxi(){
    feuxRouges--;
    const radio= Math.floor(Math.random() * 5) + 1;
if (radio==5) {
    santeMentale--;
    nbChangements++;
    
}else if (radio==musique[0,1,2,3]);
return radio;
}

while (santeMentale>0 && feuxRouges<30){
   const changements= taxi();
    console.log ("Alex Marier est monté dans un taxi, musique jouée :", musique[radio], + " il reste ", feuxRouges+ " feux rouges");
}

if (santeMentale<=0){
    console.log ("Explosion");
}else{
    console.log ("Vous êtes arrivés avec une santé mentale de : " + santeMentale)
}

console.log ("Vous avez effectuez :" [nbChangements] + " changements");*/