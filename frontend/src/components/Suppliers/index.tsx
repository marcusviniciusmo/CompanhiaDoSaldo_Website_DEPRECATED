import { SuppliersText, SupplierCards } from 'utils/Mocks/Suppliers';
import SupplierCard from "components/SupplierCard";

function Suppliers() {
  return (
    <>
      <h1>SUPPLIERS Component</h1>

      <p>{SuppliersText}</p>

      {
        SupplierCards.map((supplier) => {
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