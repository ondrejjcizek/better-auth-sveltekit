<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import { authClient } from '$lib/auth-client';

	const { data } = $props();

	const signIn = async () => {
		await authClient.signIn.social({
			provider: 'github'
		});
	};

	const signOut = async () => {
		await authClient.signOut();

		invalidateAll();
	};
</script>

<div class="flex min-h-screen items-center justify-center bg-gray-50">
	<div class="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
		{#if data.session}
			<div class="text-center">
				<h2 class="mb-4 text-2xl font-semibold text-gray-800">Welcome</h2>
				<div class="flex items-center justify-center gap-4">
					<img
						src={data.session.user.image}
						alt={data.session.user.name}
						class="h-12 w-12 rounded-full"
					/>
					<p class="text-lg text-gray-600">{data.session.user.name}</p>
				</div>
				<button
					onclick={signOut}
					class="mt-6 rounded-md bg-red-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-red-600 focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:outline-none"
				>
					Sign out
				</button>
			</div>
		{:else}
			<div class="text-center">
				<h2 class="mb-6 text-2xl font-semibold text-gray-800">Authentication</h2>
				<p class="mb-6 text-gray-600">Please sign in to continue</p>
				<button
					onclick={signIn}
					class="inline-flex items-center justify-center rounded-md bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800 focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:outline-none"
				>
					<svg class="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
						<path
							d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
						/>
					</svg>
					Sign in with GitHub
				</button>
			</div>
		{/if}
	</div>
</div>
