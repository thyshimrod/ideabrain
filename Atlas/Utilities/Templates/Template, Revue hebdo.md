---
type: revue
periode: hebdo
created: {{date:YYYY-MM-DD}}
tags:
---
# Revue de la semaine {{date:gggg-[W]ww}}

## 1. Vider l'inbox
```dataview
LIST FROM "+"
SORT file.ctime ASC
```
- [ ] Chaque note de `+` est rangée, transformée ou supprimée

## 2. Efforts
```dataview
TABLE WITHOUT ID file.link AS "Effort", statut AS "Statut", projet AS "Projet"
FROM "Efforts"
WHERE statut = "on" OR statut = "ongoing"
SORT rank DESC
```
- Ce qui a avancé :
- Ce qui bloque :
- Statuts à changer (on / ongoing / simmering / sleeping / done) :

## 3. Contenus
- Publié cette semaine :
- À publier la semaine prochaine :

## 4. Chiffres
| Canal | Abonnés | Payants | Ventes |
|---|---|---|---|
| Substack EN | | | |
| Substack FR | | | |
| Amazon (livres) | | | |
| Gumroad (guide) | | | |
| Calendly (séances) | | | |

## 5. Célébrations et gratitudes
- 

## 6. Corps
- Sport :
- Énergie :

## 7. Les 3 priorités de la semaine prochaine
1. 
2. 
3. 
