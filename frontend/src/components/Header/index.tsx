import { HeaderData } from 'utils/Mocks/Header';
import Menu from "components/Menu";
import './styles.css';

function Header() {
  return (
    <header id='headerContainer'>
      <h1>{HeaderData.Title}</h1>

      <img src={HeaderData.Image.Url} alt={HeaderData.Image.Description} />

      <Menu />
    </header>
  );
};

export default Header;