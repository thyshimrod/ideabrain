---
up:
  - "[[Efforts]]"
type: map
statut: evergreen
prive: true
---
> [!Map]+ # Exploration personnelle
> Mes explorations intimes (dossier `Efforts/Explorations personnelles` et notes de type Exploration Personnelle) : peurs, pardons, releases. Page privée.
> **Map parente :** [[Efforts]] · **Maps voisines :** [[Exploration]] · [[MOA RELEASe]]

> ```dataview
> TABLE rank
> FROM "Efforts"
> WHERE file.folder = "Efforts/Explorations personnelles" OR type = [[Exploration Personnelle]] OR (type = "exploration" AND prive = true)
> SORT rank DESC, file.name ASC
> ```
