import './styles.css';

type Props = {
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
};

function Input({
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
      />
      <label htmlFor={id}>Label</label>
    </div>
  );
};

export default Input;