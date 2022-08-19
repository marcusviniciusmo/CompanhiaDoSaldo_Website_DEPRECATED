import { ITextArea } from 'utils/Types/TextArea';
import { TextAreaData } from 'utils/Mocks/TextArea';
import './styles.css';

function TextArea({
  Label,
  Name,
  Id,
  Cols,
  Rows,
  Value,
  OnChange,
  Clear }: ITextArea) {
  return (
    <div className='textAreaContainer'>
      <textarea
        className='textAreaForm'
        name={Name}
        id={Id}
        cols={Cols}
        rows={Rows}
        value={Value}
        onChange={OnChange ? OnChange() : () => ''}
      />

      <label
        className={Value && 'filled'}
        htmlFor={Id}
      >
        {Label}
      </label>

      <div
        title={TextAreaData.IconTitle}
        className={Value ? 'clearIcon' : 'hideClearIcon'}
        onClick={Clear ? Clear() : TextAreaData.ClearGenericInput}
      >
        <TextAreaData.Icon fontSize={TextAreaData.IconFontSize} />
      </div>
    </div>
  );
};

export default TextArea;