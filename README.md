## Better Auth + SvelteKit

This is a simple example of how to use [Better Auth](https://github.com/better-auth/better-auth) with SvelteKit.

### Setup

1. Clone the repository
2. Create your github oauth app. Make sure to set the callback url to `http://localhost:5173/api/auth/callback/github`
3. Create Turso database and fill your url and token into `.env`
4. Create a `.env` file and add your environment variables. See `.env.example` for reference. (make sure to grab the github client id and secret for github, the rest you can leave as is)
5. Run `pnpm install` to install the dependencies
6. Push the migrations: `pnpm run db:push`
7. Run the dev server: `pnpm run dev`

### Useful docs

- [Better Auth Docs](https://www.better-auth.com/docs/installation)
- [SvelteKit Docs](https://svelte.dev/docs/kit)
- [Turso](https://turso.tech/)
