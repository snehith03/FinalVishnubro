// @ts-nocheck
import type { PageLoad } from './$types';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import { redirect } from '@sveltejs/kit';

export const load = async (event: Parameters<PageLoad>[0]) => {
	const { session, supabaseClient } = await getSupabase(event);
	if (session) {
		await supabaseClient.auth.signOut();
		throw redirect(303, '/');
	}
};
