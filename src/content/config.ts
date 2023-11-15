import { z, defineCollection } from "astro:content";

const articlesCollection = defineCollection({
    type: "content",
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            cover: image().refine((img) => img.width >= 600, {
                message: "Cover image must be at least 600 pixels wide!",
            }),
            author: z.enum(["Youssef Hefnawy"]),
            gitHub: z.string().optional(),
            codePen: z.string().optional(),
            draft: z.boolean(),
        }),
});

export const collections = {
    articles: articlesCollection,
};
