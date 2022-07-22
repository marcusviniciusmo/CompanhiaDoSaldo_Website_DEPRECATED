type Props = {
  buttonText: string;
};

function MenuItem({ buttonText }: Props) {
  return (
    <>
      Item de Menu - {buttonText}
    </>
  );
};

export default MenuItem;