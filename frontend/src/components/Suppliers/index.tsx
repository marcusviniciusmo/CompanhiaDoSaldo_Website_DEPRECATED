import { SupplierCardData } from 'utils/Mocks/SupplierCard';
import SupplierCard from "components/SupplierCard";

function Suppliers() {
  return (
    <>
      <h1>SUPPLIERS Component</h1>

      <p>
        Nós crescemos junto com nossos clientes. Conheça nossos parceiros e veja
        a equipe de peso por trás do seu sucesso.
      </p>

      {
        SupplierCardData.map((supplier) => {
          return (
            <SupplierCard
              key={supplier.Id}
              Id={supplier.Id}
              Image={supplier.Image}
              Title={supplier.Title}
              Text={supplier.Text}
              ButtonText={supplier.ButtonText}
            />
          )
        })
      }
    </>
  );
};

export default Suppliers;