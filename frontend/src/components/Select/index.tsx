import './styles.css';

type Props = {
  label: string;
  name: string;
  id: string;
  inputValue: string;
  categoriesList?: any[];
  mainList: any[];
  handleInput: Function;
};

function Select({
  label,
  name,
  id,
  inputValue,
  categoriesList,
  mainList,
  handleInput
}: Props) {
  const handleInputComponent = handleInput;
  return (
    <div className='selectContainer'>
      <select
        name={name}
        id={id}
        className='selectForm'
        value={inputValue}
        onChange={handleInputComponent()}
      >
        {
          categoriesList
            ? categoriesList.map((category) => {
              return (
                <optgroup key={category.id} label={category.nome}>
                  {
                    mainList &&
                    mainList.filter(s => s.regiao.nome === category.nome)
                      .map((item) => {
                        return (
                          <option
                            key={item.id}
                            value={item.sigla}
                          >
                            {item.nome}
                          </option>
                        )
                      })
                  }
                </optgroup>
              )
            })
            : <optgroup label={`${mainList.length} resultados`}>
              {
                mainList &&
                mainList.map((item) => {
                  return (
                    <option
                      key={item.id}
                      value={item.nome}
                    >
                      {item.nome}
                    </option>
                  )
                })
              }
            </optgroup>
        }
      </select>

      <label
        className={(inputValue || mainList) && 'filled'}
      >
        {label}
      </label>
    </div>
  );
};

export default Select;