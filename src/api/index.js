// filepath: /Users/vince/project/bolt-generated-project1/src/api/index.js
import express from 'express';
import { getProspects, createProspect } from './prospects.js';

const app = express();
const port = 3001;

app.use(express.json());

app.get('/api/prospects', async (req, res) => {
  const prospects = await getProspects();
  res.json(prospects);
});

app.post('/api/prospects', async (req, res) => {
  const prospect = req.body;
  const newProspect = await createProspect(prospect);
  res.status(201).json(newProspect);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});