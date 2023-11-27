import type { PageLoad } from './$types';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import { redirect } from '@sveltejs/kit';

export const load: PageLoad = async (event) => {
	const { session } = await getSupabase(event);
	if (session) {
		rewardful('convert', { email: 'customer@example.com' });
		throw redirect(303, '/app');
	}
};
