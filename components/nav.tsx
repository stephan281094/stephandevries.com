import Link from "next/link";

export default function Nav() {
  return (
    <>
      <style jsx>{`
        .nav {
          display: grid;
          grid-template-columns: 1fr auto auto;
          grid-gap: 2.5vw;
          align-items: center;
        }

        .link {
          display: block;
          color: var(--text);
          text-decoration: none;
          outline: none;
        }

        .link:hover,
        .link:focus {
          background-image: linear-gradient(var(--text), var(--text));
          background-size: 100% 1px;
          background-position: left bottom;
          background-repeat: no-repeat;
        }

        .logo {
          margin-right: auto;
        }
      `}</style>

      <nav className="nav">
        <Link href="/">
          <a className="link logo">Stephan de Vries</a>
        </Link>
        <Link href="/thoughts">
          <a className="link">Thoughts</a>
        </Link>
        <Link href="/about">
          <a className="link">About</a>
        </Link>
      </nav>
    </>
  );
}
