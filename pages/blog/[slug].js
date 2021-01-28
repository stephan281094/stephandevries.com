import hydrate from "next-mdx-remote/hydrate";
import MDXComponents from "../../components/mdx-components";
import { getFileBySlug, getFiles } from "../../lib/mdx";
import { parseISO, format } from "date-fns";

export default function Post({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, { components: MDXComponents });

  return (
    <main className="container max-w-screen-sm mx-auto space-y-8">
      <div className="space-y-2">
        <h2 className="text-xl sm:text-3xl font-bold">{frontMatter.title}</h2>
        <span className="block text-gray-600 dark:text-gray-400 text-sm">
          {format(parseISO(frontMatter.publishedAt), "MMMM do, yyyy")}
        </span>
      </div>
      <div className="space-y-8 leading-relaxed text-gray-800 dark:text-gray-200">
        {content}
      </div>
    </main>
  );
}

export async function getStaticPaths() {
  const posts = await getFiles("blog");

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ""),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug("blog", params.slug);

  return { props: post };
}
