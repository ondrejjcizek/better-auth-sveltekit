import { createAuthClient } from 'better-auth/client';
import type { auth } from './auth.ts';
import {
	inferAdditionalFields,
	usernameClient,
	magicLinkClient,
	emailOTPClient,
	genericOAuthClient
} from 'better-auth/client/plugins';

export const authClient = createAuthClient({
	baseURL: 'http://localhost:5173',
	plugins: [
		inferAdditionalFields<typeof auth>(),
		usernameClient(),
		magicLinkClient(),
		emailOTPClient(),
		genericOAuthClient()
	]
});
