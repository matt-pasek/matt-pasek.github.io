import { z, defineCollection } from "astro:content";

const projectsCollection = defineCollection({
    type: "content",
    schema: z.object({
        codename: z.string().min(1),
        image: z.string(),
        positions: z.array(z.string()),
        title: z.string(),
        description: z.string(),
        link: z.string().url(),
        stack: z.array(z.string()),
    })
});

const recommendationsCollection = defineCollection({
    type: "content",
    schema: z.object({
        image: z.string(),
        name: z.string(),
        position: z.string(),
        text: z.string(),
    })
});

export const collections = {
    projects: projectsCollection,
    recommendations: recommendationsCollection,
}