Ce projet sert à créer une site web pour un évenement soprtif les jeux olympique qui contient les différents évenement sportifs.

 Créer une  page web attrayante avec HTML et CSS, et JavaScript pour afficher toutes les informations utiles des évènement disponible à l'utilisateur et dans le site il y a beaucoup de fonctions qui dynamise la page.
  🎯 Implémenter des fonctionnalités interactives avec JavaScript pour améliorer l'expérience utilisateur. ✅ Valider les entrées du formulaire et afficher des messages d'erreur appropriés en cas de données incorrectes. ⚙️ Ajouter des interactions avec l'utilisateur, telles que l'ouverture et la fermeture d'une fenêtre modale.

🔧 Détails de l'implémentation

J'ai travaillé sur la partie JavaScript du projet en utilisant les concepts suivants :

🔧 Manipulation du DOM pour sélectionner et modifier des éléments HTML.
Création des fonctions pour la gestion des cookies, donc l'utlisateur a le choix de choisir soit accepter, refuser les cookies ou accéder au paramètres des cookies.
🖱️ Gestion des événements pour réagir aux actions de l'utilisateur, tels que les clics sur les boutons.
✅ Validation du formulaire en vérifiant les champs obligatoires, les formats d'entrée corrects et les contraintes spécifiques, comme l'âge minimum.

❌ Affichage de messages d'erreur appropriés en cas de données incorrectes.

📜 Création d'une fenêtre modale avec un message de confirmation d'inscription.

🌐 Le site de projet
https://nesrineyah.github.io/Marathon__Projet-Perso /


<div class="Box-sc-g0xbh4-0 bJMeLZ js-snippet-clipboard-copy-unpositioned" data-hpc="true"><article class="markdown-body entry-content container-lg" itemprop="text"><div class="markdown-heading" dir="auto"><h1 tabindex="-1" class="heading-element" dir="auto">GameOn</h1><a id="user-content-gameon" class="anchor" aria-label="Permalink: GameOn" href="#gameon"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg></a></div>
<p dir="auto">Quatrième projet du parcours "Développeur Front-End" d'OpenClassrooms. L'objectif de ce projet est de dynamiser une page web avec des animations CSS.</p>
<p dir="auto"><a target="_blank" rel="noopener noreferrer nofollow" href="https://camo.githubusercontent.com/a86743a3922b9c66c34917b527b79f979759f2692396731f7e52e36128fcf6ea/68747470733a2f2f757365722e6f632d7374617469632e636f6d2f75706c6f61642f323032302f30382f31342f31353937343138393731363934355f696d616765322e706e67"><img src="https://camo.githubusercontent.com/a86743a3922b9c66c34917b527b79f979759f2692396731f7e52e36128fcf6ea/68747470733a2f2f757365722e6f632d7374617469632e636f6d2f75706c6f61642f323032302f30382f31342f31353937343138393731363934355f696d616765322e706e67" alt="Maquette de GameOn" data-canonical-src="https://user.oc-static.com/upload/2020/08/14/15974189716945_image2.png" style="max-width: 100%;"></a></p>
<div class="markdown-heading" dir="auto"><h2 tabindex="-1" class="heading-element" dir="auto">Cahier des charges</h2><a id="user-content-cahier-des-charges" class="anchor" aria-label="Permalink: Cahier des charges" href="#cahier-des-charges"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg></a></div>
<ul dir="auto">
<li>Le site doit être fait en JavaScript sans jQuery.</li>
<li>Le HTML, le CSS et le JavaScript doivent être séparés.</li>
<li>Le code doit être sémantiquement correct et ne doit contenir aucune erreur au validateur W3C.</li>
<li>Le site doit être compatible avec les dernières versions de Chrome et Firefox.</li>
<li>Le code doit être forké depuis le repo GitHub.</li>
<li>Le code doit être commenté (décrire chaque fonction, ainsi que les parties du code qui nécessitent plus de détails).</li>
<li>Des tests manuels doivent être effectués sur les fonctionnalités, les entrées de formulaire et l'affichage responsive.</li>
</ul>
<div class="markdown-heading" dir="auto"><h2 tabindex="-1" class="heading-element" dir="auto">Éléments fournis pour le projet</h2><a id="user-content-éléments-fournis-pour-le-projet" class="anchor" aria-label="Permalink: Éléments fournis pour le projet" href="#éléments-fournis-pour-le-projet"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg></a></div>
<ul dir="auto">
<li>La <a href="https://www.figma.com/file/prxFGnSUoEhk6PTcMaJQim/UI-Design-GameOn-EN?node-id=0%3A1" rel="nofollow">maquette</a> qui est déjà intégrée.</li>
<li>Le <a href="https://github.com/OpenClassrooms-Student-Center/GameOn-website-FR/">repo</a> avec le code qui à déjà été complété.</li>
<li>Les images présentes dans la maquette.</li>
<li>Les <a href="https://github.com/OpenClassrooms-Student-Center/GameOn-website-FR/issues">issues</a> du repo GitHub qui décrivent ce qu'il reste à faire.</li>
</ul>
<div class="markdown-heading" dir="auto"><h2 tabindex="-1" class="heading-element" dir="auto">Note du projet</h2><a id="user-content-note-du-projet" class="anchor" aria-label="Permalink: Note du projet" href="#note-du-projet"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg></a></div>
<ul dir="auto">
<li>Le développement à été réalisé sur l'éditeur <a href="http://brackets.io/" rel="nofollow">Brackets</a> sans plugins.</li>
<li>La validation des champs du formulaire à été réalisé avec <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Expressions_r%C3%A9guli%C3%A8res" rel="nofollow">Regex</a>.</li>
</ul>
</article></div>