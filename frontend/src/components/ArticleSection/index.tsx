type Props = {
  children: React.ReactNode;
};

function ArticleSection({ children }: Props) {
  return (
    <>
      <h1>ARTICLE_SECTION Component</h1>
      {children}
    </>
  );
};

export default ArticleSection;