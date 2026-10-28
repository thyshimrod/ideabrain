---
up:
  - "[[Home]]"
type: map
statut: evergreen
aliases:
  - Agilité et organisations
tags:
  - agile
---
> [!Map]+ # Agilité et organisations
> Valeurs agiles, transformation, management, changement et performance : ce qui me sert dans mes missions de coach agile et de consultant en transformation.
> **Sous-maps :** [[Transfo agile]] · **Maps voisines :** [[Spirale Dynamique]] · [[Coaching]] · [[Prompting et IA]] · [[Communautés et communs]]

## Valeurs et culture
- [[202106101627 valeurs agiles pogi|Valeurs agiles]] — un ensemble de valeurs vers lesquelles tendre
- [[202412050930 conférence flou|Le confort du flou réduit la sécurité psychologique]] — conférence

## Transformation
- [[Transfo agile]] — agilisation, organisation matricielle, transition de culture, théorie du changement, chapters

## Management et leadership
- [[202306202142 Posture basse|Posture basse]] — ne pas la confondre avec une posture effacée
- [[202308161112 Evaluation|Évaluation]] — l'injonction paradoxale de l'entretien annuel
- [[202309021414 Manipulation et exemplarité|Manipulation et exemplarité]] — montrer l'exemple est-il une manipulation ?
- [[202403241648 leaders quote|Citation sur les leaders]] — accueillir et amplifier la voix du messager
- [[202403251239 decision et insecurite|Décision et insécurité]] — remettre le jugement à un seul crée de l'insécurité
- [[202404151507 énergie et leadership|Énergie et leadership]] — le leader est celui qui porte l'énergie
- [[202404151531 posture de leader selon SD|Posture de leader selon la SD]]
- [[202409212348 individualisation|Individualisation]] — affecter les gens par talent, pas par métier

## Changement et résistance
- [[202211101508 decision|Décision]] — limiter le nombre de choix quotidiens
- [[202404041051 Priere du changemaker|Prière du changemaker]] — sérénité, courage, discernement
- [[202304051708 sabotage de décision|Sabotage de décision]] — le manuel de sabotage simple

## Planification, OKR, mesure
- [[202407162036 estimation agile, planification, chantier|Estimation agile, planification]] — l'honnêteté de reconnaître l'imprévisible
- [[202109171511 OKR au service du produit|OKR au service du produit]] — livre blanc Benext
- [[202106181351 Mesurer|Mesurer]] — citation de Niels Bohr

## Performance et motivation
- [[202502141353 def primes|Définition des primes]] — un outil non égalitaire fondé sur la motivation extrinsèque
- [[202509191744 motivation extrinseque|Motivation extrinsèque]] — quand l'objectif appartient à l'autre
- [[202504082220 Antidote au culte de la performance|Antidote au culte de la performance]] — loi de Goodhart
- [[202503111208 waterfall taylorien|Le waterfall, un taylorisme]] — silos optimisés localement

## Missions
### BNP Paribas
- [[202505271510 devops for bnp|DevOps pour BNP]] — métriques DORA, CALMR de SAFe
- [[202505271745 okr for bnp|OKR pour BNP]] — upskilling des coachs internes
- [[202504101435 Prompt création environnement|Prompt de contexte BNP]] — fichier de contexte de l'environnement de travail
- [[202506121448 impact managers bnp|Impact sur les managers BNP]] — DSI, managers de domaine

## Conférence Agile Tour Rennes 2026
« Pourquoi faut-il parler de développement personnel aux Agile Tour ? »
- [[conf Rennes 2026 - pourquoi faut il parler de développement personnel aux agile tour V3 claude|Version 3 (Claude)]] — version de référence
- [[conf Rennes 2026 - pourquoi faut il parler de développement personnel aux agile tour V2|Version 2]]
- [[conf Rennes 2026 - pourquoi faut il parler de développement personnel aux agile tour V1|Version 1]] — la posture du coach comme point de bascule
- [[conf Rennes 2026 - pourquoi faut il parler de développement personnel aux agile tour|Index des versions]]


## Conférence Agile Tour Nantes 2026
« Manager, coach, équipe : parentalité et majorité »
- [[202610261708 Manager, Coach, équipe - Parentalité et majorite v3|Version 3]] — version de référence
- [[202610231200 Manager, Coach, équipe - Parentalité et majorite v2|Version 2]] — scènes dialoguées, format participatif
- [[202610191122 Manager, Coach, équipe - Parentalité et majorite v1|Version 1]] — pistes et réservoir d'idées
- [[202610191117 Manager, Coach, équipe - Parentalité et majorite|Index des versions]]

## IA et organisations
- [[Brojects/reacteev/work/202607240954 livret blanc claude v1|Livre blanc Reacteev]] — de l'agilité de la production à l'agilité de la décision
- [[Brojects/reacteev/offre transfo IA v2|Offre de transformation IA Reacteev]] — lean canvas
- [[Prompting et IA]] — ma bibliothèque de prompts

## Mes contenus
- [[MOA AgileMe]] — idées d'articles sur l'agilité

> ```dataview
> LIST FROM "Brojects" OR "Efforts" OR "Atlas/Projects"
> WHERE (type = "article" OR type = "contenu" OR type = "livre") AND contains(file.tags, "#agile")
> ```

> [!Box]- Notes taguées pas encore listées ici
> ```dataview
> TABLE WITHOUT ID file.link AS "Note", file.folder AS "Dossier"
> FROM #agile AND -"Atlas/Maps" AND -"Atlas/prompting"
> WHERE !contains(this.file.outlinks, file.link)
> SORT file.name DESC
> ```
