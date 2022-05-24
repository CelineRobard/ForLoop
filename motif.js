/*

F̶o̶r̶FunLoop : Programme console qui affiche des formes géométriques (NodeJS - JavaScript - Fonctions - Boucles For)

La procédure afficheForme() gère l'affichage d'une forme passée en paramètre.
Les fonctions de forme Rectangle() et Carre() appellent la fonction Ligne() pour initialiser la "constante ligne" puis effectuent une boucle de concaténation.
Les fonctions de forme TriangleRectangle() et TriangleIsocele() bouclent sur l'appel de la fonction Ligne() pour modifier la valeur de la "variable ligne" avant concaténation.
La fonction Ligne() retourne une chaîne de caractères.

La valeur des variables "symbole","nbLignes","nbColonnes" du programme principal et sont passés en paramètre de la fonction qui concatène la forme puis de la fonction qui concatène la ligne.
- symbole permet de choisir le motif à afficher
- nbLignes et nbColonnes permettent de déterminer la taille de la forme en contrôlant les boucles

Poursuite du programme : créer une fonction pour le losange, le cercle, l'étoile...
Amélioration du programme : remplacer par une classe Forme pour générer facilement des formes avec des paramètres propres à chaque forme et chaque instance
Correction à apporter au programme : effectuer des contrôles sur le symbole saisi 

*/



//Affiche le nom et la représentation de la forme à la console
function afficheForme(forme){
    console.log("Appelez-moi " + forme.nom);
    console.log();
    console.log(forme.forme);
    console.log();
}

//Retourne une chaîne de caractères représentant une ligne
function Ligne(symbole,nbColonnes){

    let ligne = "";

    for(i=0; i<nbColonnes; i++){
        ligne += symbole;
    }
    return ligne;
}

//Retourne un objet dont l'attribut "forme" contient une chaîne de caractères représentant un rectangle
function Rectangle(symbole,nbLignes,nbColonnes){

    const ligne = Ligne(symbole,nbColonnes);
    let rectangle = {
                        forme : "",
                        nom : "rectangle"
                    };

    for(i=0; i<nbLignes; i++){
        rectangle.forme += ligne + "\n";
    }

    return rectangle;

}
//Retourne un objet dont l'attribut "forme" contient une chaîne de caractères représentant un carré
function Carre(symbole,nbLignes){

    const ligne = Ligne(symbole,nbLignes);
    let carre = {
                        forme : "",
                        nom : "carre"
                    };

    for(i=0; i<nbLignes; i++){
        carre.forme += ligne + "\n";
    }

    return carre;

}
//Retourne un objet dont l'attribut "forme" contient une chaîne de caractères représentant un triangle avec un angle droit
function TriangleRectangle(symbole,nbLignes){

    let ligne;
    let triangle = {
                        forme : "",
                        nom : "triangle rectangle"
                    };
    let nbSymboles;

    for(i=0; i<nbLignes*2; i++){

        nbSymboles = i+1;
        
        if(i%2 == 0){
            ligne = Ligne(symbole,nbSymboles);
            triangle.forme += ligne;
        }
        if(i%2 == 1){
            triangle.forme += "\n\n";
        }
    }

    return triangle;
}

//Retourne un objet dont l'attribut "forme" contient une chaîne de caractères représentant un triangle avec deux côtés égaux
function TriangleIsocele(symbole,nbLignes){

    let ligne;
    let triangle = {
        forme : "",
        nom : "triangle isocèle"
    };
    let hauteur = nbLignes * 2;
    let nbColonnesMax = hauteur - 1;
    let nbSymboles;
    let nbSpaces;

    for(i=0; i<hauteur; i++){

        nbSymboles = i+1;
        nbSpaces = (nbColonnesMax -1 - nbSymboles) / 2;

        if(i%2 == 0){
            ligne  = Ligne("   ",nbSpaces);
            ligne += Ligne(symbole,nbSymboles);
            triangle.forme += ligne + "\n";
        }
    }

    return triangle;
}


/***********************  Jeu de tests **********************/
let symbole = " * ";
let nbLignes = 4;
let nbColonnes = 9;
let uneForme;

//Rectangle
uneForme = Rectangle(symbole,nbLignes,nbColonnes);
afficheForme(uneForme);

//Carré
uneForme = Carre(symbole,nbLignes);
afficheForme(uneForme);

//Triangle rectangle
uneForme = TriangleRectangle(symbole,nbLignes);
afficheForme(uneForme);

//Triangle isocèle
uneForme = TriangleIsocele(symbole,nbLignes);
afficheForme(uneForme);