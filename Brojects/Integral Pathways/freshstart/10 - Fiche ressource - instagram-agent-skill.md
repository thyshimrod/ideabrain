---
type: ressource
projet: integral-pathways
perimetre: freshstart
statut: analyse
date: 2026-10-27
source: https://github.com/Jakeschincariol/instagram-agent-skill
up:
  - "[[07 - Ressources externes]]"
tags:
  - business/marketing
  - instagram
  - methode
---
# Fiche ressource : instagram-agent-skill (Jake Schincariol)

Dépôt GitHub, licence MIT, version 1.0. Treize « skills » pour Claude qui écrivent du contenu Instagram : Reels, légendes, carrousels, stories, profil, planning de la semaine, commentaires, réponses, DM, recyclage d'un contenu long, audit, recherche de ce qui marche dans une niche, et un « humaniseur ». Cinq petits scripts Python les accompagnent (score de hook, minutage du script, prévisualisation de la légende, détection de texte IA, classement des vidéos virales). Rien n'est publié automatiquement : tout se termine par un bloc à copier.

Analyse faite le 27/10/2026 à partir de la lecture complète des fichiers et d'un test des scripts sur un texte en français.

## 1. Verdict en une phrase

Un outil sérieux et plutôt honnête, écrit pour des entrepreneurs anglophones qui vendent des résultats chiffrés. La mécanique Instagram qu'il contient est précieuse ; la grammaire des hooks et les scripts de score ne sont pas transposables tels quels à mon contenu, et ne fonctionnent pas en français.

## 2. Ce qui est solide (la mécanique)

**L'honnêteté de la méthode.** L'auteur a testé son propre score de hook sur 74 hooks réels. Résultat publié : l'outil repère bien les mauvais hooks, mais il ne sait pas distinguer un bon hook d'un très bon (AUC 0,56, presque le hasard). Il en conclut qu'il faut éliminer les faibles puis se fier à ses propres courbes de rétention. C'est rare, et ça rend le reste crédible.

**Les principes de distribution.**
- Une vidéo se décide dans les deux premières secondes et se garde dans les cinq suivantes.
- Pas d'introduction : la vidéo commence à la phrase qu'on atteindrait normalement à la sixième seconde.
- Le texte à l'écran est un script séparé du texte parlé, six mots maximum par carton, lu avant d'être entendu, souvent sans le son.
- Changer de plan à chaque idée ; un plan fixe de huit secondes est l'endroit où les gens partent.
- Une idée par Reel. Une seule demande à la fin.
- La boucle : reprendre un mot du début à la fin pour que la seconde lecture se fasse naturellement.

**Les bonnes mesures.** Les vues brutes ne disent presque rien, parce qu'elles dépendent du nombre d'abonnés. Les indicateurs utiles : le multiple par rapport à la médiane du compte, la part de portée hors abonnés, la rétention à 3 secondes (la note du hook), et surtout les **partages rapportés à la portée** (un envoi, c'est quelqu'un qui engage son nom). Une distinction très utile : une vidéo vue sans abonnements qui suivent est un problème de profil, une vidéo non vue est un problème de hook.

**Les faits de plateforme.** Hashtags limités à cinq par publication depuis le 18 décembre 2025, et devenus des étiquettes plutôt qu'un levier de portée. La recherche Instagram lit le texte de la légende : les mots que les gens tapent doivent y être, en phrase normale. Seuls les 125 premiers caractères de la légende sont visibles avant « plus ».

**Le rôle des formats.** Les Reels touchent les gens qui ne vous suivent pas. Les carrousels approfondissent avec ceux qui vous suivent (une idée en étapes, à relire, la diapositive récapitulative est celle qu'on capture et qu'on envoie). Les stories servent à ceux qui sont déjà là et sont le seul endroit où un geste devient une conversation.

**L'éthique de la relation.** Les règles sur les commentaires, les réponses et les messages privés sont proches de ma posture : jamais de prospection à froid, jamais de lien ou de pitch dans un commentaire, répondre en public à la vraie question, ne s'adresser en privé qu'à quelqu'un qui a fait le premier pas. La question posée en commentaire par beaucoup de gens devient une vidéo. La boîte à questions des stories récolte les mots exacts du public.

**Le profil comme écran de décision.** On y arrive depuis une seule vidéo, et il a trois secondes pour répondre à « y a-t-il plus de ça ici, et est-ce pour moi ? ». Trois publications épinglées avec trois rôles (la meilleure preuve, l'offre expliquée, la présentation de la personne). Un seul lien, qui tient la promesse de la bio.

**Le recyclage.** Un contenu long contient quatre à six publications. On extrait (affirmations, histoires, mécanismes, erreurs, phrases citables), on ne résume pas, et chaque publication tient seule.

**Le fichier de voix.** Un fichier que tous les skills lisent : comment je parle, les mots que je n'emploierais jamais, mes positions, ce qui est hors limites, les preuves que je peux citer. La rubrique « mes positions » (trois à cinq choses que je crois et qu'une partie de mon public ne croit pas) est la plus utile.

## 3. Ce qui ne me correspond pas (l'enveloppe)

**Une grammaire de hooks calibrée pour la preuve chiffrée.** Les 26 formules (« ce que cette erreur m'a coûté », « avant 5 heures, maintenant 20 minutes », « vole ce modèle ») supposent un contenu de résultat mesurable : argent, temps gagné, croissance. Le score de hook pénalise l'absence de chiffres et de noms. Une scène de couple n'a pas de chiffre ; sa force est la reconnaissance. Le système classerait mes meilleurs hooks comme faibles.

**Un rythme de production calibré pour un créateur à temps plein.** Quatre à cinq publications par semaine, des stories tous les jours, vingt minutes d'engagement quotidien. Le plan suppose un type de proposition hebdomadaire (preuve, enseignement, opinion, histoire, offre) qui reste utile comme grille, mais pas comme cadence.

**Le mot-clé en commentaire comme entonnoir.** « Commente CONTRAT et je t'envoie le modèle » est efficace pour un livrable. Pour un sujet intime comme le couple, demander à quelqu'un de signaler publiquement qu'il est concerné est une autre affaire.

**Les scripts ne fonctionnent pas en français.** Testé sur une phrase de scène (« Tu as posé un livre sur sa table de chevet. ») : score de hook 30, faible, avec « personne dans la pièce » (le « tu » n'est pas reconnu) et « rien de concret ». Le détecteur de texte IA attribue 27,6 sur 100 à un court texte français écrit naturellement, parce qu'il cherche des contractions anglaises et des pronoms anglais. Les listes de mots creux, la vitesse de lecture et les motifs reconnus sont tous en anglais.

## 4. La traduction dans ma manière de faire

| Mécanique | Ce qu'elle devient pour moi |
|---|---|
| Hook dans les deux premières secondes | La réplique de la scène, dite à la caméra ou à l'écran : « Laisse, je vais le faire. » La reconnaissance remplace le chiffre. |
| Spécificité | Le concret d'une scène (un objet, une heure, une phrase exacte) plutôt qu'un montant. La table de chevet, 23 h, le planning sur le frigo. |
| Une idée par Reel | Une scène, un mécanisme, une question laissée ouverte. |
| La boucle | La question finale qui renvoie à la réplique du début. |
| Texte à l'écran séparé | La réplique en carton dès la première image, le décryptage en sous-titres. |
| Partages comme mesure | Le bon signe : quelqu'un envoie la vidéo à son conjoint ou à un ami. C'est exactement ce que fait la reconnaissance d'une scène. |
| Carrousel en étapes | Le décryptage d'une scène en cinq ou six diapositives : la scène, le jeu, ce que chacun y gagne, la question évitée, la sortie possible. La dernière est la carte qu'on garde. |
| Boîte à questions des stories | Récolter les phrases réelles des couples (« ce qu'il dit toujours quand… »). Elles deviennent les scènes suivantes. |
| Commentaires substantiels | Le même principe que pour Substack : trois commentaires réels par semaine sous des comptes de la même audience, jamais de lien. |
| Recyclage | Le stock existant (articles, deux livres, scènes, analyses de l'agent) se découpe en dizaines de vidéos. |
| Profil comme écran de décision | Une bio qui nomme la personne de la zone des six ans, trois épingles (une scène forte, l'offre, qui je suis), un seul lien vers l'appel. |
| Fichier de voix | À écrire en français, à partir de la charte de style et de mes positions (le travail sur soi qui déstabilise le couple, la compatibilité comme illusion, le couple qui fonctionne trop bien, etc.). |

## 5. Usage possible

**À reprendre directement** : les principes des Reels et des carrousels, les mesures de l'audit, les règles de commentaires, réponses et messages, la structure du profil, la méthode de recyclage, l'idée du fichier de voix.

**À adapter avant usage** : une grammaire de hooks propre à mon contenu, construite à partir de mes scènes (familles possibles : la réplique, le geste, le moment de la journée, la question que personne ne pose, l'idée reçue retournée). Le classement par multiple de médiane, appliqué à une dizaine de comptes francophones de la même audience.

**À laisser** : les scripts de score en l'état, le mot-clé public comme entonnoir principal, la cadence quotidienne.

**Si on construit ma propre fabrique** (étape 4 du plan), ce dépôt est un bon squelette : un fichier de voix, une étape de recherche, une étape d'écriture, une étape de nettoyage, une étape d'audit. Il faudrait réécrire le contenu en français et selon ma posture, plutôt que l'installer tel quel.
