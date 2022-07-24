type Props = {
  children: React.ReactNode;
};

function ArticleAside({ children }: Props) {
  return (
    <>
      <h1>ARITCLE_ASIDE Component</h1>
      {children}
    </>
  );
};

export default ArticleAside;