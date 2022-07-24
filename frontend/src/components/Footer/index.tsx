import { GetCurrentYear } from 'utils/Functions';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import HomeIcon from '@mui/icons-material/Home';
import ContactIcon from '@mui/icons-material/ContactSupport';

function Footer() {
  return (
    <>
      <h1>FOOTER Component</h1>
      <p>
        Copyright &copy; {GetCurrentYear()} Companhia do Saldo. Todos os
        direitos reservados.

        <FacebookIcon />

        <InstagramIcon />

        <HomeIcon />

        <ContactIcon />
      </p>
    </>
  );
};

export default Footer;