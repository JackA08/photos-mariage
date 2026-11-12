# Projet O&G — Application photo de mariage

## 1. Objectif
Application web mobile permettant aux invités d'un mariage de prendre, envoyer et consulter des photos.
- Environ 200 invités.
- Volume cible initial : 4 000 photos.
- Volume potentiel : 20 000 photos.
- Application simple, accessible depuis iPhone et Android.
- Objectif : coût d'hébergement nul, avec un plafond de 10 € et des garde-fous.

## 2. Architecture actuelle
- Frontend : GitHub Pages.
- Backend : Google Apps Script.
- Application PWA.
- Fichiers principaux : index.html, manifest.json, service-worker.js.
- Stockage temporaire : IndexedDB.
- Identification locale : localStorage.
- Le backend Google Apps Script n'est pas présent dans ce dépôt.
Ne pas supposer que le backend est modifiable depuis VS Code.

## 3. Fonctionnalités à préserver
- Saisie du prénom et du nom.
- Prise de photos avec la caméra.
- Sélection multiple depuis la photothèque.
- Compression des images.
- Conservation des photos en attente hors connexion.
- Reprise de l'envoi lorsque la connexion revient.
- Galerie « Toutes les photos » et « Mes photos ».
- Recherche des photos par invité.
- Affichage des photos en plein écran.
- Téléchargement et partage sur mobile.
- Galerie verrouillée jusqu'à son ouverture.
- Administration de la date d'ouverture de la galerie.

## 4. Règles fonctionnelles
- Date d'ouverture prévue : 01/01/2027 à 08h00, heure française.
- Le serveur détermine l'ouverture effective de la galerie.
- Texte de la galerie verrouillée : « Rendez vous le 01/01/2027 à 8H pour découvrir toutes les photos du mariage ».
- Champ de recherche : « rechercher les photos d'un(e) invité(e) ».
- Ne pas modifier les textes validés sans demande explicite.

## 5. Design
Direction artistique : « Épure & naturel ».
- Interface sobre, élégante et adaptée au mobile.
- Typographie du monogramme O&G : Beautiful.
- Typographie des textes : CMU Serif.
- Palette : ivoire, crème, rouge profond, vert sapin/olive, doré chaud, terracotta/prune.
- Ne pas introduire de photographie des mariés dans l'accueil.
- Préserver le design existant sauf demande explicite.

## 6. Évolutions prévues
Une V2.1 est envisagée, avec notamment une évolution possible vers Scaleway.
- Ne pas commencer cette migration sans validation.
- Ne pas inventer l'architecture cible.
- Ne pas remplacer Google Apps Script spontanément.
- Privilégier d'abord les améliorations du frontend existant.

## 7. Règles de développement
- Lire le code existant avant toute modification.
- Préserver les fonctionnalités déjà opérationnelles.
- Ne modifier que ce qui est demandé.
- Expliquer les changements proposés.
- Signaler les risques et les dépendances.
- Tester les changements lorsque c'est possible.
- Ne jamais annoncer qu'un test a réussi s'il n'a pas été exécuté.
- Demander confirmation avant une modification structurante.
- Ne jamais supprimer de données ou de fichiers sans validation.
- Ne jamais exposer de secrets, clés ou mots de passe.
- Ne jamais effectuer de commit, push ou déploiement sans autorisation explicite.

## 8. Méthode de collaboration
L'utilisateur définit les besoins fonctionnels avec ChatGPT.
Copilot intervient comme agent de développement dans VS Code.
Pour chaque demande :
1. Analyser l'existant.
2. Proposer les modifications nécessaires.
3. Signaler les impacts.
4. Réaliser uniquement les changements autorisés.
5. Vérifier les résultats.
6. Résumer les fichiers modifiés.

Ne pas modifier d'autres fichiers que .github/copilot-instructions.md pour cette demande.
Ne pas effectuer de commit ou de push.
