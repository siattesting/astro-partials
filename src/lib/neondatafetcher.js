import sql from './postgres';

export async function fetchCustomers() {
  try {
    const customers =
      await sql` SELECT * FROM customers ORDER BY customername ASC`;
    // console.log(customers);
    return customers;
  } catch (err) {
    console.error('Database Error: ', err);
    throw new Error('Failed to fetch customers. ');
  }
}

export async function fetchPosts() {
  try {
    const posts = await sql` SELECT * FROM posts ORDER BY created_at DESC`;
    return posts;
  } catch (err) {
    console.error('Database Error: ', err);
    throw new Error('Failed to fetch posts. ');
  }
}

export async function fetchCustomersByCountry(country) {
  try {
    const customers =
      await sql` SELECT * FROM customers WHERE country = ${country} ORDER BY customername ASC`;
    return customers;
  } catch (error) {
    console.error('Database Error: ', err);
    throw new Error('Failed to fetch customers by Country. ');
  }
}
