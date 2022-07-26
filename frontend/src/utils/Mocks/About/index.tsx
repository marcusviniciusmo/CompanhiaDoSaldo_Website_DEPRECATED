import { IAbout } from 'utils/Types/About';
import { GetAgeOfStore } from 'utils/Functions';
import Store from 'assets/images/about/store.jpg';

export const AboutData: IAbout = {
  Title: 'A Empresa',
  Text: `A Companhia do Saldo, mais conhecida como Saldão, está há quase
    ${GetAgeOfStore()} anos no mercado. Uma loja de tecidos, especificamente de
    malhas, oferecendo serviços de qualidade, confiança e credibilidade.`,
  Image: {
    Url: Store,
    Description: 'Loja Companhia do Saldo'
  },
  FigcaptionTitle: 'Companhia do Saldo',
  FigcaptionText: 'Venha conhecer.'
};