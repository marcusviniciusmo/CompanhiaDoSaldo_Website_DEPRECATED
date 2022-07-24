import { IBreadcrumb } from 'utils/Types/Breadcrumb';
import './styles.css';

function Breadcrumb({ Path, Title }: IBreadcrumb) {
  return (
    <header id='breadcrumbContainer'>
      <hgroup>
        <h3>{Path}</h3>
        <h1>{Title}</h1>
      </hgroup>
    </header>
  );
};

export default Breadcrumb;