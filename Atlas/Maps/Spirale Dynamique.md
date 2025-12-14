---
up:
  - "[[Home]]"
tags:
  - map
  - mymaps
  - spiraledynamique
---
# Theorie
[[202405271357 prez spirale dynamique]]
[[202405271407 Spirale dynamique vue synthetique]]

# Ideation
[[202406011545 Faire en SD]]
[[202408142329 SD Friction entre zones]]
[[202408161803 SD et CNV]]
[[202512012239 SD intégration, blocs rejets]]

# Mise en pratique
[[202207300410 HT création communauté verte]]
[[202407292105 SD et ennéagramme]]
[[202404151531 posture de leader selon SD]]
[[202407021153 gwen support]]
[[202406101152 Elements_de_transition_culture]]
[[202406121224 SDDifference_entreprise_niveau_orange_et_vert]]
[[202408161749 SD émergence et direction]]

```dataview
TABLE WITHOUT ID
(regexreplace(file.name, "(\\d{4})\\d{4}\\d{4}.*", "$1")) as "Année",
    choice(contains(file.path, "Atlas/Notes/Ideas"), 
        "📚 " + file.link,
    choice(contains(file.path, "Atlas/Notes/BooksNotes"), 
        "📓 " + file.link,
        file.link)) as "Sources",
    
    regexreplace(file.path, ".*/([^/]+)/[^/]+$", "$1") as "Parent Folder"

FROM "Atlas/Notes"
WHERE contains(file.tags, "#Spirale") OR contains(file.tags,"#spirale")

SORT year desc

LIMIT 77
```
