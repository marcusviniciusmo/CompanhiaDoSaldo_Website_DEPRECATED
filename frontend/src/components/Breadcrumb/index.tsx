type Props = {
  path: string;
  title?: string;
};

function Breadcrumb({ path, title }: Props) {
  return (
    <>
      BREADCRUMB Component
      <h3>{path}</h3>
      <h1>{title}</h1>
    </>
  );
};

export default Breadcrumb;