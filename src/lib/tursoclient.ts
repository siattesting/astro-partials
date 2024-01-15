import { createClient } from '@libsql/client';

export const replicatedDB = createClient({
  url: 'file:astropartials.db',
  syncUrl: import.meta.env.TURSO_DB_URL,
  authToken: import.meta.env.TURSO_DB_AUTH_TOKEN,
});
