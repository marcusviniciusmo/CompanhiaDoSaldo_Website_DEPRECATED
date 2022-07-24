import { IFooter } from 'utils/Types/Footer';
import { GetCurrentYear } from 'utils/Functions';
import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import Home from '@mui/icons-material/Home';
import ContactSupport from '@mui/icons-material/ContactSupport';

const copyright = '\u00a9';

const FooterText = `Copyright ${copyright} ${GetCurrentYear()} Companhia do
  Saldo. Todos os direitos reservados.`;

export const FooterData: IFooter = {
  Text: FooterText,
  Icons: [
    {
      Id: 1,
      Icon: Facebook,
      Url: 'http://facebook.com/ciasaldo',
      Title: 'Facebook',
      Target: '_blank',
      Rel: 'noreferrer',
      Color: 'var(--auxiliar-color-icon-facebook)',
      FontSize: 'large'
    },
    {
      Id: 2,
      Icon: Instagram,
      Url: 'https://www.instagram.com/companhiadosaldo',
      Title: 'Instagram',
      Target: '_blank',
      Rel: 'noreferrer',
      Color: 'var(--auxiliar-color-icon-instagram)',
      FontSize: 'large'
    },
    {
      Id: 3,
      Icon: Home,
      Url: '/',
      Title: 'Home',
      Color: 'var(--first-color)',
      FontSize: 'large'
    },
    {
      Id: 4,
      Icon: ContactSupport,
      Url: '/contato',
      Title: 'Contato',
      Color: 'var(--auxiliar-color-icon-contact)',
      FontSize: 'large'
    },
  ]
};