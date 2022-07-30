import { SuppliersData } from 'utils/Mocks/Suppliers';
import SupplierCard from "components/SupplierCard";
import './styles.css';

function Suppliers() {
  return (
    <div id='suppliersContainer'>
      <p className='viewHeaderText'>{SuppliersData.Text}</p>

      <div id="supplierCardsContainer">
        {
          SuppliersData.SupplierCards.map((supplier) => {
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
      </div>
    </div>
  );
};

export default Suppliers;