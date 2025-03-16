# Architectures applicatives

## TP Applications web

Ce dossier vaut rendu de ce TP.

Il contient le code de la première partie du TP (mis à jour pour utiliser la seconde partie) dans le dossier [front](front), et le code de la second partie du TP dans le dossier [back](back).

## Usage

### Pour le front (partie 1)

Simplement ouvrir le fichier [`index.html`](front/index.html) dans un navigateur.

> Attention: le front dependant sur le serveur, il ne sera pas 100% fonctionnel sans ce dernier (même si demandé en fin de première partie de TP).

### Pour le back (partie 2)

Se déplacer dans le dossier correspondant, installer les dépendances, puis lancer le serveur:

```bash
cd back
npm ci
code ./index.js
```

Ensuite, vous pouvez tester les différentes routes de la dernière partie (le code des premières parties a été commenté, comme pour le front). Vous pouvez aussi réactualiser le front et tester via cette interface.

## Deploiement

L'application (front) est deployé sur [https://tp1-archi-app.onrender.com](https://tp1-archi-app.onrender.com). Le backend est lui déployé sur [https://tp1-archi-app-back.onrender.com](https://tp1-archi-app-back.onrender.com).

## Choix techniques

Pour la représentation des messages, j'utilise des objets ayant la structure suivante:

```json
{
  "msg": "contenu du message",
  "user": "utilisateur qui a posté ce message. Pour les messages créés depuis le site, c'est inconnu",
  "updated": "ISODateString de quand le message a été posté"
}
```

Pour le switch thème clair/sombre, comme il n'était pas explicité si cela devait se faire directement sur la page, j'ai simplement décidé d'utiliser le switch du navigateur. Si vous voulez tester les deux, il faudra donc changer les préférences navigateur.
