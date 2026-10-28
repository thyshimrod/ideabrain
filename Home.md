---
obsidianUIMode: preview
type: map
---
![[dragonmiddle.png]]

> [!quote]- Ce que j'ai envie de faire
> - Continuer à **apprendre** comment fonctionnent le monde et les **relations humaines**, pour accompagner les autres et grandir moi-même.
> - **Théoriser** pour expliquer le monde et l'aider à changer.
> - **Transmettre** (articles, livres, vidéos, conférences) pour que les gens grandissent, trouvent de l'espoir et voient le monde autrement.
> - Trouver **ma place** et **vivre de cette activité** : Integral Pathways et Couple intégral aujourd'hui, un lieu ou des séminaires demain.

> [!info]- Qui je suis
> - Ennéagramme involutif : 7, aile 2, mineur 4 · MBTI : ESFJ (Consul)
> - Valeurs : profondeur, simplicité (efficacité), créativité, autonomie, apprentissage
> - Besoins à nourrir : connexion, contribution, faire grandir, réalisation, authenticité, profondeur
> - Top talents : idéation, intellectualisme, studieux, individualisation, input, activateur, stratégique, positivité, connexion, arrangeur

---

> [!Training]+ # 🎯 Projets actifs
> > *What can you work on?*
>
> | Projet | Pilotage | Prochaine action |
> |---|---|---|
> | **Integral Pathways** | [[Integral Pathways]] · [[202607310916 reprise stratégie]] | Trancher coaching ou app (6 mois) |
> | **Couple intégral** | [[Couple intégral]] · [[Camp 1]] | Formaliser l'offre de coaching |
> | **Livre 2 — Remise en jeu** | [[202610121000 main propre]] · [[202610120930 revue livre 2]] | Sources, langue et lieu de publication |
> | **Publications** | [[Publications]] · [[follow substack]] | Publier les articles prêts |
>
> > [!Box]+ ### 🔥 On / ♻️ Ongoing
> > ```dataview
> > TABLE WITHOUT ID file.link AS "Effort", choice(statut, statut, file.folder) AS "Statut", projet AS "Projet", rank AS "Rank"
> > FROM "Efforts" OR "Brojects"
> > WHERE statut = "on" OR statut = "ongoing" OR file.folder = "Efforts/On" OR file.folder = "Efforts/Ongoing"
> > SORT number(rank) DESC
> > ```
>
> > [!Box]- ### 〰️ Simmering / 💤 Sleeping
> > ```dataview
> > TABLE WITHOUT ID file.link AS "Effort", choice(statut, statut, file.folder) AS "Statut", rank AS "Rank"
> > FROM "Efforts"
> > WHERE statut = "simmering" OR statut = "sleeping" OR file.folder = "Efforts/Sleeping"
> > SORT number(rank) DESC
> > ```

> [!Training]+ # ✍️ Contenus en cours
> > [!Box]+ ### En cours (modifiés récemment)
> > ```dataview
> > TABLE WITHOUT ID file.link AS "Contenu", projet AS "Projet", statut AS "Statut"
> > FROM "Brojects" OR "Efforts"
> > WHERE (type = "article" OR type = "contenu" OR type = "chapitre") AND contains(list("brouillon", "relecture"), statut) AND reference = true
> > SORT file.mtime DESC
> > LIMIT 10
> > ```
>
> > [!Box]- ### Prêts à publier
> > ```dataview
> > TABLE WITHOUT ID file.link AS "Article", serie AS "Série", langue AS "Langue"
> > FROM "Brojects"
> > WHERE type = "article" AND statut = "final" AND reference = true
> > SORT serie ASC
> > ```
>
> > [!Box]- ### Modifié récemment dans Brojects
> > ```dataview
> > TABLE WITHOUT ID file.link AS "Fichier", dateformat(file.mtime, "yyyy-MM-dd") AS "Modifié"
> > FROM "Brojects"
> > SORT file.mtime DESC
> > LIMIT 10
> > ```

> [!Box]+ # 📥 Inbox à traiter
> > ```dataview
> > TABLE WITHOUT ID file.link AS "Note", dateformat(file.ctime, "yyyy-MM-dd") AS "Créée"
> > FROM "+"
> > SORT file.ctime ASC
> > ```
> Objectif : inbox vide à chaque revue hebdo (modèle : [[Template, Revue hebdo]]).

---

> [!Map]- # 🗺️ Atlas
> > *Where would you like to go?*
> ![[dragon.png|300]]
>
> **Comprendre** — [[Enneagramme]] · [[Spirale Dynamique]] · [[Integral]] · [[Développement vertical]] · [[Pensée plate et complexité]]
> **Accompagner** — [[Coaching]] · [[CNV]] · [[Analyse transactionnelle]] · [[Approches thérapeutiques]] · [[Atlas/Maps/Hypnose|Hypnose]] · [[Love coaching (formation)|Love coaching]]
> **Grandir et vivre** — [[Développement personnel]] · [[Honte, culpabilité et colère]] · [[Blessures de l'âme]] · [[Couple]] · [[Pratique de vie intégrale]] · [[Productivité et loi du temps]] · [[Santé et alimentation]] · [[Moi - biographie et introspection|Moi]] · [[Citations]]
> **Créer** — [[SoloPreneur MAP]] · [[Publications]] · [[Contenus]] · [[Prompting et IA]] · [[Agilité|Agilité et organisations]] · [[Communautés et communs]]
> **Méta** — [[ZKN]] · [[Efforts]] · [[Exploration]] · [[Analyses]]

> [!Calendar]- # 📅 Calendar
> > *What's on your mind?*
>
> - Revue de la semaine : Periodic Notes → « Open weekly note » (modèle [[Template, Revue hebdo]])
> - Logs vivants : [[Thoughts logs]] · [[Psy Log]] · [[Celebration & Victories]]
> - Reprises IA courantes : [[202607310916 reprise stratégie]] (Integral Pathways) · [[202610091039 reprise]] (Livre 2) · [[prompt reprise v4]] (guide)
> - Archives : [[Change Log]] · [[Keto Log]] · [[ZoimmeisdessProject Log]]

![[pale-blue-dot-banner.jpg]]
