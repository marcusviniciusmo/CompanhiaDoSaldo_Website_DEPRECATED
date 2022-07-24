import { IBreadcrumb } from 'utils/Types/Breadcrumb';

function Breadcrumb({ Path, Title }: IBreadcrumb) {
  return (
    <>
      BREADCRUMB Component
      <h3>{Path}</h3>
      <h1>{Title}</h1>
    </>
  );
};

export default Breadcrumb;