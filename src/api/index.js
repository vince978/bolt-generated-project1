import { createServer } from 'http';
    import { createApp } from 'express';
    import { createProxyMiddleware } from 'http-proxy-middleware';
    import { getProspects, createProspect } from './prospects';

    const app = createApp();

    app.use('/api/prospects', async (req, res) => {
      if (req.method === 'GET') {
        const prospects = await getProspects();
        res.json(prospects);
      } else if (req.method === 'POST') {
        const prospect = req.body;
        const newProspect = await createProspect(prospect);
        res.json(newProspect);
      } else {
        res.status(405).send('Method not allowed');
      }
    });

    app.use('/', createProxyMiddleware({ target: 'http://localhost:3000' }));

    const server = createServer(app);
    server.listen(3001, () => {
      console.log('Server listening on port 3001');
    });
