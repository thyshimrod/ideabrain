---
up:
  - "[[Home]]"
type: map
statut: evergreen
tags:
  - business
---
> [!Map]+ # Publications
> Toutes mes œuvres (articles, livres, guides), une ligne par version de référence. Les propriétés `type`, `statut`, `serie`, `langue`, `plateforme` et `reference` alimentent cette page.
> **Maps voisines :** [[SoloPreneur MAP]] · [[Couple]] · [[Pensée plate et complexité]]

## Livres et produits
```dataview
TABLE WITHOUT ID file.link AS "Œuvre", projet AS "Projet", statut AS "Statut", langue AS "Langue"
FROM "Brojects"
WHERE reference = true AND (type = "livre" OR type = "produit" OR type = "livre-blanc")
SORT projet ASC
```

## Articles par série
```dataview
TABLE WITHOUT ID rows.file.link AS "Article", rows.langue AS "Langue", rows.statut AS "Statut"
FROM "Brojects"
WHERE type = "article" AND reference = true
GROUP BY serie AS "Série"
SORT serie ASC
```

## Publiés
```dataview
TABLE WITHOUT ID file.link AS "Article", serie AS "Série", langue AS "Langue", plateforme AS "Plateforme"
FROM "Brojects"
WHERE type = "article" AND statut = "publie"
SORT serie ASC, langue ASC
```

## Prêts mais pas encore publiés
```dataview
TABLE WITHOUT ID file.link AS "Article", serie AS "Série", langue AS "Langue"
FROM "Brojects"
WHERE type = "article" AND statut = "final" AND reference = true
SORT serie ASC
```

> [!note]- Comment ajouter une œuvre
> Dans la version qui fait foi : `type: article`, `statut`, `serie`, `oeuvre`, `langue`, `reference: true`. Les autres versions gardent `reference: false` (ou pas de propriété). Modèle : [[Template, Contenu]].
