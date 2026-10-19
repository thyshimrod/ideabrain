---
up:
  - "[[Efforts]]"
type: map
statut: evergreen
---
> [!Map]+ # Exploration
> Mes explorations de fond (dossier `Efforts/Explorations` et toute note d'effort de type Exploration) : des questions ouvertes à creuser, souvent sur la Spirale Dynamique ou l'ennéagramme.
> **Map parente :** [[Efforts]] · **Maps voisines :** [[Exploration Personnelle]] · [[Spirale Dynamique]]

> ```dataview
> TABLE rank
> FROM "Efforts"
> WHERE (file.folder = "Efforts/Explorations" OR type = [[Exploration]] OR type = "exploration") AND prive != true
> SORT rank DESC, file.name ASC
> ```
