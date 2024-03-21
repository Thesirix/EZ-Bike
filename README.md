# Projet e-z-bike

## Contributeurs
Par les Spaciocatographes de la Salspareil :
- Renaud Mercier
- Manon Drozdzowski
- Emmanuelle Sanchez
- Faysoll Da Silva
- Jérôme Gavino

## Déploiement de l'application


### Description des fichiers

#### HTML
Chaque fichier HTML (index.html, modeEmploi.html, trouver-un-velib.html, calculateur.html, contact.html, comingSoon.html, error404.html) contiendrait le contenu de la page respective avec les balises HTML nécessaires.

#### CSS
- `common.css` : pour les styles généraux du site.
- `contact.css` : pour les styles spécifiques à la version responsive du site.

#### JavaScript
- `common.js` : pour les fonctionnalités générales du site.
- `carousel.js` : pour implémenter le carousel dans la page mode d'emploi.
- `trouver-un-velib.js` : pour gérer la recherche de stations sur la carte dans la page trouver un vélib.
- `contact.js` : pour la validation des formulaires dans la page contact.
- `form.js` : pour le calculateur d'émissions de CO2.
- `compteRebours.js` : pour le compte à rebours.

### Pages principales

#### Page d'accueil (index.html)
La page d'accueil comporterait deux boutons redirigeant vers les pages `calculateur.html` et `trouver-un-velib.html`, ainsi que les sections "Comment ça marche ?" et "Se rendre à la station".

#### Barre de Navigation et Menu Burger
La barre de navigation en haut de chaque page inclurait des liens vers toutes les pages du site, y compris "Accueil", "Mode d'emploi", "Trouver un vélib", "Calculateur", "Contact" et "Coming Soon". Le menu burger version responsive serait également présent.

#### Page Calculateur (calculateur.html)
La page calculateur comporterait un formulaire où l'utilisateur pourrait entrer le nombre de kilomètres parcourus par jour et le nombre de jours travaillés par semaine. Un pop-up afficherait ensuite le niveau de CO2 pour les trajets domicile-travail en voiture et le résultat en kg des niveaux de rejet de CO2 par mois.

#### Page Trouver un Vélib (trouver-un-velib.html)
Cette page inclurait une barre de recherche avec une carte interactive permettant de trouver des stations de vélib en fonction du nom tapé par l'utilisateur et de la localisation des stations renseignées. Les icônes sur la carte auraient la forme d'une feuille pour refléter le caractère éco-responsable du site.

#### Page Contact (contact.html)
Sur cette page, les utilisateurs pourraient saisir leur nom, prénom, numéro de téléphone, e-mail et un message. Des expressions régulières JavaScript seraient utilisées pour valider chaque catégorie liée au formulaire. Un bouton d'envoi permettrait de soumettre le formulaire.

#### Page Coming Soon (comingSoon.html)
Une page simple avec un compte à rebours défini pour l'arrivée d'une nouvelle page ou fonctionnalité.

#### Page d'Erreur 404 (error404.html)
Une page d'erreur 404 pour la redirection si aucune page n'est trouvée.

## Repositories GitHub
Tous les fichiers du projet seraient mis en repositories sur GitHub pour faciliter la collaboration et le partage du code.
