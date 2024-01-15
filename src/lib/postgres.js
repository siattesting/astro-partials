import postgres from 'postgres';

const sql = postgres(import.meta.env.NEON_DATABASE_URL, { ssl: 'require' });

// const response = await sql`SELECT version()`;
// console.log(response);
export default sql;
