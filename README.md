# ForLoop

Programme console qui affiche des formes géométriques (NodeJS - JavaScript - Fonctions - Boucles For)

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
