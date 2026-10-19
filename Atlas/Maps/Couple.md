---
up:
  - "[[Développement personnel]]"
type: map
statut: evergreen
tags:
  - couple
---
> [!Map]+ # Couple
> Carte thématique de mes notes sur l'amour et le couple : attachement, dynamiques relationnelles, authenticité, et les croisements avec l'ennéagramme, l'AT et la CNV. Le projet Couple intégral est piloté dans Brojects ; ici, je rassemble le savoir.
> **Sous-maps :** Love coaching (ci-dessous) · **Maps voisines :** [[Développement personnel]] · [[CNV]] · [[Enneagramme]] · [[Jeux Psychologiques]] · [[Integral]]

## Amour et attachement
- [[202007302252 Mystère de l'amour|Le mystère de l'amour]] — inutile de chercher pourquoi on est aimé
- [[202007302253 s'aimer|S'aimer]] — on ne peut aimer son prochain qu'en s'aimant soi-même
- [[202412031622 attention, affection, amour|Attention, affection, amour]] — ce que l'accompagnement réveille de nos besoins
- [[202007312200 amour|L'amour, volonté de se dépasser]] — citation

## Dynamiques de couple et authenticité
- [[20250902213 discussions sur la recherche d'authenticité dans la relation|Recherche d'authenticité dans la relation]] — sortir du mode réactif aux stimuli de l'autre
- [[Le pouvoir de la vulnérabilité|Le pouvoir de la vulnérabilité]] — Brené Brown
- [[202310102126 Imposer sa souffrance a autrui|Imposer sa souffrance à autrui]] — vider son sac sans tri

## Couple et développement personnel
- [[20240423 dev perso et couple|Dev perso et couple]] — le chemin de chacun nourrit le couple
- [[20241226118 Pratique de vie intégrale - Module Ombre|Module Ombre (ILP)]] — projections et désir

## Croisements
### Ennéagramme
- [[202405061813 connaissance du couple|Connaissance du couple]] — l'intimité passe par la connaissance des peurs profondes de l'autre
- [[202312061630 Vivre sa relation avec un type enneagramme|Vivre sa relation avec un type]] — demandes implicites de chaque type

### Analyse transactionnelle
- [[Atlas/Notes/BooksNotes/202007302255 Les professionnels de la destruction de relation|Les professionnels de la destruction de relation]] — « pourquoi es-tu en colère contre moi ? »
- [[202508102107 Sauveur quitter le|Quitter le rôle de Sauveur]] — Karpman dans la relation

### CNV
- [[202305120918 stimulus pour l'autre|Être un stimulus pour l'autre]] — l'autre réveille, il ne cause pas
- [[202401300852 cracking the communication code|Cracking the communication code]] — observations, évaluations, besoins, demandes

## Love coaching
- [[Love coaching (formation)]] — formation SpiriVie : séances, croyances limitantes, langages de l'amour, Imago

## Sources
- [[biographies couple|Bibliographie couple]] — Hendrix, Dallaire, De Sutter, Malarewicz…
- [[202607312114 coach reference|Coachs de référence]] — Jimmy on relationships, Jimmy Knowles, The Freemans

## Mes contenus
- [[Brojects/Integral Pathways/produits/Couple integral/202601091546 couple integral|Couple intégral]] — pilotage du projet
- [[202610121000 main propre|Livre 2 : main propre]] — pilotage du livre
> ```dataview
> LIST FROM "Brojects"
> WHERE (type = "article" OR type = "livre") AND contains(file.tags, "#couple")
> ```

> [!Box]- Brouillons dans l'inbox
> - [[Article 2 pour livre en|Article 2 (EN)]] — « The argument started before you even got home »
> - [[artifcle 1 notes|Notes Substack, article 1]] — « Ce n'est pas la machine que tu as reprise »
> - [[artifcle 1 notes en|Substack notes, article 1 (EN)]]
> - [[C4 - livre 2 - chap4.1 v2|Livre 2, chapitre 4.1]] — ce qui résiste, même quand on a compris
> - [[202605262121 contexte claude architecture couple integrale|Prompt de reprise de l'offre couple]]

> [!Box]- Notes taguées pas encore listées ici
> ```dataview
> TABLE WITHOUT ID file.link AS "Note", file.folder AS "Dossier"
> FROM #couple AND -"Atlas/Maps" AND -"Atlas/prompting"
> WHERE !contains(this.file.outlinks, file.link)
> SORT file.name DESC
> ```
