---
type: pilotage
projet: integral-pathways
statut: ongoing
up:
  - "[[Home]]"
tags:
  - business
  - couple
---
> [!abstract]+ # Integral Pathways
> **Promesse** : « You're self-aware, well-read, and still stuck in the same relational loops… »
> **Cible** : adultes de 35 à 50 ans, déjà engagés dans un travail sur soi, bloqués sur des schémas relationnels qui se répètent.
> **Positionnement** : auteur de fond et accompagnant du « couple intégral », entre Esther Perel et Martin Ucik.

> [!warning] Décisions ouvertes
> - [ ] Coaching individuel ou app d'accompagnement pour les 6 prochains mois ? → [[202607310916 reprise stratégie]]
> - [ ] Noms de marque : Substack EN (Integral Pathways ou Out of the Game ?) et Substack FR (Éveil Vivant ?)
> - [ ] Prix du guide : 13 € ou 17 € ?
> - [ ] Place du Livre 2 dans la montagne : Camp 1 ou Camp 5 ?

## Pilotage
- **Feuille de route (chantiers en cours, par camp, boîte d'entrée)** : [[Feuille de route Integral Pathways]]
- Articles à écrire, par saison et par camp : [[Articles à écrire]]
- Reprise IA courante : [[202607310916 reprise stratégie]]
- Vision de fond (montagne, 6 camps) : [[202606152035 reprise archi + module 1 + livre suivant]] · [[202606151125 Vision globale + Architecture camps révisée]]
- Chiffres : [[follow substack]]
- Contexte pour l'IA : [[prompt context integral pathways]] *(à mettre à jour avec la vision 2026)*
- Instagram / YouTube : [[202609111747 reprise couple integral - insta - archi]] · [[contexte insta]]

## Gamme
- [[Couple intégral]] : la montagne, les 6 camps, les produits
- Autres projets : [[Eveil 7]] (livre type 7) · Reacteev ([[offre transfo IA v2]], [[202607240954 livret blanc claude v1]]) — hors activité solopreneur

## Produits
Livres et guides en version finale (les 4e de couverture, présentations de l'auteur et fiches Amazon sont rattachées à leur livre dans [[Publications]]).
```dataview
TABLE WITHOUT ID file.link AS "Produit", oeuvre AS "Titre", type AS "Type", langue AS "Langue", choice(publie, "publié", "en cours") AS "État"
FROM "Brojects/Integral Pathways" OR "Brojects/Eveil 7"
WHERE version = "finale" AND (type = "livre" OR type = "produit")
SORT projet ASC, langue ASC
```
- *Éveil 7* : publié par chapitres, voir [[Eveil 7]].

## Publiés récemment
Articles en version finale, publiés sur le Substack anglais (les plus récents d'abord, d'après l'horodatage du nom de fichier).
```dataview
TABLE WITHOUT ID file.link AS "Article", oeuvre AS "Titre", serie AS "Série"
FROM "Brojects"
WHERE type = "article" AND version = "finale" AND publie = true
SORT file.name DESC
LIMIT 15
```
Vue complète par série : [[Publications]]

> [!note]- Archives (produits abandonnés ou remplacés)
> - RAC : [[MOA RAC - Revenir en accord avec son corps]]
> - Architecture du vivant : [[202601121551 Architecture du vivant]]
> - Gamme IP v1 à v4 : [[202512231623 produits revises v4]] · [[LA promesse centrale]] · [[3 offres finales nommées]]
> - Éveil Vivant, MVASE : [[MOA Eveil vivant]] · [[Eveil Vivant - Mieux vivre avec ses émotions]]
> - De la trilogie à une offre premium : [[202601121230 de la trilogie une offre premium]]
> - Revue vision et démarche (avril 2026) : [[202604271224 vision & discussion]]
