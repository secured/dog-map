import { createPool } from '@vercel/postgres';
import { POSTGRES_URL } from '$env/static/private';

const pool = createPool({
    connectionString: POSTGRES_URL,
});

export async function load() {
    return {
        rows: await pool.sql`SELECT * FROM dogs;`
    }
}