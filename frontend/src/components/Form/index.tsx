type Props = {
  content: any[];
};

function Form({ content }: Props) {
  return (
    <>
      FORM Component

      <iframe>
        {content}
      </iframe>
    </>
  );
};

export default Form;