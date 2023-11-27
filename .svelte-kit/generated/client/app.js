import * as client_hooks from '../../../src/hooks.client.ts';

export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13')
];

export const server_loads = [3];

export const dictionary = {
		"/(homepage)": [5,[3]],
		"/_about": [10],
		"/_help": [11],
		"/_legal/terms-and-conditions": [12],
		"/_signup": [13],
		"/(app)/app": [4,[2]],
		"/(homepage)/contacts": [6,[3]],
		"/(homepage)/login": [7,[3]],
		"/(homepage)/logout": [8,[3]],
		"/(homepage)/payment_success": [9,[3]]
	};

export const hooks = {
	handleError: client_hooks.handleError || (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';