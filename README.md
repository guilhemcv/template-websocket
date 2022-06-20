# TP sur les websockets

Nous allons manipuler les websokets avec React & Node.js.

Nous utilisons le paquage [socket.io](https://socket.io/) qui fait très bien le travail !


## Backend

Coté back nous allons faire un server `express` simple.

Mais nous allons quand même faire quelques modification par rapport à d'habitude.

nous allons utiliser un paquet de chez node `http` :

```js
const express = require("express");
// pourquoi http ici ? car nous allons l'utiliser dans la création de 
// notre server
// qui va permettre de reutiliser le server avec socket.io 
// avec la même instance de serveur HTTP !
const http = require("http");

const app = express();
// ici
const server = http.createServer(app);
```

## Mais comment ça marche ?

![](./_doc/socketio.png)

Avec l'image ci-dessus, j'espère que ça vous aide.

C'est une communication bidirectionnelle entre le client et le serveur. On appel ça une communication full duplex.

## Frontend
