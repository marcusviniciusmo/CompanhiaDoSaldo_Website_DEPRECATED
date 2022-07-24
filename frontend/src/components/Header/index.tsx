import {
  HeaderTitle,
  HeaderImageUrl,
  HeaderImageDescription
} from 'utils/Mocks/Header';
import Menu from "components/Menu";

function Header() {
  return (
    <>
      <h1>HEADER Component</h1>
      <h1>{HeaderTitle}</h1>

      <img src={HeaderImageUrl} alt={HeaderImageDescription} />

      <Menu />
    </>
  );
};

export default Header;