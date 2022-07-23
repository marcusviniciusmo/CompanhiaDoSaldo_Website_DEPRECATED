import { IMenuItem } from 'utils/Types/MenuItem';
import { Link } from 'react-router-dom';
import './styles.css';

function MenuItem({ To, Text }: IMenuItem) {
  return (
    <Link to={To}>
      <li className="menuItemContainer">
        {Text}
      </li>
    </Link>
  );
};

export default MenuItem;