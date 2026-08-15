// ===== CHARGEMENT DES PRODUITS =====
//fetch('produits.json')/*demande au navigateur de lire le fichier json*/
  //  .then(response => response.json()) /*convertit la reponse en objet javascript*/
    //.then(produits => { /*quand les données sont prêtes on execute la fonction */
      //  const grille = document.querySelector('.catalogue-grille'); /*recupere le conteneur de la grille*/
        //if (grille) { /*verifie que la grille existe avant d'ecrire*/
          //  produits.forEach(produit => { /*pour chaque produits on genere une carte*/
            //    grille.innerHTML +=/*ajoute la carte dans la grille*/ ` 
              //      <div class="produit-card">
                //        <img src="images/produits/${produit.image}" alt="${produit.nom}">
                  //      <h3>${produit.nom}</h3>
                    //    <p>${produit.prix}</p>
                      //  <a href="produit.html?id=${produit.id}">Voir</a>
                    //</div>
 //               `;
   //         });
     //   }
    //})
//    .catch(error => console.error('Erreur de chargement :', error));/*affiche une erreur dans la console si le fichier json n'est pas trouver*/