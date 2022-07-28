import {
  SupplierImageUrl01,
  SupplierImageUrl02,
  SupplierImageUrl03,
  SupplierImageUrl04,
  SupplierImageUrl05,
  SupplierImageUrl06,
  SupplierImageUrl07,
  SupplierImageUrl08,
  SupplierImageUrl09,
  SupplierImageUrl10,
  SupplierImageUrl11,
  SupplierImageUrl12,
  SupplierImageDescription01,
  SupplierImageDescription02,
  SupplierImageDescription03,
  SupplierImageDescription04,
  SupplierImageDescription05,
  SupplierImageDescription06,
  SupplierImageDescription07,
  SupplierImageDescription08,
  SupplierImageDescription09,
  SupplierImageDescription10,
  SupplierImageDescription11,
  SupplierImageDescription12,
  SupplierTitle01,
  SupplierTitle02,
  SupplierTitle03,
  SupplierTitle04,
  SupplierTitle05,
  SupplierTitle06,
  SupplierTitle07,
  SupplierTitle08,
  SupplierTitle09,
  SupplierTitle10,
  SupplierTitle11,
  SupplierTitle12,
  SupplierText01,
  SupplierText02,
  SupplierText03,
  SupplierText04,
  SupplierText05,
  SupplierText06,
  SupplierText07,
  SupplierText08,
  SupplierText09,
  SupplierText10,
  SupplierText11,
  SupplierText12,
  SupplierButtonText01,
  SupplierButtonText02,
  SupplierButtonText03,
  SupplierButtonText04,
  SupplierButtonText05,
  SupplierButtonText06,
  SupplierButtonText07,
  SupplierButtonText08,
  SupplierButtonText09,
  SupplierButtonText10,
  SupplierButtonText11,
  SupplierButtonText12,
} from 'utils/Mocks/SupplierCard';
import SupplierCard from "components/SupplierCard";

function Suppliers() {
  return (
    <>
      <h1>SUPPLIERS Component</h1>

      <p>
        Nós crescemos junto com nossos clientes. Conheça nossos parceiros e veja
        a equipe de peso por trás do seu sucesso.
      </p>

      <SupplierCard
        imageUrl={SupplierImageUrl01}
        imageDescription={SupplierImageDescription01}
        title={SupplierTitle01}
        text={SupplierText01}
        buttonText={SupplierButtonText01}
      />

      <SupplierCard
        imageUrl={SupplierImageUrl02}
        imageDescription={SupplierImageDescription02}
        title={SupplierTitle02}
        text={SupplierText02}
        buttonText={SupplierButtonText02}
      />

      <SupplierCard
        imageUrl={SupplierImageUrl03}
        imageDescription={SupplierImageDescription03}
        title={SupplierTitle03}
        text={SupplierText03}
        buttonText={SupplierButtonText03}
      />

      <SupplierCard
        imageUrl={SupplierImageUrl04}
        imageDescription={SupplierImageDescription04}
        title={SupplierTitle04}
        text={SupplierText04}
        buttonText={SupplierButtonText04}
      />

      <SupplierCard
        imageUrl={SupplierImageUrl05}
        imageDescription={SupplierImageDescription05}
        title={SupplierTitle05}
        text={SupplierText05}
        buttonText={SupplierButtonText05}
      />

      <SupplierCard
        imageUrl={SupplierImageUrl06}
        imageDescription={SupplierImageDescription06}
        title={SupplierTitle06}
        text={SupplierText06}
        buttonText={SupplierButtonText06}
      />

      <SupplierCard
        imageUrl={SupplierImageUrl07}
        imageDescription={SupplierImageDescription07}
        title={SupplierTitle07}
        text={SupplierText07}
        buttonText={SupplierButtonText07}
      />

      <SupplierCard
        imageUrl={SupplierImageUrl08}
        imageDescription={SupplierImageDescription08}
        title={SupplierTitle08}
        text={SupplierText08}
        buttonText={SupplierButtonText08}
      />

      <SupplierCard
        imageUrl={SupplierImageUrl09}
        imageDescription={SupplierImageDescription09}
        title={SupplierTitle09}
        text={SupplierText09}
        buttonText={SupplierButtonText09}
      />

      <SupplierCard
        imageUrl={SupplierImageUrl10}
        imageDescription={SupplierImageDescription10}
        title={SupplierTitle10}
        text={SupplierText10}
        buttonText={SupplierButtonText10}
      />

      <SupplierCard
        imageUrl={SupplierImageUrl11}
        imageDescription={SupplierImageDescription11}
        title={SupplierTitle11}
        text={SupplierText11}
        buttonText={SupplierButtonText11}
      />

      <SupplierCard
        imageUrl={SupplierImageUrl12}
        imageDescription={SupplierImageDescription12}
        title={SupplierTitle12}
        text={SupplierText12}
        buttonText={SupplierButtonText12}
      />
    </>
  );
};

export default Suppliers;