---
up:
  - "[[Home]]"
type: map
statut: evergreen
aliases:
  - PKM
tags:
  - zkn
---
> [!Map]+ # ZKN : ma méthode de prise de notes
> Comment ce vault fonctionne : la méthode de note-making, les points d'entrée, les modèles de notes et l'entretien des liens.
> **Maps voisines :** [[Ideaverse]]

## Méthode
- [[202408182155 Note Making Method|Note Making Method]] — remarquer, relier, formuler (NoMa en cinq étapes)
- [[Ideaverse Map]] — la carte d'origine de l'Ideaverse LYT

## Points d'entrée
- [[Home]] — l'accueil du vault
- [[Efforts]] — ce sur quoi je travaille

## Conventions et modèles
Les modèles sont dans `Atlas/Utilities/Templates`.
- [[Template, Map]] — une map : frontmatter `type: map`, callout d'introduction, sections, requête des notes taguées non listées
- [[Template, Contenu]] — un article ou un contenu à publier
- [[Template, Exploration]] — une question ouverte à explorer
- [[Template, Reprise]] — un prompt de reprise de discussion avec une IA
- [[Template, Properties, Effort]] — les propriétés d'un effort (`statut`, `rank`, `projet`)

## Entretien
> [!Box]- Notes orphelines (aucun lien entrant)
> ```dataview
> LIST FROM "Atlas/Notes"
> WHERE length(file.inlinks) = 0
> SORT file.ctime DESC
> LIMIT 50
> ```
