---
type: agent-config
statut: evergreen
---
# Tags et maps de rattachement

## Tags

Chaque note d'analyse porte le tag `analyse`, plus 3 à 8 tags thématiques **pris dans la liste existante** du vault. N'en créer un nouveau que si aucun ne convient, sous une racine existante (par exemple `emotions/…`, `devperso/…`).

Tags existants les plus utiles :

- **Émotions** : `emotions`, `emotions/honte`, `emotions/peur`, `emotions/colere`, `emotions/culpabilite`
- **Développement personnel** : `devperso`, `devperso/changement`, `devperso/desidentification`, `devperso/blessures`, `devperso/resistance`, `sabotage`, `dependance`, `estimedesoi`, `identite`
- **Ennéagramme** : `enneagramme`, `enneagramme/typeN` (1 à 9), `enneagramme/integration`, `enneagramme/desintegration`, `enneagramme/armure`, `enneagramme/passion`, `enneagramme/5a`
- **Stades et intégral** : `spiraledynamique`, `stades/kegan`, `stades/edt`, `integral`, `integral/aqal`, `integral/ombre`, `integral/pratique`
- **Relation** : `relation`, `couple`, `couple/desir`, `couple/vulnerabilite`, `lovecoaching`
- **AT et CNV** : `at`, `at/jeux`, `at/karpman`, `at/rebellion`, `cnv`, `cnv/besoins`, `cnv/empathie`
- **Corps et santé** : `sante`, `guerison`, `hypnose`
- **Accompagnement** : `coaching`, `therapie`
- **Organisations** : `agile`, `agile/management`, `leadership`, `systemique`
- **Business** : `business`, `business/marketing`, `productivite`
- **Pensée** : `penseeplate`, `evolution`, `communs`

## Maps (propriété `up`)

Toujours `[[Analyses]]`, plus la ou les maps thématiques (deux au maximum) parmi celles de `Atlas/Maps/` :

Enneagramme · Spirale Dynamique · Integral · Développement vertical · Pensée plate et complexité · Coaching · CNV · Analyse transactionnelle · Jeux Psychologiques · Approches thérapeutiques · Hypnose · Love coaching (formation) · Développement personnel · Honte, culpabilité et colère · Blessures de l'âme · Couple · Pratique de vie intégrale · Productivité et loi du temps · Santé et alimentation · SoloPreneur MAP · Agilité · Transfo agile · Communautés et communs · Prompting et IA

Vérifier dans `Atlas/Maps/` que la map existe avant de l'utiliser (le nom de fichier fait foi).
