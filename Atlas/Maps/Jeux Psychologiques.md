---
up:
  - "[[Home]]"
type: map
statut: evergreen
aliases:
  - Analyse transactionnelle
tags:
  - at
---
> [!Map]+ # Analyse transactionnelle
> L'AT d'Eric Berne : états du moi, jeux psychologiques, triangle de Karpman et rapport à la contrainte. Je l'utilise pour repérer les jeux (les miens, ceux du couple, ceux des organisations) et en sortir par l'authenticité.
> **Maps voisines :** [[CNV]] · [[Coaching]] · [[Enneagramme]] · [[Honte, culpabilité et colère]]

## États du moi
- [[202502122028 parent nourricier|Parent nourricier]] — l'aide qui enferme dans la culpabilité
- [[202312172202 Etat du moi pour le type 7|États du moi du type 7]] — l'enfant rebelle face au parent normatif

## Jeux
- [[202311231056 jeux psy listes|Liste des jeux psychologiques]] — « Pauvre de moi ! » et les autres
- [[202311241016 jeux psychologiques 2|Jeux psychologiques 2]] — les jeux du persécuteur
- [[202007312139 Jeux de pouvoir et authenticité|Jeux de pouvoir et authenticité]] — les 6 structures de relation selon Berne
- [[202108261521 Jeu et énergie|Jeu et énergie]] — l'énergie dépensée dans les jeux d'influence
- [[Atlas/Notes/BooksNotes/202007302255 Les professionnels de la destruction de relation|Les professionnels de la destruction de relation]] — la lecture de pensée et autres techniques

## Triangle de Karpman
- [[202502132029 Manuel pratique du karpman process model|Manuel pratique du Karpman process model]] — les invitations depuis chaque rôle
- [[202510281106 se sortir du triangle de karpman|Se sortir du triangle]] — les questions du sauveur
- [[202510281106 sortir du triangle de karpman eviter les invitations|Éviter les invitations]] — renvoyer la responsabilité
- [[202510281108 sortir de son role dans le triangle|Sortir de son rôle]] — le persécuteur et la demande claire
- [[202508102107 Sauveur quitter le|Quitter le rôle de sauveur]] — le beau rôle du chevalier
- [[je souffre donc je suis -pascal bruckner|Je souffre donc je suis]] — Bruckner et l'idéologie victimaire

## Rébellion, soumission, opposition
- [[202508102058 rebellion|Rébellion]] — se rebeller contre n'est pas être libre
- [[202512101952 Rebellion et affirmation|Rébellion et affirmation]] — du sabotage à l'affirmation
- [[202512102006 contrainte et de l'opposition|Contrainte et opposition]] — différencier l'intentionnel du subi

## Flou et bénéfices secondaires
- [[flou AT|Le flou et ses bénéfices secondaires]]
- [[202412050930 conférence flou|Conférence : le confort du flou réduit la sécurité psychologique]]
- [[flou et securité|Flou et sécurité]] — plan de conférence (à fusionner avec la précédente)

## AT en organisation
- [[202201111042 TOB - théorie des organisations de Berne|TOB, théorie des organisations de Berne]] — frontières, leadership, membres

## Croisements
- [[202320062149 trouver ses besoins|Trouver ses besoins]] — CNV : sortir de la dépendance à l'autre
- [[202508302338 focus et intégration cnv, at, sd|Focus et intégration CNV, AT, SD]]

## Mes contenus
- [[zoimmeisdess AT jeux|Pourquoi on joue dans la relation]] — article Zoimmeisdess
- [[Comment désarmorcer le jeu|Comment désamorcer le jeu]]
- [[Vidéo - parent nourricier|Vidéo : parent nourricier]]
- [[Vidéo - jouer c'est à deux, chacun doit pouvoir aller voir sa part de responsabilité|Vidéo : jouer, c'est à deux]]
- [[Video - exigence caricaturale sur l'autre|Vidéo : exigence caricaturale sur l'autre]]

> ```dataview
> LIST FROM "Brojects" OR "Efforts" OR "Atlas/Projects"
> WHERE (type = "article" OR type = "contenu" OR type = "livre") AND contains(file.tags, "#at")
> ```

> [!Box]- Notes taguées pas encore listées ici
> ```dataview
> TABLE WITHOUT ID file.link AS "Note", file.folder AS "Dossier"
> FROM #at AND -"Atlas/Maps" AND -"Atlas/prompting"
> WHERE !contains(this.file.outlinks, file.link)
> SORT file.name DESC
> ```
