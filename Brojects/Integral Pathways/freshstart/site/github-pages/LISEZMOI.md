# Publier le site sur GitHub Pages

Contenu du dossier :

- `index.html` : la page complète.
- `assets/` : la photo et les couvertures des livres.

## Mise en ligne

1. Sur GitHub, créer un dépôt public. Pour une adresse du type `https://<ton-identifiant>.github.io/`, nommer le dépôt exactement `<ton-identifiant>.github.io`. Avec un autre nom (par exemple `site`), l'adresse sera `https://<ton-identifiant>.github.io/site/`.
2. Déposer `index.html` et le dossier `assets` à la racine du dépôt (bouton « Add file », puis « Upload files », ou par git).
3. Dans le dépôt : Settings, puis Pages. Source : « Deploy from a branch », branche `main`, dossier `/ (root)`. Enregistrer.
4. Attendre une à deux minutes, puis ouvrir l'adresse indiquée sur la même page.

## Plus tard

- **Remise en jeu** : remplacer « Sortie le 21 novembre 2026 » par le lien Amazon, dans la section des livres.
- **Nom de domaine** : dans Settings, puis Pages, champ « Custom domain », et chez le registraire un enregistrement DNS vers GitHub (la page Pages affiche les valeurs à utiliser).
- **Photo** : une version plus grande (au moins 600 pixels de large) donnera une image plus nette sur les écrans haute définition. Il suffit de remplacer `assets/pascal-ogil.jpg` en gardant le même nom.

## Contact

L'adresse mail n'apparaît pas en clair dans le code : elle est assemblée dans le navigateur au chargement de la page, ce qui limite sa collecte par les robots.
