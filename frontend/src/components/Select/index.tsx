import { IRegions } from 'utils/Types/Address';
import './styles.css';

type Props = {
  label: string;
  name: string;
  id: string;
  content: string;
  regions?: IRegions[];
};

function Select({ label, name, id, content, regions }: Props) {
  return (
    <div className='selectContainer'>
      <select
        name={name}
        id={id}
        className='selectForm'
      >
        {
          regions &&
          regions.map((region) => {
            return (
              <optgroup key={region.id} label={region.nome}>
                <option value="">{content}</option>
              </optgroup>
            )
          })
        }
      </select>

      <label
        className={content && 'filled'}
      >{label}</label>
    </div>
  );
};

export default Select;