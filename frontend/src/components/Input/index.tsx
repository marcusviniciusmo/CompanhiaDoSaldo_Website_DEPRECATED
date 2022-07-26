import { IInput } from 'utils/Types/Input';
import { InputData } from 'utils/Mocks/Input';
import './styles.css';

export function Input({
  Label,
  Type,
  Name,
  Id,
  Size,
  MaxLength,
  Min,
  Max,
  Step,
  Placeholder,
  Value,
  OnChange,
  Checked,
  OnChangeGeneric,
  Clear
}: IInput) {
  return (
    <div className={`${Type}InputContainer`}>
      <input
        className={`${Type}InputForm`}
        type={Type}
        name={Name}
        id={Id}
        size={Size}
        maxLength={MaxLength}
        min={Min}
        max={Max}
        step={Step}
        placeholder={Placeholder}
        value={Value}
        onChange={OnChange ? OnChange() : OnChangeGeneric}
        checked={Checked}
      />

      <label
        className={Value && 'filled'}
        htmlFor={Id}
      >
        {Label}
      </label>

      <div
        title={InputData.IconTitle}
        className={Value ? `${Type}ClearIcon` : 'hideClearIcon'}
        onClick={Clear ? Clear() : InputData.ClearGenericInput}
      >
        <InputData.Icon fontSize={InputData.IconFontSize} />
      </div>
    </div>
  );
};

export default Input;