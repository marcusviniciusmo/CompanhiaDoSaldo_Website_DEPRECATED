import { ISupplierCard } from 'utils/Types/SupplierCard';

function SupplierCard({ Image, Title, Text, ButtonText }: ISupplierCard) {
  return (
    <>
      SUPPLIER_CARD Component

      <img src={Image.Url} alt={Image.Description} />

      <span>{Title}</span>
      <span>{Text}</span>

      <button>{ButtonText}</button>
    </>
  );
};

export default SupplierCard;