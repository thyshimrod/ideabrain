---
up:
  - "[[Home]]"
type: map
statut: evergreen
tags:
  - business
---
> [!Map]+ # Publications
> Ce qui est publié ou vendu : uniquement les **versions finales**. Les articles sont publiés sur le Substack anglais.
> **Maps voisines :** [[Integral Pathways]] · [[Articles à écrire]] · [[SoloPreneur MAP]]

> [!info]- Les propriétés qui alimentent cette page
> - `version: finale` : la version publiée (ou, pour un livre en cours, la version de référence). `version: travail` : une version qui a servi à produire la finale (brouillons, v2, v3, versions Gemini ou GPT, traductions françaises, notes Substack).
> - `publie: true` : publié ; `plateforme: substack-en` pour les articles.
> - `a_verifier` : version finale en français dont la version anglaise publiée n'a pas été retrouvée dans le vault.
> - Les éléments d'un livre (4e de couverture, présentation de l'auteur, fiche Amazon) ont leur propre type et une propriété `livre` qui pointe vers le livre.

## Livres et produits
```dataview
TABLE WITHOUT ID file.link AS "Œuvre", oeuvre AS "Titre", type AS "Type", langue AS "Langue", choice(publie, "publié", "en cours") AS "État"
FROM "Brojects"
WHERE version = "finale" AND (type = "livre" OR type = "produit")
SORT projet ASC, langue ASC
```
- *Éveil 7* (livre sur le type 7) : publié par chapitres, voir [[Eveil 7]].

## Éléments des livres
```dataview
TABLE WITHOUT ID file.link AS "Élément", type AS "Type", livre AS "Livre", langue AS "Langue"
FROM "Brojects"
WHERE version = "finale" AND (type = "quatrieme-couverture" OR type = "presentation-auteur" OR type = "fiche-amazon")
SORT livre ASC, type ASC
```

## Articles publiés, par série
```dataview
TABLE WITHOUT ID rows.file.link AS "Article", rows.oeuvre AS "Titre", rows.langue AS "Langue"
FROM "Brojects"
WHERE type = "article" AND version = "finale"
GROUP BY serie AS "Série"
SORT serie ASC
```

> [!warning]- À vérifier : finales en français sans version anglaise dans le vault
> ```dataview
> TABLE WITHOUT ID file.link AS "Article", serie AS "Série"
> FROM "Brojects"
> WHERE version = "finale" AND a_verifier
> ```

## Livres blancs (Reacteev)
```dataview
LIST FROM "Brojects/reacteev"
WHERE version = "finale"
```

> [!note]- Comment ajouter une œuvre
> Sur la version publiée : `type: article`, `serie`, `oeuvre`, `langue`, `version: finale`, `publie: true`, `plateforme: substack-en`, `reference: true`. Sur les versions qui ont servi à la produire : `version: travail`. Modèle : [[Template, Contenu]].
