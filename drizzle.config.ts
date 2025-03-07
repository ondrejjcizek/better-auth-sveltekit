import { config } from 'dotenv';
import { defineConfig } from 'drizzle-kit';

config({ path: '.env' });

export default defineConfig({
	schema: './src/lib/db/schema.ts',
	out: './migrations',
	dialect: 'turso',
	dbCredentials: {
		url: process.env.DATABASE_URL || 'fallback-url',
		authToken: process.env.DATABASE_AUTH_TOKEN! || 'fallback-url'
	}
});
