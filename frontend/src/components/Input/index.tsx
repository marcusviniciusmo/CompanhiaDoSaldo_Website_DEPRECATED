import {
  ClearIconTitle,
  ClearGenercInputFunction,
  ClearIcon,
  ClearIconFontSize
} from 'utils/Mocks/Input';
import './styles.css';

type Props = {
  label: string;
  type: string;
  name: string;
  id: string;
  size?: number;
  maxLength?: number;
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
  placeholder?: string;
  value: string | undefined;
  onChange: Function;
  clear?:Function;
};

function Input({
  label,
  type,
  name,
  id,
  size,
  maxLength,
  min,
  max,
  step,
  defaultValue,
  placeholder,
  value,
  onChange,
  clear
}: Props) {
  return (
    <div className={`${type}InputContainer`}>
      <input
        className={`${type}InputForm`}
        type={type}
        name={name}
        id={id}
        size={size}
        maxLength={maxLength}
        min={min}
        max={max}
        step={step}
        defaultValue={defaultValue}
        placeholder={placeholder}
        value={value}
        onChange={onChange()}
      />

      <label
        className={value && 'filled'}
        htmlFor={id}
      >
        {label}
      </label>

      <div
        title={ClearIconTitle}
        className={value ? `${type}ClearIcon` : 'hideClearIcon'}
        onClick={clear ? clear() : ClearGenercInputFunction}
      >
        <ClearIcon fontSize={ClearIconFontSize} />
      </div>
    </div>
  );
};

export default Input;