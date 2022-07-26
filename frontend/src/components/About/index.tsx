import { GetAgeOfStore } from 'utils/Functions';
import Store from 'assets/images/about/store.jpg';

function About() {
  return (
    <>
      <h1>ABOUT Component</h1>
      <h2>A Empresa</h2>
      <p>
        {`A Companhia do Saldo, mais conhecida como Saldão, está há quase
        ${GetAgeOfStore()} anos no mercado. Uma loja de tecidos,
        especificamente de malhas, oferecendo serviços de qualidade, confiança e
        credibilidade.`}
      </p>

      <img src={Store} alt="Loja Companhia do Saldo" />

      <h3>Companhia do Saldo</h3>
      <p>Venha conhecer.</p>
    </>
  );
};

export default About;