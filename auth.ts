import { DrizzleAdapter } from 'better-auth/adapters/drizzle';
import { username, magicLink, emailOTP, genericOAuth } from 'better-auth/plugins';
import { betterAuth } from 'better-auth';

export const auth = betterAuth({
	database: new DrizzleAdapter(db, {
		provider: 'sqlite'
	}),
	appName: 'better-auth-sveltekit-turso',
	plugins: [
		genericOAuth({
			config: []
		}),
		emailOTP({
			async sendVerificationOTP({ email, otp, type }, request) {
				// Send email with OTP
			}
		}),
		magicLink({
			sendMagicLink({ email, token, url }, request) {
				// Send email with magic link
			}
		}),
		username()
	]
});
