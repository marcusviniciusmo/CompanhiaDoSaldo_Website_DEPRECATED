import Logo from 'assets/images/header/logo.png';
import Menu from "components/Menu";

function Header() {
  return (
    <>
      <h1>HEADER Component</h1>
      <h1>A melhor malha está aqui</h1>

      <img src={Logo} alt="Logo Companhia do Saldo" />

      <Menu />
    </>
  );
};

export default Header;