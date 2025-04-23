# TestFullstackJSBNJ

Contexte
Vous travaillez sur une application de gestion de tâches collaboratives. L’objectif de ce test est d’implémenter un module simple permettant de créer, afficher et supprimer des tâches.

Partie Backend (Express.js)
Objectif : Créer une API REST avec les routes suivantes :

GET /tasks – Récupérer la liste des tâches

POST /tasks – Ajouter une tâche (champ requis : title)

DELETE /tasks/:id – Supprimer une tâche par son identifiant

Contraintes : 
-Utiliser Express.js
-Stockage en mémoire (tableau) – pas besoin de base de données
-Valider les entrées avec express-validator ou équivalent
-Structurer le code selon une logique MVC simple
-Utiliser des middlewares personnalisés si besoin

Bonus :
Implémenter un middleware d’authentification (factice, avec une simple clé d’API dans les headers)

Partie Frontend (React.js)
Objectif : Créer une interface React minimaliste permettant de :

-Lister les tâches
-Ajouter une nouvelle tâche via un formulaire
-Supprimer une tâche en cliquant sur un bouton

Contraintes :
- Utiliser React avec Hooks (pas de class components)
- Utiliser fetch() ou axios pour interagir avec l’API
- Gérer les erreurs et les loading states
- Utiliser un state global simple si nécessaire (contexte React ou state lifting)

Bonus :
- Utilisation de TypeScript
- Utilisation de React Query ou SWR pour la gestion des requêtes
- Ajouter une notification utilisateur (succès/erreur)