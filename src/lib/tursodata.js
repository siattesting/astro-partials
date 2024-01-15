import { replicatedDB } from './tursoclient';

// await replicatedDB.sync();

export async function fetchPosts() {
  try {
    const data = await replicatedDB.execute({
      sql: 'SELECT * FROM posts ORDER BY created_at DESC',
      args: [],
    });
    const posts = data.rows;
    return posts;
  } catch (err) {
    console.error('Database Error: ', err);
    throw new Error('Failed to fetch posts: ', err);
  }
}

export async function fetchCustomers() {
  try {
    const data = await replicatedDB.execute({
      sql: 'SELECT * FROM Customers ORDER BY CustomerName ASC',
      args: [],
    });
    const customers = data.rows;
    return customers;
  } catch (err) {
    console.error('Database Error: ', err);
    throw new Error('Failed to fetch Customers: ', err);
  }
}
