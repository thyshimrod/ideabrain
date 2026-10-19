---
up:
  - "[[Home]]"
type: map
statut: evergreen
tags:
  - business
---
> [!Map]+ # Solopreneur
> Vendre ses connaissances en solo : vision, croyances, offre, audience, marketing et exécution. Je l'utilise pour piloter mon activité d'écriture et d'accompagnement.
> **Sous-maps :** [[MOA Dan Koe]] · [[MOA authors]] · **Maps voisines :** [[Prompting et IA]] · [[Integral]] · [[Zoimmeisdess]]

## Vision
- [[991 - Zoimmeisdess Project|Projet Zoimmeisdess]] — premier projet, clos, remplacé par Integral Pathways
- [[Brojects/Integral Pathways/202601121230 de la trilogie une offre premium|Integral Pathways : de la trilogie à une offre premium]] — série Substack et offre premium
- [[Calendar/Logs/reprise/202607310916 reprise stratégie|Reprise : repositionnement stratégique]] — juillet 2026

## Identité et croyances
- [[202505201949 solo preneur croyances limitantes|Croyances limitantes du solopreneur]] — argent, valeur, effort
- [[202505201957 Mantra|Mantra]] — légitime à jouir de l'argent
- [[202503142125 who am I v5|Qui je suis (v5)]] — contexte de prompt : identité, rôles, aspirations

## Offre et produit
- [[202502301600 one pager|One pager]] — présenter mon accompagnement de particuliers
- [[202502031136 Side Hustle Checklist|Side hustle checklist]] — un processus d'apprentissage itératif
- [[Circle and Kajabi for self-paced courses|Circle ou Kajabi]] — plateformes de cours en autonomie
- [Mieux vivre avec ses émotions](https://gum.new/gum/cmal74qq4001803ld7scs9q39) — landing page
- [Quiz IA humain](https://script.google.com/macros/s/AKfycbwFrNxcpsbvMB0yVo_FhhVBGRHdaTxcUBYg7gejdU94R5pR9vkm7-dp9FY9KtA3RxdQ/exec)

## Audience et écriture
- [[The most profitable niche is you.|The most profitable niche is you]] — Dan Koe, traduit
- [[The Most Profitable Niche In The Creator Economy Right Now|The most profitable niche in the creator economy]] — Dan Koe, traduit
- [[I Trained AI To Write 30 Viral Tweets (Build An Audience Faster)|Écrire 30 tweets viraux avec l'IA]] — se faire interviewer par l'IA
- [[Learn Copywriting In 27 Minutes With AI|Le copywriting en 27 minutes avec l'IA]] — avatar client, offre Hormozi
- [How to Build Your Writing Business](https://kierandrew.notion.site/How-to-Build-Your-Writing-Business-1eae863eedb4801ca270d0b80378d241)
- [[202505272143 certains posts à faire|Posts à faire]] — idées d'articles Substack pour Éveil Vivant

## Métriques
- [[follow substack|Suivi Substack]] — abonnés, follows, trafic

## Marketing
- [[202608241737 marketing 3 pour 3|Marketing 3 pour 3]] — se positionner face au développement personnel de masse
- [[202505162125 Book - Future Proofing You Twelve Truths for Creating Opportunity, Maximizing Wealth, and Controlling your Destiny in an Uncertain... (Jay Samit)|Future Proofing You (Jay Samit)]] — 12 vérités

## Mentors
- [[MOA Dan Koe]] — le parcours de Dan Koe, jour par jour
- [[202507302210 Justin welsh retro|Rétrospective de Justin Welsh]] — 23 étapes vers 10 M$
- [[HUMAN 3.0 – A Map To Reach The Top 1%|Human 3.0]] — Dan Koe, le développement en quatre quadrants
- [[Phase 1_Genesis_Focus_List|Phase 1 Genesis]] — exploration et construction des habitudes (Luc)

## Exécution
- [[structured endeavor-checklist|Checklist d'un effort structuré]]
- [[2025052020242 pistes de travail|Pistes de travail]] — release des croyances limitantes
- [[202507062034 self agency|Self agency]] — 10 jours pour traverser la peur et la procrastination

## Génération de contenus
- [[MOA authors]] — styles d'auteurs pour les prompts
- [[Prompting et IA]] — bibliothèque de prompts
- [[202505182215 contexte du jour|Contexte du jour]] — feuille de route à recharger dans l'IA
- [[202503162243 ajustement, creation V8|Ajustement, création V8]] — Éveil Vivant v8

## Mes contenus
> ```dataview
> LIST FROM "Brojects" OR "Efforts" OR "Atlas/Projects"
> WHERE (type = "article" OR type = "contenu" OR type = "livre") AND contains(file.tags, "#business")
> ```

> [!Box]- Notes taguées pas encore listées ici
> ```dataview
> TABLE WITHOUT ID file.link AS "Note", file.folder AS "Dossier"
> FROM #business AND -"Atlas/Maps" AND -"Atlas/prompting"
> WHERE !contains(this.file.outlinks, file.link)
> SORT file.name DESC
> ```
