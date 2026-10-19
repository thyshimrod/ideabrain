---
up:
  - "[[Développement personnel]]"
type: map
statut: evergreen
tags:
  - emotions
---
> [!Map]+ # Honte, culpabilité et colère
> Les trois émotions que Liv Larsson (*Shame, Guilt and Anger*) lit comme des signaux au service de la vie, prolongées par mes propres explorations (injustice, domination, sabotage). Je m'en sers pour décoder ce qui se joue chez moi et chez les personnes que j'accompagne.
> **Sous-maps :** [[Colere]] · **Maps voisines :** [[CNV]] · [[Jeux Psychologiques|Analyse transactionnelle]] · [[Blessures de l'âme]]

## Cadre : Shame, Guilt and Anger (Liv Larsson)
- [[202307061431 Shame Guilty Anger|Shame, Guilt and Anger]] — des signaux mal interprétés, à ne pas rejeter
- [[Shame, Guilty, Anger - Domination ou Prise en compte des besoins|Domination ou prise en compte des besoins]] — deux systèmes de relation
- [[Shame, Guilty, Anger - Deviner le besoin|Statuer plutôt que deviner le besoin]]
- [[Shame, Guilty, Anger - Empathie|Empathie]] — ce qui se met en travers de l'empathie
- [[Shame, Guilty, Anger - Excuses|S'excuser dans une culture de partenariat]]
- [[202511270908 coercition|Coercition]] — le déni de responsabilité (exploration perso)

## Honte
- Liv Larsson
	- [[Shame, Guilty, Anger - Honte|Honte (index)]]
	- [[Shame, Guilty, Anger - Honte 1|La honte dans une culture de partenariat]]
	- [[Shame, Guilty, Anger - Honte - Le compas des besoins|Le compas de la honte]] — les stratégies pour éviter la honte
	- [[Shame, Guilty, Anger - Honte et sexe|Honte et sexe]]
- Mes explorations
	- [[202502042044 Honte - déni de sentiments|Honte et déni de sentiments]] — le sabotage pour vivre la honte
	- [[202508251541 Honte - Humiliation - manifestation physique|Honte, humiliation et manifestation physique]]
	- [[202410161446 culpabilité, honte, actions|Culpabilité, honte et actions]] — concrétiser une honte diffuse (Lise Bourbeau)
	- [[202511121436 demander des excuses est un activateur de honte|Demander des excuses active la honte]]
	- [[202412231557 Culture de la honte - émission tv|La culture de la honte à la télévision]]
	- [[202507222209 exploration honte SD rouge a bleu|La honte de rouge à bleu (SD)]]

## Culpabilité
- [[Shame, Guilty, Anger - Culpabilite|La culpabilité dans une culture de partenariat]] — Liv Larsson
- [[202502162130 chercher la culpabilité pour trouver sa culpabilité|Chercher la culpabilité pour trouver sa culpabilité]]
- [[202007302255 depression|Dépression]] — se répéter ce qu'on s'est entendu dire, la double culpabilité
- [[202007302254 puritanisme|Puritanisme]] — « ton devoir est de ne pas t'amuser »
- [[Culpabilité tromper ex + plainte|Culpabilité et plainte]] — exploration personnelle

## Colère
- [[Shame, Guilty, Anger - Colere|La colère dans une culture de partenariat]] — Liv Larsson
- [[202007312151 colère CNV|Colère en CNV]] — la colère « contre » est sans pouvoir
- [[202109141108 La colere au dessus des sentiments|La colère au-dessus des sentiments]]
- [[202404180912 colere exemple et explication|Colère : exemple et explication]]
- [[202501272212 justifier la colère|Justifier la colère]] — justifier une fois, c'est justifier toujours
- [[202501272230 colere, une des sources avoir raison|Colère : le besoin d'avoir raison]]
- [[20240424 besoin et respect|Besoin et respect]]
- [[20240423 dev perso et couple|Dev perso et couple]] — blessure et stimulus
- [[Atlas/Notes/BooksNotes/202007302255 Les professionnels de la destruction de relation|Les professionnels de la destruction de relation]]
- [[202007302240 détresse psychologique et pensées|Détresse psychologique et pensées]]

## Injustice
- [[2025012742215 injustice protocole et def|Injustice : protocole et définition]] — les besoins derrière le sentiment d'injustice

## Différenciations
- [[Shame, Guilty, Anger - Différentiations|Les différenciations]] — observation/évaluation, besoin/stratégie, demander/exiger…
- [[Shame, Guilty, Anger - Accomplir vs Créer|Accomplir vs créer]]
- [[Shame, Guilty, Anger - Appreciation vs Approbation|Appréciation vs approbation]]
- [[Shame, Guilty, Anger - Compromis vs Mouvement|Compromis vs mouvement]]
- [[Shame, Guilty, Anger - Deuil ou abandon|Faire le deuil plutôt qu'abandonner]]
- [[Shame, Guilty, Anger - Liberté de choix ou dépendance|Liberté de choix ou dépendance]]
- [[Shame, Guilty, Anger - obeir ou s auto discipliner|Obéir ou s'auto-discipliner]]

## Mes contenus
- [[202507122145 MOA Honte|MOA Honte]] — la honte, reliquat de l'ère bleue
- [[202503282215 injustice impuissance MOA|MOA Injustice et impuissance]]
- [[MOA Injustice effort|MOA Injustice et effort]]
- [[Vidéo - injustice effort|Vidéo : injustice et effort]]

> ```dataview
> LIST FROM "Brojects" OR "Efforts" OR "Atlas/Projects"
> WHERE (type = "article" OR type = "contenu" OR type = "livre") AND contains(file.tags, "#emotions")
> ```

> [!Box]- Notes taguées pas encore listées ici
> ```dataview
> TABLE WITHOUT ID file.link AS "Note", file.folder AS "Dossier"
> FROM #emotions AND -"Atlas/Maps" AND -"Atlas/prompting"
> WHERE !contains(this.file.outlinks, file.link)
> SORT file.name DESC
> ```
