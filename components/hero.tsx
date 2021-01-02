type Props = {
  align: "left" | "center" | "right";
  headline: string;
  subheading?: string;
};

export default function Hero({ align = "left", headline, subheading }: Props) {
  return (
    <>
      <style jsx>{`
        .hero {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .headline {
          font-size: 2rem;
          font-weight: 400;
          max-width: 33ch;
        }

        .subheading {
          font-size: 1rem;
          max-width: 45ch;
        }

        .left {
          text-align: left;
          margin-right: auto;
        }
        .center {
          text-align: center;
          margin: auto;
        }
        .right {
          text-align: right;
          margin-left: auto;
        }
      `}</style>

      <section className={`hero ${align}`}>
        <h1 className="headline">{headline}</h1>
        {subheading && <span className="subheading">{subheading}</span>}
      </section>
    </>
  );
}
