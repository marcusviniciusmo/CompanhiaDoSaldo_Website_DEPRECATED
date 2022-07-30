import { ISupplierCard } from 'utils/Types/SupplierCard';
import './styles.css';

function SupplierCard({ Image, Title, Text, ButtonText }: ISupplierCard) {
  return (
    <div id='supplierCardContainer'>
      <div className="supplierCardTop">
        <img
          className='supplierCardImage'
          src={Image.Url}
          alt={Image.Description}
        />
      </div>

      <div className="supplierCardBottom">
        <span className='supplierCardTitle'>{Title}</span>
        <span className='supplierCardText'>{Text}</span>

        <button className='supplierCardButton'>{ButtonText}</button>
      </div>
    </div>
  );
};

export default SupplierCard;