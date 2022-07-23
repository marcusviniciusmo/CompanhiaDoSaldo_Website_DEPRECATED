import { IMenuItem } from 'utils/Types/MenuItem';
import { Link } from 'react-router-dom';

function MenuItem({ To, Text }: IMenuItem) {
  return (
    <Link to={To}>
      Item de Menu - {Text}
    </Link>
  );
};

export default MenuItem;