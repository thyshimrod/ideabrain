---
type: pilotage
projet: couple-integral
statut: ongoing
up:
  - "[[Couple intégral]]"
tags:
  - couple
  - at/karpman
---
> [!abstract]+ # Camp 1 : Apaisement, sortir des jeux
> Le couple cesse de rejouer les mêmes boucles et commence à se voir comme co-auteur du jeu plutôt que victime l'un de l'autre. Outils : jeux psychologiques, triangle de Karpman, égogramme, besoins (CNV).

## Livre 1 — *Hors Jeu / Out of the Game* (publié, avril 2026)
- **Référence FR** : [[202604131054 booklet intégral]] · **EN** : [[202604142122 booklet intégral en]]
- Synthèse pour réutilisation : [[synthèse livre pour utilisation]] · Questionnaire lecteurs : [[202608071532 questionnaire hors jeu]]
- Série d'articles : [[Articles pour livre]]

> [!note]- Versions de travail (saynettes, intro, pubs Amazon)
> ```dataview
> LIST FROM "Brojects/Integral Pathways/produits/Couple integral/Camp 1/livre out of game/work"
> SORT file.name ASC
> ```

## Guide — *Which Role Are You Playing Right Now?* (Gumroad)
- **Référence EN** : [[guide complet en]] · **FR** : [[guide complet]]
- Série de promotion (5 articles) : [[liste articles pour le guide]]

> [!note]- Versions de travail du guide
> - Index d'origine : [[guide]]
> ```dataview
> LIST FROM "Brojects/Integral Pathways/produits/Couple integral/Camp 1/guide/versions"
> SORT file.name ASC
> ```

## Livre 2 — *Remise en jeu* (manuscrit en relecture)
- **Pilotage** : [[202610121000 main propre]] · revue du 12/10 : [[202610120930 revue livre 2]]
- **Manuscrit** : [[Remise en jeu - manuscrit]]
```dataview
TABLE WITHOUT ID file.link AS "Chapitre", chapitre AS "N°", statut AS "Statut"
FROM "Brojects/Integral Pathways/produits/Couple integral/Camp 1/livre 2" OR "+"
WHERE projet = "livre-remise-en-jeu" AND reference = true AND type = "chapitre"
SORT chapitre ASC
```

## Plans d'accompagnement
- [[202510011423 plan accompagnement 30j]]
