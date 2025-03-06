import { DATABASE_URL } from '$env/static/private';
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/mysql2';
import * as schema from './schema';

export const db = drizzle(DATABASE_URL, { schema, mode: 'default' });
