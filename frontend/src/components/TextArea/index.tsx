import CloseIcon from '@mui/icons-material/Close';
import './styles.css';

type Props = {
  label: string;
  name: string;
  id: string;
  cols: number;
  rows: number;
  value: string;
  onChange: Function;
  clear: Function | undefined;
}

function TextArea({ label, name, id, cols, rows, value, onChange, clear }: Props) {
  return (
    <div className='textAreaContainer'>
      <textarea
        className='textAreaForm'
        name={name}
        id={id}
        cols={cols}
        rows={rows}
        value={value}
        onChange={onChange ? onChange() : () => ''}
      />

      <label
        className={value && 'filled'}
        htmlFor={id}
      >
        {label}
      </label>

      <div
        title='Limpar'
        className={value ? 'clearIcon' : 'hideClearIcon'}
        onClick={clear ? clear() : () => ''}
      >
        <CloseIcon fontSize='large' />
      </div>
    </div>
  );
};

export default TextArea;