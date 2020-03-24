import { Router } from 'express';
import { randomBytes } from 'crypto';

import connection from './database/connection';

const routes = new Router();

routes.post('/ongs', async (request, response) => {
  const { name, email, whatsapp, city, uf } = request.body;

  const id = randomBytes(4).toString('HEX');

  await connection('ongs').insert({
    id,
    name,
    email,
    whatsapp,
    city,
    uf,
  });

  return response.json({ id });
});

export default routes;
