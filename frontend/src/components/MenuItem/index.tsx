import { Link } from 'react-router-dom';

type Props = {
  to: string;
  buttonText: string;
};

function MenuItem({ to, buttonText }: Props) {
  return (
    <Link to={to}>
      Item de Menu - {buttonText}
    </Link>
  );
};

export default MenuItem;