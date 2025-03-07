import { env } from '$env/dynamic/private';
import { drizzle } from 'drizzle-orm/libsql';
import * as schema from './schema';

export const db = drizzle({
	connection: {
		url: env.DATABASE_URL!,
		authToken: env.DATABASE_AUTH_TOKEN!
	},
	schema
});
