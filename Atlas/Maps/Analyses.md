---
up:
  - "[[Home]]"
type: map
statut: evergreen
aliases:
  - Analyses intégrales
tags:
  - analyse
---
> [!Map]+ # Analyses
> Les idées déposées dans `Atlas/Analyse/` et leur analyse par l'agent : ce que la piste ouvre, les explorateurs voisins, les pistes de travail et de contenu. L'agent passe à 14 h 50 et 21 h 50.
> **Instructions de l'agent :** [[00 - Instructions agent]] · **Maps voisines :** [[Integral]] · [[Publications]] · [[SoloPreneur MAP]]

## Idées en attente
```dataview
TABLE WITHOUT ID file.link AS "Idée", analyse AS "État", dateformat(file.ctime, "yyyy-MM-dd") AS "Déposée"
FROM "Atlas/Analyse"
WHERE file.folder = "Atlas/Analyse" AND analyse != "faite"
SORT file.ctime ASC
```

## Analyses
```dataview
TABLE WITHOUT ID file.link AS "Analyse", sujet AS "Sujet", potentiel AS "Potentiel", preuve AS "Preuve", contenus AS "Contenus", date AS "Date"
FROM "Atlas/Analyse/Analyses"
WHERE type = "analyse"
SORT date DESC
```

## Par thème
```dataview
TABLE WITHOUT ID rows.file.link AS "Analyses"
FROM "Atlas/Analyse/Analyses"
WHERE type = "analyse"
FLATTEN file.tags AS tag
WHERE tag != "#analyse"
GROUP BY tag
SORT tag ASC
```

## Pistes à fort potentiel
```dataview
TABLE WITHOUT ID file.link AS "Analyse", sujet AS "Sujet", potentiel AS "Potentiel", contenus AS "Contenus"
FROM "Atlas/Analyse/Analyses"
WHERE type = "analyse" AND (potentiel >= 4 OR pertinence >= 4)
SORT potentiel DESC
```
