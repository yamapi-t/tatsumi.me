import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getCollection } from "astro:content";

export async function GET(context: APIContext) {
  const posts = await getCollection("posts");

  return rss({
    title: "tatsumiyamamoto.com",
    description: "web開発に関する技術を中心に紹介するブログです。",
    site: context.site ?? "",
    items: posts.map((post) => {
      return {
        title: post.data.title,
        pubDate: new Date(post.data.published_at),
        description: "",
        link: `/posts/${post.slug}`,
      };
    }),
    customData: "<language>ja-jp</language>",
  });
}
