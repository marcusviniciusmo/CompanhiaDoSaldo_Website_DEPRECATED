type Props = {
  name: string;
  id: string;
  content: any;
};

function Select({ name, id, content }: Props) {
  return (
    <>
      SELECT Component

      <select
        name={name}
        id={id}
      >
        <optgroup>
          <option value="">{content}</option>
        </optgroup>
      </select>
    </>
  );
};

export default Select;