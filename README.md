# WordPress starter theme

## Gestion des styles et des scripts

Les styles et les scripts du dossier `/assets` sont minifiés dans le dossier `/dist`.

En phase de développement vous devez donc travailler dans le dossier `/assets`.

Chaque page possède ses propres styles et ses propres scripts, bien que toutes les pages embarquent des styles et des scripts communs (TODO : les exposer).

Pour ajouter des styles et des scripts sur un nouveau modèle de page particulier, vous devez :
1. Créer les styles dans `/assets/scss/pages/page-name.scss` et les scripts dans `/assets/js/pages/page-name.js`
2. Ajouter les fichiers nécessaires dans l'objet `module.exports.entry` sur le fichier `webpack.config.js`
3. Ajouter les fichiers minifiés dans le tableau `$page_assets` sur le fichier `fct-enqueue.php`

Le web doit aujourd'hui être pensé en "**Design System**", si vous avez donc besoin de certains composants scss sur `page.scss` (par ex), il vous suffit de créer les imports des composants dans le fichier de la page concernée, c'est la même démarche pour les scripts. Le but est de veiller à ne pas charger des styles ou des scripts inutiles sur certaines pages.