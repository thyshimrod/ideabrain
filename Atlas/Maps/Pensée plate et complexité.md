---
up:
  - "[[Integral]]"
type: map
statut: evergreen
tags:
  - penseeplate
---
> [!Map]+ # Pensée plate et complexité
> La pensée plate : la causalité simple, le besoin d'un coupable ou d'une solution unique, et ce qu'il faut pour embrasser la complexité. C'est le fil rouge d'une série d'articles Integral Pathways et de mes conférences en entreprise.
> **Sous-maps :** — · **Maps voisines :** [[Jeux Psychologiques]] · [[Agilité]] · [[Coaching]]

## Théorie
- [[202407261043 causalité simple, animisme|Causalité simple et animisme]] — la part violette qui a besoin d'une cause unique
- [[202412121024 Terre plate|Terre plate]] — la métaphore de Wilber
- [[conf causalité simple v2|Conférence : quitter la causalité simple]] — embrasser la complexité dans les transformations d'entreprise
- [[202412050930 conférence flou|Conférence : le confort du flou]] — le flou réduit la sécurité psychologique
- [[202106181353 Faire plus de la meme chose|Faire plus de la même chose]] — Watzlawick : réussir à échouer
- [[202107071115 Desordre et estime de soi|Désordre et estime de soi]] — le désordre reflète le domaine de vie qui pose problème

## Outils
- AQAL : voir [[Integral]] (quadrants, niveaux, lignes)
- Antifragilité : [[Embrasser le Chaos - Comment la Pensée Multidimensionnelle Transforme les Échecs en Croissance Antifragile|Embrasser le chaos]] — transformer les échecs en croissance
- Spirale Dynamique : voir [[Spirale Dynamique]] (lire la causalité selon les niveaux)

## Mes articles
- [[Brojects/Integral Pathways/Contents/202508011755 contenu - pensee plate|Pilote : contenu pensée plate]] — références et articles de la série
- [[Brojects/Integral Pathways/Contents/202508141600 causalite simple why|Pilote : causalité simple]] — korenote et versions
> ```dataview
> LIST FROM "Brojects"
> WHERE contains(file.tags, "#penseeplate") OR serie = "pensee-plate"
> ```

> [!Box]- Première version de la conférence
> - [[conf causalité simple|Conférence causalité simple v1]]

> [!Box]- Notes taguées pas encore listées ici
> ```dataview
> TABLE WITHOUT ID file.link AS "Note", file.folder AS "Dossier"
> FROM #penseeplate AND -"Atlas/Maps" AND -"Atlas/prompting"
> WHERE !contains(this.file.outlinks, file.link)
> SORT file.name DESC
> ```
