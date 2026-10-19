---
up:
  - "[[Efforts]]"
type: map
statut: evergreen
---
> [!Map]+ # Videos
> Mes idées de vidéos longues (dossier `Efforts/Evideos` et notes de type Videos), classées par priorité.
> **Map parente :** [[Efforts]] · **Maps voisines :** [[instaVideo]]

> ```dataview
> TABLE rank
> FROM "Efforts"
> WHERE type = [[Videos]] OR file.folder = "Efforts/Evideos"
> SORT rank DESC, file.name ASC
> ```
