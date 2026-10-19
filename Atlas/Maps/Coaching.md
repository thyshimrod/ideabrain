---
up:
  - "[[Home]]"
type: map
statut: evergreen
tags:
  - coaching
---
> [!Map]+ # Coaching
> Mon métier d'accompagnant : posture, écoute, cadre de la demande et accompagnement du changement, en individuel comme en collectif. Hub vers les maps outils que je mobilise en séance.
> **Sous-maps :** voir « Maps outils » · **Maps voisines :** [[Développement personnel]] · [[Spirale Dynamique]] · [[Agilité]]

## Posture et éthique
- [[202007302305 echelle d'action du coach|Échelle d'action du coach]] — du besoin de l'autre à l'action
- [[202007302307 La bonne distance de coaching|La bonne distance]] — associé et dissocié
- [[202306202142 Posture basse|Posture basse]] — pas une posture effacée, un effet miroir
- [[202103251027 coaching vs conseil|Coaching vs conseil]] — comprendre le problème, c'est déjà vouloir le solutionner
- [[202007302237 Rester dans le présent, changement comportementale|Rester dans le présent]] — ramener la personne à ses petits pas
- [[202103240951 Bienveillance|Bienveillance]] — lisser la relation ou confronter ?
- [[202601042307 integration types - risque d'accompagnement et ethique|Risque d'accompagnement et éthique]]
- [[202601042238 integrations types - risque d'accompagnement meta d'un niveau trop eleve|Risque d'un accompagnement méta trop élevé]]

## Écoute et reformulation
- [[202007302310 écouter pleinement|Écouter pleinement]] — l'écoute des 3C
- [[202007302307 La reformulation|La reformulation]]
- [[202007312150 Type de reformulation|Types de reformulation]] — reformulation écho et autres
- [[202007302313 L'écoute du coach Bienveillance et bien intentionné|L'écoute du coach : bienveillant et bien intentionné]]
- [[202007302315 L'écoute du coach Principe 1 un esprit sain dans un corps sain|Principe 1 : un esprit sain dans un corps sain]]
- [[202007302315 L'écoute du coach Principe 2 ne pas assister|Principe 2 : ne pas assister]]
- [[202007302317 Langage universel de l'écoute inconditionnel|Langage universel de l'écoute inconditionnelle]]
- [[202007312151 Le silence|Le silence]] — laisser l'espace au coaché
- [[202007312153 Demande de reformulation|Demande de reformulation]]
- [[202103282042 parler pour etre ecouter|Parler pour être écouté]]
- [[202401021530 Feedback|Feedback]] — l'intention compte

## Cadre et demande
- [[202007312149 Procédure d'identification de la demande|Procédure d'identification de la demande]] — réel, problème, objectif
- [[202007302305 Pratique de coaching, de la negation à la volonte|De la négation à la volonté]] — sortir des formes négatives

## Accompagner le changement
### Résistances et homéostasie
- [[202311291826 confort de ne pas changer|Le confort de ne pas changer]]
- [[202206101013 homeostasie de groupe|Homéostasie de groupe]]
- [[202512162326 identite et changement|Identité et changement]] — s'accrocher à son identité
- [[202106181353 Faire plus de la meme chose|Faire plus de la même chose]] — Watzlawick
- [[202404222047 contrôle, compulsion, type7|Contrôle et compulsion]] — la tension appelle la compulsion

### Leviers
- [[202205040859 emotion correctrice|Émotion correctrice]]
- [[202408302046 posture méta, desidentification, retour au choix|Posture méta, désidentification, retour au choix]]
- [[202107071115 Desordre et estime de soi|Désordre et estime de soi]]
- [[202408232155 how to be peacier|How to be peacier]]
- [[Changement vs Transformation  Comment les distinguer et comment les accompagner de façon optimale|Changement vs transformation]] — clipping

### Phrases d'appui
- [[202404041051 Priere du changemaker|Prière du changemaker]] — sérénité, courage, sagesse
- [[202311202116 Reves Peur|Rêves et peur]] — Ellen Johnson Sirleaf
- [[202312051641 citation paulo coehlo routine|La routine est mortelle]] — Paulo Coelho

## Comprendre l'autre
- [[202407231433 personamorphisme|Personamorphisme]] — projeter ses croyances sur autrui
- [[202007302240 détresse psychologique et pensées|Détresse psychologique et pensées]] — les pensées se distordent
- [[202007302256 L'homme et le reverbère|L'homme et le réverbère]] — chercher là où c'est éclairé
- [[L’échelle d’inférence|L'échelle d'inférence]] — Argyris et Senge

## Méthodes
- [[20240305 Activez vos talents, ils peuvent changer le monde|Activez vos talents]] — la boussole plutôt que la carte
- [[202408292208 Reve du dragon - Dragon dreaming|Dragon dreaming]] — rêver, planifier, faire, célébrer
- [[202311202137 Aristote Vocation|Vocation (Ikigai)]] — talents et besoins du monde

## Collectif et leadership
- [[202007312208 Coaching d'équipe La coopération|Coaching d'équipe : la coopération]]
- [[202007312210 Les 5 dysfonctionnement d'équipe|Les 5 dysfonctionnements d'une équipe]] — Lencioni
- [[202404151531 posture de leader selon SD|Posture de leader selon la SD]]
- [[202404151507 énergie et leadership|Énergie et leadership]]

## Maps outils
- [[CNV]] — observation, sentiment, besoin, demande
- [[Jeux Psychologiques|Analyse transactionnelle]] — états du moi, jeux, triangle de Karpman
- [[Enneagramme - Accompagner chaque type]] — fiches d'accompagnement par type
- [[Atlas/Maps/Hypnose|Hypnose]] — formation SpiriVie
- [[Love coaching (formation)]] — formation SpiriVie
- [[Approches thérapeutiques]] — ACT, TCD, TCC, IFS, constellations

## Mes contenus
- [[Zoimmeisdess]] — hub du projet
- [[Video - changement  = changement des relations qui nous entourent|Vidéo : changer, c'est changer ses relations]]
- [[Video - feedback & intention|Vidéo : feedback et intention]]

> ```dataview
> LIST FROM "Brojects" OR "Efforts" OR "Atlas/Projects"
> WHERE (type = "article" OR type = "contenu" OR type = "livre") AND contains(file.tags, "#coaching")
> ```

> [!Box]- Autocoaching (journal)
> ```dataview
> LIST FROM "Calendar/Autocoaching"
> SORT file.name DESC
> ```

> [!Box]- Notes taguées pas encore listées ici
> ```dataview
> TABLE WITHOUT ID file.link AS "Note", file.folder AS "Dossier"
> FROM #coaching AND -"Atlas/Maps" AND -"Atlas/prompting"
> WHERE !contains(this.file.outlinks, file.link)
> SORT file.name DESC
> ```
