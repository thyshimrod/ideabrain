---
up:
  - "[[Home]]"
type: map
statut: evergreen
tags:
  - spiraledynamique
---
> [!Map]+ # Spirale Dynamique
> La Spirale Dynamique (Graves, Beck, Cowan) : les niveaux de valeurs, leurs frictions et leur intégration. Je l'utilise pour comprendre les personnes et les organisations que j'accompagne, et pour mon propre chemin d'intégration.
> **Sous-maps :** [[Enneagramme x Spirale Dynamique]] · **Maps voisines :** [[Integral]] · [[Développement vertical]] · [[Agilité]] · [[Communautés et communs]]

## Théorie
- [[202405271357 prez spirale dynamique|Présentation de la Spirale Dynamique]] — équilibre et tensions entre vision du monde et environnement
- [[202405271407 Spirale dynamique vue synthetique|Vue synthétique]] — chaque niveau, de beige à turquoise, avec sa part de population
- [[Une histoire de Tout]] — Wilber : la conscience de second palier
- [[Explorer SD as a map|Explorer la SD comme une carte]] — chacun porte toutes les couleurs selon ses conditions de vie

## Les niveaux
| Couleur | Intégration / réintégration | Notes et explorations |
|---|---|---|
| Violet | [[202512012259 protocole réintegration violet\|Protocole de réintégration violet]] | [[202407261043 causalité simple, animisme\|Causalité simple, animisme]] |
| Rouge | [[202512012250 protocole intégration rouge\|Protocole d'intégration rouge]] | [[202507222209 exploration honte SD rouge a bleu\|La honte, du rouge au bleu]] |
| Bleu | [[202512012300 protocole réintégration bleu orienté 7\|Protocole bleu (orienté type 7)]] · [[202602061738 protocole réintégration bleu générique\|Protocole bleu générique]] | |
| Orange | [[202512012255 protocole intégration orange\|Protocole d'intégration orange]] | [[SD orange toxique comment en sortir\|Orange toxique : comment en sortir]] (exploration à mener) |
| Vert | [[202512012256 protocole intégration vert\|Protocole d'intégration vert]] | [[202207300410 HT création communauté verte\|Création d'une communauté verte]] · [[SD vert toxique comment en sortir\|Vert toxique : comment en sortir]] (exploration à mener) |
| Jaune | [[202512012256 protocole intégration jaune\|Protocole d'intégration jaune]] | [[202512222110 evolution depuis le jaune perso\|Évoluer depuis le jaune]] — vers les stades supérieurs de l'EDT |

## Dynamiques et intégration
- [[202406011545 Faire en SD|Faire, selon chaque couleur]] — ce que « faire » veut dire du bleu au jaune
- [[202408142329 SD Friction entre zones|Friction entre zones]] — les niveaux du premier palier sont antagonistes
- [[202408161749 SD émergence et direction|Émergence et direction]] — chaque méta-groupe a son propre niveau d'existence
- [[202512012239 SD intégration, blocs rejets|Intégration des blocs rejetés]] — sommaire des protocoles
- [[202512012230 intégration des parts des niveaux de SD rejetés, ou non intégrés|Parts rejetées ou non intégrées]] — les niveaux sont holoniques
- [[202512012240 Traitement par Ken Wilber shadow of each level|L'ombre de chaque niveau selon Wilber]]
- [[Explorer SD intégration et douceur|Intégration et douceur]] — sortir du rejet entre niveaux
- [[202507222143 release ancien conditionnement|Release de l'ancien conditionnement]] — chaque niveau contient le précédent

## SD en organisation
- [[202404151531 posture de leader selon SD|Posture de leader selon la SD]] — l'intention avant la posture
- [[202404151507 énergie et leadership|Énergie et leadership]] — passer la main quand l'énergie baisse
- [[202407021153 gwen support|Coach vert-orange face aux enjeux climat]] — réponse générée par ChatGPT
- [[202406101152 Elements_de_transition_culture|Éléments de transition de culture]] — de l'orange au vert
- [[202406121224 SDDifference_entreprise_niveau_orange_et_vert|Entreprise orange et entreprise verte]] — vision, valeurs, organisation
- [[202408151403 SD ne pas essayer de faire évoluer les groupes|Ne pas essayer de faire évoluer les groupes]] — le piège de croire sa couleur meilleure
- [[Explorer SD quantité individu donne quantité map orgha|Répartition des couleurs dans une organisation]] — exploration
- [[dessiner son entreprise|Dessiner son entreprise]] — questionnaire pour identifier les couleurs majeures
- [[carte mémo SD entreprise|Carte mémo SD en entreprise]]
- [[conf sd quizz entreprise|Quiz SD entreprise]] — affirmations par couleur

## Croisements
- [[202408161803 SD et CNV|SD et CNV]] — les besoins propres à chaque niveau
- [[202407292105 SD et ennéagramme|SD et ennéagramme]] — couleur de base et couleur haute par type
- [[202407262124 explorer SD + ennea - resistance changement|Résistance au changement selon type et couleur]] — exploration
- [[Enneagramme x Spirale Dynamique]] — chaque type selon les couleurs
- [[Integral]] — le cadre AQAL de Ken Wilber

## Mes contenus
- [[conf causalité simple v2|Conférence : quitter la causalité simpliste (v2)]] — version de référence
- [[conf causalité simple|Conférence : quitter la causalité simpliste (v1)]]
- [[202506101153 MOA conf SD|MOA conférence SD]] — quiz, listes de questions, carte mémo
- [[Ne pas changer les gens dans une orga SD|Ne pas changer les gens dans une orga]] — effort en sommeil

> ```dataview
> LIST FROM "Brojects" OR "Efforts" OR "Atlas/Projects"
> WHERE (type = "article" OR type = "contenu" OR type = "livre") AND contains(file.tags, "#spiraledynamique")
> ```

> [!Box]- Notes taguées pas encore listées ici
> ```dataview
> TABLE WITHOUT ID
> (regexreplace(file.name, "(\\d{4})\\d{4}\\d{4}.*", "$1")) as "Année",
>     choice(contains(file.path, "Atlas/Notes/Ideas"),
>         "📚 " + file.link,
>     choice(contains(file.path, "Atlas/Notes/BooksNotes"),
>         "📓 " + file.link,
>         file.link)) as "Sources",
>     regexreplace(file.path, ".*/([^/]+)/[^/]+$", "$1") as "Parent Folder"
> FROM "Atlas/Notes"
> WHERE contains(file.tags, "#spiraledynamique") AND !contains(this.file.outlinks, file.link)
> SORT file.name DESC
> LIMIT 77
> ```
