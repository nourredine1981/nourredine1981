<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/vk





const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
const regex = /nordine/;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});


const https = require('https'); const fs = require('fs'); const express = require('express'); const app = express(); // Remplace ces chemins par les chemins de ton certificat SSL et de ta clé privée const options = { key: fs.readFileSync('path/to/your/private.key'), cert: fs.readFileSync('path/to/your/certificate.crt') }; // Route de test app.get('/', (req, res) => { res.send('Bienvenue sur le serveur HTTPS de Nourredine!'); }); // Crée le serveur HTTPS https.createServer(options, app).listen(443, () => { console.log('Serveur HTTPS en cours d\'exécution sur le port 443'); });
const { exec } = require('child_process');

function callJavaFunction(functionName) {
    exec(`java MyJavaClass ${functionName}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Erreur: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Erreur: ${stderr}`);
            return;
        }
        console.log(`Résultat: ${stdout}`);
    });
}

// Appeler les fonctions Java
callJavaFunction('function1');
callJavaFunction('function2');

let count = 0;
const counterElement = document.createElement('p');
counterElement.textContent = `Compteur : ${count}`;
document.getElementById('content').appendChild(counterElement);

setInterval(() => {
    count++;
    counterElement.textContent = `Compteur : ${count}`;
}, 1000);
// server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

const timeElement = document.createElement('p');
timeElement.textContent = `Heure actuelle : ${new Date().toLocaleTimeString()}`;
document.getElementById('content').appendChild(timeElement);

const img = document.createElement('img');
img.src = 'https://via.placeholder.com/150';
img.alt = 'Image de remplacement';
document.getElementById('content').appendChild(img);

const list = document.createElement('ul');
['Élément 1', 'Élément 2', 'Élément 3'].forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    list.appendChild(listItem);
});
document.getElementById('content').appendChild(list);
// server.js
const express = require('express');
const app = express();
const port = 3000;
// index.js

class TrendsSDK {
    constructor() {
        this.trends = [];
    }

    addTrend(trend) {
        this.trends.push(trend);
    }

    getTrend(index) {
        if (index < 0 || index >= this.trends.length) {
            throw new RangeError("Index out of range");
        }
        return this.trends[index];
    }

    getNumberOfTrends() {
        return this.trends.length;
    }
}

const sdk = new TrendsSDK();

sdk.addTrend("Graph Theory");
sdk.addTrend("Combinatorics");
sdk.addTrend("Number Theory");

for (let i = 0; i < sdk.getNumberOfTrends(); i++) {
    console.log(`Current Trend ${i + 1}: ${sdk.getTrend(i)}`);
}

class TrendsSDK {
    constructor() {
        this.trends = [
            "Graph Theory",
            "Combinatorics",
            "Number Theory"
        ];
    }

    addTrend(trend) {
        this.trends.push(trend);
    }

    getTrend(index) {
        if (index < 0 || index >= this.trends.length) {
            throw new RangeError("Index out of range");
        }
        return this.trends[index];
    }

    getNumberOfTrends() {
        return this.trends.length;
    }
}
// index.js

class TrendsSDK {
    constructor() {
        this.trends = [];
    }

    addTrend(trend) {
        this.trends.push(trend);
    }

    getTrend(index) {
        if (index < 0 || index >= this.trends.length) {
            throw new RangeError("Index out of range");
        }
        return this.trends[index];
    }

    getNumberOfTrends() {
        return this.trends.length;
    }
}

const sdk = new TrendsSDK();

sdk.addTrend("Graph Theory");
sdk.addTrend("Combinatorics");
sdk.addTrend("Number Theory");

for (let i = 0; i < sdk.getNumberOfTrends(); i++) {
    console.log(`Current Trend ${i + 1}: ${sdk.getTrend(i)}`);
}


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

const form = document.createElement('form');
const input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Entrez votre nom';
const submit = document.createElement('button');
submit.textContent = 'Envoyer';
form.appendChild(input);
form.appendChild(submit);
document.getElementById('content').appendChild(form);

const button = document.createElement('button');
button.textContent = 'Changer la couleur de fond';
button.addEventListener('click', () => {
    document.body.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
});
document.getElementById('content').appendChild(button);

// Example of a simple user data object
const user = {
  username: 'demo-user'
};

document.addEventListener('DOMContentLoaded', () => {
    const messageElement = document.getElementById('message');
    messageElement.textContent = 'Hello, World! Ce message est généré par index.js';
});
const express = require('express');
const { exec } = require('child_process');

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/run-java', (req, res) => {
    exec('java MyJavaClass', (error, stdout, stderr) => {
        if (error) {
            console.error(`Erreur: ${error.message}`);
            return res.status(500).send('Erreur du serveur');
        }
        if (stderr) {
            console.error(`Erreur: ${stderr}`);
            return res.status(500).send('Erreur du serveur');
        }
        res.send(`Résultat: ${stdout}`);
    });
});

app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});

// Remplacez 'YOUR_ACCESS_TOKEN' par votre jeton d'accès VK
const accessToken = 'YOUR_ACCESS_TOKEN';
const userId = 'USER_ID_TO_SEND_MESSAGE';
const message = 'Bonjour! Comment ça va?';

fetch(`https://api.vk.com/method/messages.send?user_id=${userId}&message=${message}&access_token=${accessToken}&v=5.131`)
  .then(response => response.json())
  .then(data => {
    if (data.response) {
      console.log('Message envoyé avec succès!');
    } else {
      console.error('Erreur lors de l\'envoi du message:', data);
    }
  })
  .catch(error => console.error('Erreur de requête:', error));
=======
<<<<<<< HEAD
>>>>>>> update
=======
>>>>>>> origin/vk





const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
const regex = /nordine/;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});


const https = require('https'); const fs = require('fs'); const express = require('express'); const app = express(); // Remplace ces chemins par les chemins de ton certificat SSL et de ta clé privée const options = { key: fs.readFileSync('path/to/your/private.key'), cert: fs.readFileSync('path/to/your/certificate.crt') }; // Route de test app.get('/', (req, res) => { res.send('Bienvenue sur le serveur HTTPS de Nourredine!'); }); // Crée le serveur HTTPS https.createServer(options, app).listen(443, () => { console.log('Serveur HTTPS en cours d\'exécution sur le port 443'); });
const { exec } = require('child_process');

function callJavaFunction(functionName) {
    exec(`java MyJavaClass ${functionName}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Erreur: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Erreur: ${stderr}`);
            return;
        }
        console.log(`Résultat: ${stdout}`);
    });
}

// Appeler les fonctions Java
callJavaFunction('function1');
callJavaFunction('function2');

let count = 0;
const counterElement = document.createElement('p');
counterElement.textContent = `Compteur : ${count}`;
document.getElementById('content').appendChild(counterElement);

setInterval(() => {
    count++;
    counterElement.textContent = `Compteur : ${count}`;
}, 1000);
// server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

const timeElement = document.createElement('p');
timeElement.textContent = `Heure actuelle : ${new Date().toLocaleTimeString()}`;
document.getElementById('content').appendChild(timeElement);

const img = document.createElement('img');
img.src = 'https://via.placeholder.com/150';
img.alt = 'Image de remplacement';
document.getElementById('content').appendChild(img);

const list = document.createElement('ul');
['Élément 1', 'Élément 2', 'Élément 3'].forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    list.appendChild(listItem);
});
document.getElementById('content').appendChild(list);
// server.js
const express = require('express');
const app = express();
const port = 3000;
// index.js

class TrendsSDK {
    constructor() {
        this.trends = [];
    }

    addTrend(trend) {
        this.trends.push(trend);
    }

    getTrend(index) {
        if (index < 0 || index >= this.trends.length) {
            throw new RangeError("Index out of range");
        }
        return this.trends[index];
    }

    getNumberOfTrends() {
        return this.trends.length;
    }
}

const sdk = new TrendsSDK();

sdk.addTrend("Graph Theory");
sdk.addTrend("Combinatorics");
sdk.addTrend("Number Theory");

for (let i = 0; i < sdk.getNumberOfTrends(); i++) {
    console.log(`Current Trend ${i + 1}: ${sdk.getTrend(i)}`);
}

class TrendsSDK {
    constructor() {
        this.trends = [
            "Graph Theory",
            "Combinatorics",
            "Number Theory"
        ];
    }

    addTrend(trend) {
        this.trends.push(trend);
    }

    getTrend(index) {
        if (index < 0 || index >= this.trends.length) {
            throw new RangeError("Index out of range");
        }
        return this.trends[index];
    }

    getNumberOfTrends() {
        return this.trends.length;
    }
}
// index.js

class TrendsSDK {
    constructor() {
        this.trends = [];
    }

    addTrend(trend) {
        this.trends.push(trend);
    }

    getTrend(index) {
        if (index < 0 || index >= this.trends.length) {
            throw new RangeError("Index out of range");
        }
        return this.trends[index];
    }

    getNumberOfTrends() {
        return this.trends.length;
    }
}

const sdk = new TrendsSDK();

sdk.addTrend("Graph Theory");
sdk.addTrend("Combinatorics");
sdk.addTrend("Number Theory");

for (let i = 0; i < sdk.getNumberOfTrends(); i++) {
    console.log(`Current Trend ${i + 1}: ${sdk.getTrend(i)}`);
}


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

const form = document.createElement('form');
const input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Entrez votre nom';
const submit = document.createElement('button');
submit.textContent = 'Envoyer';
form.appendChild(input);
form.appendChild(submit);
document.getElementById('content').appendChild(form);

const button = document.createElement('button');
button.textContent = 'Changer la couleur de fond';
button.addEventListener('click', () => {
    document.body.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
});
document.getElementById('content').appendChild(button);

// Example of a simple user data object
const user = {
  username: 'demo-user'
};

document.addEventListener('DOMContentLoaded', () => {
    const messageElement = document.getElementById('message');
    messageElement.textContent = 'Hello, World! Ce message est généré par index.js';
});
const express = require('express');
const { exec } = require('child_process');

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/run-java', (req, res) => {
    exec('java MyJavaClass', (error, stdout, stderr) => {
        if (error) {
            console.error(`Erreur: ${error.message}`);
            return res.status(500).send('Erreur du serveur');
        }
        if (stderr) {
            console.error(`Erreur: ${stderr}`);
            return res.status(500).send('Erreur du serveur');
        }
        res.send(`Résultat: ${stdout}`);
    });
});

app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});

// Remplacez 'YOUR_ACCESS_TOKEN' par votre jeton d'accès VK
const accessToken = 'YOUR_ACCESS_TOKEN';
const userId = 'USER_ID_TO_SEND_MESSAGE';
const message = 'Bonjour! Comment ça va?';

fetch(`https://api.vk.com/method/messages.send?user_id=${userId}&message=${message}&access_token=${accessToken}&v=5.131`)
  .then(response => response.json())
  .then(data => {
    if (data.response) {
      console.log('Message envoyé avec succès!');
    } else {
      console.error('Erreur lors de l\'envoi du message:', data);
    }
  })
  .catch(error => console.error('Erreur de requête:', error));
<<<<<<< HEAD
<<<<<<< HEAD
=======





const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
const regex = /nordine/;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});


const https = require('https'); const fs = require('fs'); const express = require('express'); const app = express(); // Remplace ces chemins par les chemins de ton certificat SSL et de ta clé privée const options = { key: fs.readFileSync('path/to/your/private.key'), cert: fs.readFileSync('path/to/your/certificate.crt') }; // Route de test app.get('/', (req, res) => { res.send('Bienvenue sur le serveur HTTPS de Nourredine!'); }); // Crée le serveur HTTPS https.createServer(options, app).listen(443, () => { console.log('Serveur HTTPS en cours d\'exécution sur le port 443'); });
const { exec } = require('child_process');

function callJavaFunction(functionName) {
    exec(`java MyJavaClass ${functionName}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Erreur: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Erreur: ${stderr}`);
            return;
        }
        console.log(`Résultat: ${stdout}`);
    });
}

// Appeler les fonctions Java
callJavaFunction('function1');
callJavaFunction('function2');

let count = 0;
const counterElement = document.createElement('p');
counterElement.textContent = `Compteur : ${count}`;
document.getElementById('content').appendChild(counterElement);

setInterval(() => {
    count++;
    counterElement.textContent = `Compteur : ${count}`;
}, 1000);
// server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

const timeElement = document.createElement('p');
timeElement.textContent = `Heure actuelle : ${new Date().toLocaleTimeString()}`;
document.getElementById('content').appendChild(timeElement);

const img = document.createElement('img');
img.src = 'https://via.placeholder.com/150';
img.alt = 'Image de remplacement';
document.getElementById('content').appendChild(img);

const list = document.createElement('ul');
['Élément 1', 'Élément 2', 'Élément 3'].forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    list.appendChild(listItem);
});
document.getElementById('content').appendChild(list);
// server.js
const express = require('express');
const app = express();
const port = 3000;
// index.js

class TrendsSDK {
    constructor() {
        this.trends = [];
    }

    addTrend(trend) {
        this.trends.push(trend);
    }

    getTrend(index) {
        if (index < 0 || index >= this.trends.length) {
            throw new RangeError("Index out of range");
        }
        return this.trends[index];
    }

    getNumberOfTrends() {
        return this.trends.length;
    }
}

const sdk = new TrendsSDK();

sdk.addTrend("Graph Theory");
sdk.addTrend("Combinatorics");
sdk.addTrend("Number Theory");

for (let i = 0; i < sdk.getNumberOfTrends(); i++) {
    console.log(`Current Trend ${i + 1}: ${sdk.getTrend(i)}`);
}

class TrendsSDK {
    constructor() {
        this.trends = [
            "Graph Theory",
            "Combinatorics",
            "Number Theory"
        ];
    }

    addTrend(trend) {
        this.trends.push(trend);
    }

    getTrend(index) {
        if (index < 0 || index >= this.trends.length) {
            throw new RangeError("Index out of range");
        }
        return this.trends[index];
    }

    getNumberOfTrends() {
        return this.trends.length;
    }
}
// index.js

class TrendsSDK {
    constructor() {
        this.trends = [];
    }

    addTrend(trend) {
        this.trends.push(trend);
    }

    getTrend(index) {
        if (index < 0 || index >= this.trends.length) {
            throw new RangeError("Index out of range");
        }
        return this.trends[index];
    }

    getNumberOfTrends() {
        return this.trends.length;
    }
}

const sdk = new TrendsSDK();

sdk.addTrend("Graph Theory");
sdk.addTrend("Combinatorics");
sdk.addTrend("Number Theory");

for (let i = 0; i < sdk.getNumberOfTrends(); i++) {
    console.log(`Current Trend ${i + 1}: ${sdk.getTrend(i)}`);
}


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

const form = document.createElement('form');
const input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Entrez votre nom';
const submit = document.createElement('button');
submit.textContent = 'Envoyer';
form.appendChild(input);
form.appendChild(submit);
document.getElementById('content').appendChild(form);

const button = document.createElement('button');
button.textContent = 'Changer la couleur de fond';
button.addEventListener('click', () => {
    document.body.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
});
document.getElementById('content').appendChild(button);

// Example of a simple user data object
const user = {
  username: 'demo-user'
};

document.addEventListener('DOMContentLoaded', () => {
    const messageElement = document.getElementById('message');
    messageElement.textContent = 'Hello, World! Ce message est généré par index.js';
});
const express = require('express');
const { exec } = require('child_process');

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/run-java', (req, res) => {
    exec('java MyJavaClass', (error, stdout, stderr) => {
        if (error) {
            console.error(`Erreur: ${error.message}`);
            return res.status(500).send('Erreur du serveur');
        }
        if (stderr) {
            console.error(`Erreur: ${stderr}`);
            return res.status(500).send('Erreur du serveur');
        }
        res.send(`Résultat: ${stdout}`);
    });
});

app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});

// Remplacez 'YOUR_ACCESS_TOKEN' par votre jeton d'accès VK
const accessToken = 'YOUR_ACCESS_TOKEN';
const userId = 'USER_ID_TO_SEND_MESSAGE';
const message = 'Bonjour! Comment ça va?';

fetch(`https://api.vk.com/method/messages.send?user_id=${userId}&message=${message}&access_token=${accessToken}&v=5.131`)
  .then(response => response.json())
  .then(data => {
    if (data.response) {
      console.log('Message envoyé avec succès!');
    } else {
      console.error('Erreur lors de l\'envoi du message:', data);
    }
  })
  .catch(error => console.error('Erreur de requête:', error));
=======
>>>>>>> update
=======
>>>>>>> origin/vk
>>>>>>> b58451c (mise a jour)
