import { defineCollection, z } from "astro:content";

const projects = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		description: z.string(),
		image: z.string(),
		tags: z.array(z.string()),
		category: z.enum(["ecommerce", "plataformas"]),
		link: z.string().url().optional(),
		repo: z.string().url().optional(),
		gallery: z.array(z.string()).optional(),
		date: z.date(),
	}),
});

const profile = defineCollection({
	type: "data",
	schema: z.object({
		name: z.string(),
		title: z.string(),
		tagline: z.string().optional(),
		image: z.string().optional(),
		bio: z.string(),
		email: z.string().email(),
		socials: z.array(
			z.object({
				platform: z.string(),
				url: z.string().url(),
				icon: z.string(), // Icon name for React Icons / Phosphor
			}),
		),
	}),
});

const experience = defineCollection({
	type: "content",
	schema: z.object({
		role: z.string(),
		company: z.string(),
		logo: z.string().optional(),
		startDate: z.date(),
		endDate: z.date().optional(), // If undefined, considered "Present"
		period: z.string().optional(), // Overrides the formatted date range (e.g. when only the year is known)
		skills: z.array(z.string()).optional(),
		location: z.string().optional(),
		url: z.string().url().optional(),
	}),
});

export const collections = { projects, profile, experience };
