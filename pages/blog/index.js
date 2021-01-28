import Link from "next/link";
import { Fragment } from "react";
import { getAllFilesFrontMatter } from "../../lib/mdx";

export default function Blog({ posts }) {
  return (
    <main className="container max-w-screen-sm mx-auto space-y-16">
      <div className="max-w-md text-center leading-normal m-auto space-y-8">
        <h2 className="text-3xl">Blog</h2>
        <p>
          A collections of thoughts, either related to animal rights,
          philosophy, minimalism or programming.
        </p>
      </div>
      {posts.map((post, idx) => (
        <Fragment key={post.slug}>
          {idx !== 0 && (
            <hr className="w-full border-b-1 border-gray dark:border-gray-800 mx-auto" />
          )}
          <Link href={`/blog/${post.slug}`}>
            <a className="flex flex-col p-4 link-reset border border-gray dark:border-gray-800 rounded-md">
              <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                {post.title}
              </span>
              <span className="text-white text-gray-600 dark:text-gray-400">
                {post.summary}
              </span>
            </a>
          </Link>
        </Fragment>
      ))}
    </main>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("blog");

  return { props: { posts } };
}
