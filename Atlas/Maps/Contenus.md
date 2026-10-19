---
up:
  - "[[Home]]"
type: map
statut: evergreen
tags:
  - business
---
> [!Map]+ # Contenus
> Le backlog unique de mes idées de contenus (vidéos, reels, articles, posts) et ce qui est en cours. Une idée = une note `type: contenu` créée avec [[Template, Contenu]].
> **Maps voisines :** [[Publications]] · [[SoloPreneur MAP]] · [[Efforts]]

## En cours de rédaction
```dataview
TABLE WITHOUT ID file.link AS "Contenu", format AS "Format", projet AS "Projet", statut AS "Statut"
FROM "Efforts" OR "Brojects"
WHERE type = "contenu" AND contains(list("brouillon", "relecture", "pret", "planifie"), statut)
SORT file.mtime DESC
```

## Backlog d'idées
```dataview
TABLE WITHOUT ID file.link AS "Idée", format AS "Format", plateforme AS "Plateforme", rank AS "Rank"
FROM "Efforts" OR "Brojects" OR "+"
WHERE type = "contenu" AND statut = "idee"
SORT rank DESC, file.name ASC
```

## Séries d'articles
Voir [[Publications]] (articles par série, publiés, prêts à publier).

> [!note]- Statuts d'un contenu
> idee → brouillon → relecture → pret → planifie → publie
