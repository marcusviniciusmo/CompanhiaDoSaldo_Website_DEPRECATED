import './styles.css';

type Props = {
  label: string;
  name: string;
  id: string;
  content: string;
};

function Select({ label, name, id, content }: Props) {
  return (
    <div className='selectContainer'>
      <select
        name={name}
        id={id}
        className='selectForm'
      >
        <optgroup>
          <option value="">{content}</option>
        </optgroup>
      </select>

      <label
        className={content && 'filled'}
      >{label}</label>
    </div>
  );
};

export default Select;