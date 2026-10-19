---
up:
  - "[[Efforts]]"
type: map
statut: evergreen
---
> [!Map]+ # instaVideo
> Mes idées de vidéos courtes pour Instagram (dossier `Efforts/instavideos` et notes de type instaVideo), classées par priorité.
> **Map parente :** [[Efforts]] · **Maps voisines :** [[Videos]]

> ```dataview
> TABLE rank
> FROM "Efforts"
> WHERE type = [[instaVideo]] OR file.folder = "Efforts/instavideos"
> SORT rank DESC, file.name ASC
> ```
