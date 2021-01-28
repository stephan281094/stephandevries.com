import Link from "next/link";

export default function Nav() {
  return (
    <>
      <nav className="w-full flex flex-row space-x-4 sm:space-x-12">
        <Link href="/">
          <a className="mr-auto">
            Stephan<span className="hidden sm:inline"> de Vries</span>
          </a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </nav>
    </>
  );
}
