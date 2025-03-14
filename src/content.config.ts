import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";

export const collections = {
  articles: defineCollection({
    loader: glob({
      pattern: "**/*.mdoc",
      base: "./src/content/articles",
    }),
  }),
};
