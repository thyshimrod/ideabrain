### Prototype Quiz Onboarding : "Découvrez Votre Stade Couple Intégral"

Voici un prototype complet et fonctionnel du quiz onboarding pour votre jeu "Tissage Intégral du Couple". Il est conçu pour 10-12 minutes, accessible (questions simples, scale 1-5 ou choix multiples), et personnalisé : évalue stade Spirale (orange-vert-jaune), déphasage (mental/sexuel/émotionnel), drivers (Ennéagramme basique), et jeux toxiques (AT). Le quizz est pour couple (répond conjointement ou moyenner scores solo), avec output : profil, racines recommandées, XP starter, et badges initiaux.

**Mécanique du Quiz** :
- **Format** : App/web (via Typeform/Google Forms pour MVP, Bubble pour full app). 10 questions (5 individuelles, 5 couple).
- **Scoring** : Score total 0-50 (orange <20 : efficacité ; vert 20-35 : harmonie ; jaune >35 : intégration). Sous-scores pour déphasage (ombre, corps, mental).
- **Output Personnalisé** : Arbre suggéré (racines prioritaires), 50 XP starter, badge initial, quizz hebdo pour recalibrage.
- **Gamification** : Réponses débloquent teasers pratiques ; fin = unlock 1 racine gratuite.

#### Les 10 Questions du Prototype
Répondez à l'échelle 1-5 (1 : Jamais, 5 : Toujours) ou choix. Moyenne des scores couple.

1. **Communication Basique** : "Dans nos discussions, nous écoutons-nous vraiment avant de répondre ?" (1-5)
2. **Postures Toxiques (AT)** : "Nous tombons souvent dans des rôles comme 'blâmeur' ou 'victime' lors de conflits ?" (1-5, inversé pour scoring haut = problème)
3. **Besoins Clairs (CNV)** : "Nous exprimons nos besoins sans accuser l'autre ?" (1-5)
4. **Drivers Personnels (Ennéagramme Intro)** : "Je sais identifier mes peurs/motivations profondes (ex. : peur de l'échec ou de l'abandon) ?" (1-5)
5. **Déphasage Émotionnel** : "Nos émotions sont-elles souvent en décalage (un frustré, l'autre détaché) ?" (1-5, inversé)
6. **Intimité Physique** : "Notre toucher quotidien est-il naturel et fréquent ?" (1-5)
7. **Valeurs Alignées (Spirale Intro)** : "Nos priorités (succès pro vs harmonie famille) sont-elles compatibles ?" (choix : Fort aligné / Moyen / Décalé)
8. **Stade Ego (EDT Intro)** : "Nous tolérons-nous l'ambiguïté dans nos décisions couple ?" (1-5)
9. **Jeux Psychologiques** : "Nos disputes tournent-elles en cercle (blâme → retrait → explosion) ?" (1-5, inversé)
10. **Vision Partagée** : "Nous avons-nous des projets communs mesurables (voyage, finances) ?" (1-5)

#### Logique de Scoring et Output (Exemples Prototype)
**Scoring Automatique** :
- **Spirale** : Orange (score <25 : focus efficacité) ; Vert (25-40 : harmonie) ; Jaune (>40 : intégration).
- **Déphasage** : Haut score questions 5/9 = déphasage émotionnel/jeux ; 6 = physique ; 7 = valeurs.
- **XP Starter** : +50 pour complétion ; badge basé sur profil.

**Exemple Output 1 : Profil Orange (Score 18/50)**
- **Votre Stade** : Orange Pragmatique – Efficacité relationnelle à optimiser.
- **Déphasage Détecté** : Communication (questions 1-3 basses) et jeux toxiques (9 haute).
- **Racines Recommandées** : 1. Communication (Niveau 1 unlock gratuit) ; 2. Postures Toxiques.
- **Badge Initial** : "Optimiseur Orange" (shiny étoile).
- **XP** : 50 starter ; Prochain défi : Écoute active (quick win).

**Exemple Output 2 : Profil Vert (Score 32/50)**
- **Votre Stade** : Vert Harmonieux – Prêt pour guérison émotionnelle.
- **Déphasage Détecté** : Peurs/drivers (4/5 basses).
- **Racines Recommandées** : 3. Découverte Ombre ; Transition vers Polarités.
- **Badge Initial** : "Guérisseur Vert" (cœur cozy).
- **XP** : 50 starter ; Mode Cozy : Journal partagé unlock.

**Exemple Output 3 : Profil Jaune (Score 45/50)**
- **Votre Stade** : Jaune Intégral – Vers essaim éveillé.
- **Déphasage Détecté** : Valeurs (7 moyen).
- **Racines Recommandées** : Toutes unlock ; Focus Essaim Externe.
- **Badge Initial** : "Essaim Harmonieux" (symbole infini).
- **XP** : 50 starter ; Mode Cozy : Sous-classes libres (ombre/polarités).

#### Implémentation Technique (MVP)
- **Outils** : Typeform pour quizz (gratuit, embed Substack) ; Bubble/Adalo pour app full (tracking XP/arbre, ~200€ setup).
- **Monétisation** : Core quizz gratuit ; unlocks payants (5€/branche, 49€ full arbre).
- **Test** : Beta sur votre Substack (lien quizz → feedback).

Ce prototype est prêt à coder/test – réaliste, engageant, et aligné orange-jaune. Qu'en pensez-vous ? Ajustons questions ou outputs ?