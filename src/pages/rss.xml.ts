import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context: { site: any }) {
  const blog = await getCollection("blog");

  return rss({
    title: "Wessell's ☺️site",
    description: "Welcome to the World of ☺️",
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      link: `/blog/${post.slug}/`,

      pubDate: post.data.dateTime,
      image: {
        url: post.data.cover.src,
        title: post.data.cover.alt,
      },
    })),
  });
}
