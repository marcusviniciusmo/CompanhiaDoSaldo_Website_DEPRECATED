type Props = {
  imageUrl: string;
  imageDescription: string;
  title: string;
  text: string;
  buttonText: string;
};

function SupplierCard({
  imageUrl,
  imageDescription,
  title,
  text,
  buttonText
}: Props) {
  return (
    <>
      SUPPLIER_CARD Component

      <img src={imageUrl} alt={imageDescription} />

      <span>{title}</span>
      <span>{text}</span>

      <button>{buttonText}</button>
    </>
  );
};

export default SupplierCard;