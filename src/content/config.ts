import { defineCollection, z } from "astro:content";

const showcase = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      title: z.string().min(1),
      image: image(),
      url: z.string().regex(/^\/|https?:\/\//, {
        message: "Debe ser una ruta interna que comience con '/' o una URL válida.",
      }),
      featured: z.number().min(1).optional(),
    }),
});

export const collections = {
  showcase,
};
