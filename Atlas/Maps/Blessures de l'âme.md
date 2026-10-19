---
up:
  - "[[Développement personnel]]"
type: map
statut: evergreen
tags:
  - devperso/blessures
---
> [!Map]+ # Blessures de l'âme
> Les cinq blessures de Lise Bourbeau (rejet, abandon, humiliation, trahison, injustice) et les masques qu'elles fabriquent, le conte *Arissiel* comme support d'introspection, et mes applications en accompagnement.
> **Sous-maps :** — · **Maps voisines :** [[Développement personnel]] · [[Honte, culpabilité et colère]] · [[Approches thérapeutiques]] · [[Santé et alimentation]]

## Théorie
- [[202309271311 blessure de l'ame|Les 5 blessures de l'âme]] — blessures, masques et corps (rejet/fuyant, abandon/dépendant, humiliation/masochiste, trahison/contrôlant, injustice/rigide)
- [[202410161446 culpabilité, honte, actions|Culpabilité, honte et compulsions]] — *Stop au contrôle* : la compulsion concrétise une honte en amont

## Arissiel
- [[202506292139 Arissiel Questions|Arissiel, les questions]] — hub du conte et de ses questionnaires
- [[202506292141 Arissiel questions 1 la surprise|1. La surprise]] — sa propre mort, les petites fins de la vie
- [[202506292141 Arissiel questions 2 La rencontre avec Mishael|2. La rencontre avec Mishael]] — qui ai-je blessé, avec quelles conséquences
- [[202506292141 Arissiel questions 3 la rencontre avec les parents|3. La rencontre avec les parents]] — ce que je n'aime pas chez mes parents et que je reproduis
- [[202506292141 Arissiel questions 4 les deux enfants|4. Les deux enfants]] — être responsable vs se sentir coupable
- [[202506292141 Arissiel questions 5 l'annonce de l'accident|5. L'annonce de l'accident]] — à qui j'en veux sans l'avoir dit

## Applications
- [[202508092153 poids choix|Le poids comme choix de survie]] — un corps « imparfait » comme stratégie inconsciente
- [[202508251541 Honte - Humiliation - manifestation physique|Honte, humiliation et corps]] — la blessure d'humiliation et la manifestation de la honte
- [[202305120918 stimulus pour l'autre|Être un stimulus pour l'autre]] — l'autre réveille nos blessures, sans en être responsable
- [[202408182207 dev perso, exigence à la perfection|Exigence de perfection]] — l'entrée en dev perso par la fracture
- [[202411112235 template pardon veritable|Template du pardon véritable]] — guérir la blessure par le pardon
- [[Explorer CNV - blessure de l'autre|Explorer CNV et blessure de l'autre]] — exploration en cours

## Mes contenus
- [[Vivre avec les autres|Vivre avec les autres]] — l'injustice ressentie quand on change
> ```dataview
> LIST FROM "Brojects" OR "Efforts" OR "Atlas/Projects"
> WHERE (type = "article" OR type = "contenu" OR type = "livre") AND contains(file.tags, "#devperso/blessures")
> ```

> [!Box]- Notes taguées pas encore listées ici
> ```dataview
> TABLE WITHOUT ID file.link AS "Note", file.folder AS "Dossier"
> FROM #devperso/blessures AND -"Atlas/Maps" AND -"Atlas/prompting"
> WHERE !contains(this.file.outlinks, file.link)
> SORT file.name DESC
> ```
