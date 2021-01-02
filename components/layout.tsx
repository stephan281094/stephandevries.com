type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <style jsx>{`
        .layout {
          display: flex;
          flex-direction: column;
          padding: 5vw 0;
          min-height: 100vh;
        }
      `}</style>
      <div className="layout">{children}</div>
    </>
  );
}
