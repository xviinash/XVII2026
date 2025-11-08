// server.js
import express from 'express';
import fetch from 'node-fetch';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3000;

// Pour __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// === Servir fichiers statiques (HTML, CSS, vidéos, images) ===
app.use(express.static(__dirname));

// === Endpoint pour récupérer les projets Behance ===
const BEHANCE_USER = "xviinash";
const API_KEY = "LDGQKFP7dsmkhIKUAGG67ChSDASj1cWD";

app.get('/behance-projects', async (req, res) => {
  try {
    const response = await fetch(
      `https://api.behance.net/v2/users/${BEHANCE_USER}/projects?api_key=${API_KEY}`
    );
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// === Démarrage du serveur ===
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
