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
  onChange
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
    </div>
  );
};

export default Input;