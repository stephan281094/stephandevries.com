type Props = {
  children: React.ReactNode;
};

export default function Container({ children }: Props) {
  return (
    <>
      <style jsx>{`
        .container {
          flex: 1;
          display: flex;
          flex-direction: column;
          padding: 0 10vw;
        }
      `}</style>
      <div className="container">{children}</div>
    </>
  );
}
