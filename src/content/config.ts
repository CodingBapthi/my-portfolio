import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
	schema: z.object({
		type: z.string(),
		inProgress: z.boolean(),
		title: z.string(),
		description: z.string(),
		tags: z.array(z.string()),
		link: z.string(),
		img_alt: z.string().optional(),
	}),
});

const skillsCollection = defineCollection({
	schema: z.object({
		type: z.string(),
		inProgress: z.boolean(),
		title: z.string(),
		tags: z.array(z.string()),
		rating: z.number(),
	}),
});

export const collections = {
	projects: projectsCollection,
	skills: skillsCollection,
};
