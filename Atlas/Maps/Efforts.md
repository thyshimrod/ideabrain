---
up:
  - "[[Home]]"
type: map
statut: evergreen
---
> [!Map]+ # Efforts
> Vue réelle de mes efforts (dossier `Efforts`) par intensité LYT : on, ongoing, simmering, sleeping, done. Tant que la propriété `statut` n'est pas posée, le dossier fait foi.
> **Maps liées :** [[Exploration]] · [[Exploration Personnelle]] · [[Videos]] · [[instaVideo]] · [[MOA RELEASe]]

## On
Ce sur quoi je travaille activement.
> ```dataview
> TABLE statut, rank, projet
> FROM "Efforts"
> WHERE file.name != "Efforts" AND choice(statut, statut = "on", file.folder = "Efforts/On")
> SORT rank DESC
> ```

## Ongoing
Efforts au long cours, avancés régulièrement.
> ```dataview
> TABLE statut, rank, projet
> FROM "Efforts"
> WHERE file.name != "Efforts" AND choice(statut, statut = "ongoing", file.folder = "Efforts/Ongoing")
> SORT rank DESC
> ```

## Simmering
Efforts qui mijotent en arrière-plan.
> ```dataview
> TABLE statut, rank, projet
> FROM "Efforts"
> WHERE file.name != "Efforts" AND statut = "simmering"
> SORT rank DESC
> ```

## Sleeping
Efforts en sommeil, à réveiller un jour.
> ```dataview
> TABLE statut, rank, projet
> FROM "Efforts"
> WHERE file.name != "Efforts" AND choice(statut, statut = "sleeping", file.folder = "Efforts/Sleeping")
> SORT rank DESC
> ```

## Done
Efforts terminés.
> ```dataview
> TABLE statut, rank, projet
> FROM "Efforts"
> WHERE file.name != "Efforts" AND choice(statut, statut = "done", file.folder = "Efforts/ZDone")
> SORT rank DESC
> ```

## Autres efforts
Explorations, vidéos, releases et actions récurrentes, rangés par dossier (les explorations personnelles sont dans [[Exploration Personnelle]]).
> ```dataview
> TABLE WITHOUT ID rows.file.link AS "Effort", rows.rank AS "Rank", rows.projet AS "Projet"
> FROM "Efforts" AND -"Efforts/On" AND -"Efforts/Ongoing" AND -"Efforts/Sleeping" AND -"Efforts/ZDone" AND -"Efforts/Explorations personnelles"
> WHERE file.name != "Efforts" AND !statut
> GROUP BY file.folder AS "Dossier"
> ```

> [!Box]- Tous les efforts groupés par statut
> ```dataview
> TABLE rows.file.link AS "Effort", rows.rank AS "Rank", rows.projet AS "Projet"
> FROM "Efforts" AND -"Efforts/Explorations personnelles"
> WHERE file.name != "Efforts"
> GROUP BY choice(statut, statut, file.folder) AS "Statut"
> SORT Statut ASC
> ```
