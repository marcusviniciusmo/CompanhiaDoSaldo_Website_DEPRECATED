import { HeaderData } from 'utils/Mocks/Header';
import Menu from "components/Menu";

function Header() {
  return (
    <>
      <h1>HEADER Component</h1>
      <h1>{HeaderData.Title}</h1>

      <img src={HeaderData.Image.Url} alt={HeaderData.Image.Description} />

      <Menu />
    </>
  );
};

export default Header;